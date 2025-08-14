"use client";

import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';

const Footer = () =>
{
	const [darkMode, setDarkMode] = useState(false);
	const [isVisible, setIsVisible] = useState(false);

	// Écouter les changements de thème depuis l'AppBar
	useEffect(() => {
		const checkDarkMode = () =>
		{
			const isDarkMode = document.body.classList.contains('dark-mode');
			setDarkMode(isDarkMode);
		};

		// Vérifier l'état initial
		checkDarkMode();

		// Observer les changements de classe sur le body
		const observer = new MutationObserver(checkDarkMode);
		observer.observe(document.body, {
			attributes: true,
			attributeFilter: ['class']
		});

		return () => observer.disconnect();
	}, []);

	// Détecter quand on arrive en bas de page
	useEffect(() =>
	{
		const handleScroll = () =>
		{
			const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight;
			
			// Afficher le footer quand on est proche du bas (50px avant la fin)
			const isAtBottom = scrollTop + windowHeight >= documentHeight - 50;
			setIsVisible(isAtBottom);
		};

		window.addEventListener('scroll', handleScroll);
		handleScroll(); // Vérifier l'état initial

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<footer 
			className={isVisible ? "fixed-footer" : "hidden-footer"} 
		>
			<Box className="container">
				<div className="footer-text" style={{ 
					color: darkMode ? '#fafafa' : '#000000',
					fontSize: '1rem'
				}}>
					&copy; 2025 - Tous droits réservés
				</div>
			</Box>
		</footer>
	);
};

export default Footer;
