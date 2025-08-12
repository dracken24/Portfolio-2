import Box from '@mui/material/Box'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import AppBarComponent from './components/appBar'

/***********************
	Header Component
 ***********************/

// const Header = () => {
// 	return (
// 		<header id="welcome-section">
// 			<div className="forest"></div>
// 			<div className="silhouette"></div>
// 			<div className="moon"></div>
// 			<div className="container">
// 				<h1>
// 					<span className="line">Spécialité</span>
// 					<span className="line">Programmation objets</span>
// 					<span className="line">
// 						<span className="color">&</span> plus.
// 					</span>
// 				</h1>
// 				<div className="buttons">
// 					<a href="#projects">mon portfolio</a>
// 					<a href="#contact" className="cta">contactez-moi</a>
// 				</div>
// 			</div>
// 		</header>
// 	)
// }

// componentDidMount() {
// 		const navbar = document.querySelector('#navbar');
// 		const header = document.querySelector('#welcome-section');
// 		const forest = document.querySelector('.forest');
// 		const silhouette = document.querySelector('.silhouette');
// 		let forestInitPos = -300;

// 		window.onscroll = () => {
// 			let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

// 			if (scrollPos <= window.innerHeight) {
// 				silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
// 				forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
// 			}

// 			if (scrollPos - 100 <= window.innerHeight)
// 			header.style.visibility = header.style.visibility === 'hidden' && 'visible';else
// 			header.style.visibility = 'hidden';

// 			// if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');else
// 			// navbar.classList.remove('bg-active');
// 		};

// 		(function navSmoothScrolling() {
// 			const internalLinks = document.querySelectorAll('a[href^="#"]');
// 			for (let i in internalLinks) {
// 				if (internalLinks.hasOwnProperty(i)) {
// 					internalLinks[i].addEventListener('click', e => {
// 						e.preventDefault();
// 						document.querySelector(internalLinks[i].hash).scrollIntoView({
// 							block: 'start',
// 							behavior: 'smooth' });

// 					});
// 				}
// 			}
// 		})();
// 	}}

export default function Home()
{
	return (
		<Box>
			{/* AppBar */}
			<AppBarComponent />
			{/* Grid */}
			<Box sx={{ flexGrow: 1 }}>
				<Grid container spacing={2}>
					{/* Grid container */}
					<Grid container spacing={2} width="100%">
						{/* Container 1 */}
						<Container sx={{ backgroundColor: '#808080', width: '100%', marginTop: '15px' }}>
							<CardContent>
								<Typography variant="h6">Container 1</Typography>
							</CardContent>
						</Container>
						{/* Container 2 */}
						<Container sx={{ backgroundColor: '#808080', width: '100%' }}>
							<CardContent>
								<Typography variant="h6">Container 2</Typography>
							</CardContent>
						</Container>
						{/* Container 3 */}
						<Container sx={{ backgroundColor: '#808080', width: '100%' }}>
							<CardContent>
								<Typography variant="h6">Container 3</Typography>
							</CardContent>
						</Container>
					</Grid>
				</Grid>
			</Box>
		</Box>
	)
}
