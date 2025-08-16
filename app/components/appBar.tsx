"use client";

import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import MenuIcon from '@mui/icons-material/Menu';
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { useEffect, useState } from "react";

import LoginModal from './LoginModal';
import './components.css';

export default function AppBarComponent()
{
	const [darkMode, setDarkMode] = useState(false);
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
	const [loginModalOpen, setLoginModalOpen] = useState(false);
	const open = Boolean(anchorEl);
	const router = useRouter();

	// Appliquer le thème sombre au body
	useEffect(() =>
	{
		if (darkMode)
		{
			document.body.classList.add('dark-mode');
		}
		else
		{
			document.body.classList.remove('dark-mode');
		}
	}, [darkMode]);

	const handleMenuClick = (event: React.MouseEvent<HTMLElement>) =>
	{
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () =>
	{
		setAnchorEl(null);
	};
	
	const handleDarkModeToggle = () =>
	{
		setDarkMode(!darkMode);
	};
	
	const handleLinkClick = (link: string) =>
	{
		router.push(link);
	};

	const handleAdminClick = () =>
	{
		handleMenuClose();
		setLoginModalOpen(true);
	};

	return (
		<>
			<AppBar className={`my-app-bar ${darkMode ? 'dark-mode' : ''}`} position="fixed">
				<Toolbar>

					<Typography variant="h6" className="my-typography" color="black">
						<Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>Portfolio</Link>
					</Typography>

					<IconButton 
						edge="start" 
						color="inherit" 
						aria-label="menu"
						onClick={handleMenuClick}
						aria-controls={open ? 'basic-menu' : undefined}
						aria-haspopup="true"
						aria-expanded={open ? 'true' : undefined}
					>
						<MenuIcon />
					</IconButton>
					<Menu
						id="basic-menu"
						anchorEl={anchorEl}
						open={open}
						onClose={handleMenuClose}
					>
						<MenuItem onClick={() => handleLinkClick('/')}>Accueil</MenuItem>
						<MenuItem onClick={() => handleLinkClick('/projets')}>Projets</MenuItem>
						<MenuItem onClick={() => handleLinkClick('/a-propos')}>À propos</MenuItem>
						<MenuItem onClick={() => handleLinkClick('/contact')}>Contact</MenuItem>
						<MenuItem onClick={handleAdminClick}>Admin</MenuItem>
					</Menu>
					<IconButton 
						edge="end" 
						color="inherit" 
						aria-label="dark mode toggle" 
						onClick={handleDarkModeToggle}
						style={{
							color: darkMode ? '#ffffff' : '#ffffff'  // Blanc dans les deux modes
						}}
					> 
						{darkMode ? <LightModeIcon /> : <DarkModeIcon />}
					</IconButton>
				</Toolbar>
			</AppBar>
			
			<LoginModal 
				open={loginModalOpen} 
				onClose={() => setLoginModalOpen(false)} 
			/>
		</>
	)
}
