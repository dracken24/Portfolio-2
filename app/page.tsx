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
						{/* <Menu toggleMenu={toggleMenu} showMenu={menuState} /> */}
						{/* <Navigation toggleMenu={toggleMenu} showMenu={menuState} /> */}
						<Header />
					</>
				)}
			</MenuState>
			
			<Container className="accueil_body">
				<Typography>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. 
					Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
					Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Lorem ipsum dolor sit amet consectetur adipisicing elit. 
					Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
					Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
					
					Lorem ipsum dolor sit amet consectetur adipisicing elit. 
					Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
					Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Lorem ipsum dolor sit amet consectetur adipisicing elit. 
					Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
					Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.  
					
					Lorem ipsum dolor sit amet consectetur adipisicing elit. 
					Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
					Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Lorem ipsum dolor sit amet consectetur adipisicing elit. 
					Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
					Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.  
					Lorem ipsum dolor sit amet consectetur adipisicing elit. 
					Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
					Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Lorem ipsum dolor sit amet consectetur adipisicing elit. 
					Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
					Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.  
					Lorem ipsum dolor sit amet consectetur adipisicing elit. 
					Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
					Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
					Lorem ipsum dolor sit amet consectetur adipisicing elit. 
					Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
					Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.  
					Lorem ipsum dolor sit amet consectetur adipisicing elit. 
					Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
					Quisquam, quos. Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
			</Container>
			
			<Footer />
		</Box>
	);
}
