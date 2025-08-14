"use client";

import AppBarComponent from './components/appBar';
import Header from './components/Header';
// import Menu from './components/Menu';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
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
			<Container className="accueil_body" sx={{ marginTop: '178px' }}>
				<Box>
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
			</Container>
			
			{/* Faire un slide aleatoire des projets */}
			<Container className="accueil_body">
				<Box>
					<Typography 
						variant="h1" 
						sx={{ 
							fontSize: '20px', 
							fontWeight: 'bold',
							whiteSpace: 'pre-line'
						}}
						bgcolor="#add0d0"
					>
						Faire un slide aleatoire des projets ici
						{'\n\n'}

					</Typography>
				</Box>
			</Container>
			
			{/* Autre section a discuter */}
			<Container className="accueil_body">
				<Box>
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
			</Container>
			<Footer />
		</Box>
	);
}
