"use client";

import AppBarComponent from './components/appBar';
import Header from './components/Header';
// import Menu from './components/Menu';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Footer from './components/Footer';
import MenuState from './components/MenuState';
// import Navigation from './components/Navigation';

export default function Home()
{
	return (
		<Box>
			{/* AppBar Material-UI existant */}
			<AppBarComponent />
			
			{/* Composants adaptés du code importé */}
			<MenuState>
				{(menuState, toggleMenu) => (
					<>
						<Header />
					</>
				)}
			</MenuState>
			
			{/* Bref description de moi */}
			<Box className="accueil_body" sx={{ marginTop: '178px' }}>
				<Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
					<Typography 
						variant="h1" 
						sx={{ 
							fontSize: '20px', 
							fontWeight: 'bold',
							whiteSpace: 'pre-line',
						}}
						bgcolor="#add0d0"
					>
						Breve description
						{'\n\n'}

					</Typography>
					<Typography 
						bgcolor="#add0fa"
					>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.  
						Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
						Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
						
					</Typography>
				</Box>
			</Box>
			
			{/* Faire un slide aleatoire des projets */}
			<Box className="accueil_body">
				<Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
					<Typography 
						variant="h1" 
						sx={{ 
							fontSize: '20px', 
							fontWeight: 'bold',
							whiteSpace: 'pre-line'
						}}
						bgcolor="#ad70d0"
					>
						Faire un slide aleatoire des projets ici
						{'\n\n'}

					</Typography>
				</Box>
			</Box>
			
			{/* Autre section a discuter */}
			<Box className="accueil_body">
				<Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
					<Typography 
						variant="h1" 
						sx={{ 
							fontSize: '20px', 
							fontWeight: 'bold',
							whiteSpace: 'pre-line'
						}}
						bgcolor="#add0d0"
					>
						Autre section a discuter
						{'\n\n'}

					</Typography>
				</Box>
			</Box>
			<Footer />
		</Box>
	);
}
