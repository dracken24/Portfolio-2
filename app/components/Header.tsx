"use client";

import { useEffect, useRef } from 'react';

const Header = () =>
{
	const headerRef = useRef<HTMLElement>(null);
	const forestRef = useRef<HTMLDivElement>(null);
	const silhouetteRef = useRef<HTMLDivElement>(null);

	useEffect(() =>
	{
		const header = headerRef.current;
		const forest = forestRef.current;
		const silhouette = silhouetteRef.current;
		
		if (!header || !forest || !silhouette) return;

		let forestInitPos = -300;

		const handleScroll = () =>
		{
			const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

			if (scrollPos <= window.innerHeight)
			{
				silhouette.style.bottom = `${parseInt(String(scrollPos / 6))}px`;
				forest.style.bottom = `${parseInt(String(forestInitPos + scrollPos / 6))}px`;
			}

			if (scrollPos - 100 <= window.innerHeight)
			{
				header.style.visibility = header.style.visibility === 'hidden' ? 'visible' : 'visible';
			}
			else
			{
				header.style.visibility = 'hidden';
			}
		};

		// Gestion du scroll fluide pour les liens internes
		const handleSmoothScroll = (e: Event) =>
		{
			const target = e.target as HTMLAnchorElement;
			if (target.hash)
			{
				e.preventDefault();
				const element = document.querySelector(target.hash);
				if (element)
				{
					element.scrollIntoView({
						block: 'start',
						behavior: 'smooth'
					});
				}
			}
		};

		// Ajouter les event listeners
		window.addEventListener('scroll', handleScroll);
		const internalLinks = document.querySelectorAll('a[href^="#"]');
		internalLinks.forEach(link => {
			link.addEventListener('click', handleSmoothScroll);
		});

		// Cleanup
		return () =>
		{
			window.removeEventListener('scroll', handleScroll);
			internalLinks.forEach(link => {
				link.removeEventListener('click', handleSmoothScroll);
			});
		};
	}, []);

	return (
		<header id="welcome-section" ref={headerRef}>
			<div className="forest" ref={forestRef}></div>
			<div className="silhouette" ref={silhouetteRef}></div>
			<div className="moon"></div>
			<div className="container">
				<h1>
					<span className="line">Spécialité</span>
					<span className="line">Programmation objets</span>
					<span className="line">
						<span className="color">&</span> plus.
					</span>
				</h1>
				<div className="buttons">
					<a href="#projects">mon portfolio</a>
					<a href="#contact" className="cta">contactez-moi</a>
				</div>
			</div>
		</header>
	);
};

export default Header;
