"use client";

import AppBarComponent from './components/appBar';
import Header from './components/Header';
// import Menu from './components/Menu';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Footer from './components/Footer';
import MenuState from './components/MenuState';
import ProjectSlideshow from './components/ProjectSlideshow';
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
			<Box className="accueil_body" sx={{ marginTop: '178px'}}>
				<Box sx={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
					<Typography 
						variant="h1" 
						sx={{ 
							fontSize: '20px', 
							fontWeight: 'bold',
							whiteSpace: 'pre-line',
							paddingTop: '20px',
							justifyContent: 'center',
							display: 'flex',
						}}
						bgcolor="#add0d0"
					>
						Qui suis-je?
						{'\n\n'}

					</Typography>
					<Typography 
						bgcolor="#add0fa"
						sx={{ whiteSpace: 'pre-line' }}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sodales ligula ac ipsum dictum pellentesque. Aliquam a mi nec sapien sagittis luctus. Donec in arcu sed mauris ornare commodo. Nullam eleifend finibus magna non tempus. In condimentum diam et elit commodo dapibus. Ut placerat sapien sit amet dolor tristique, nec malesuada augue iaculis. Suspendisse potenti. Nam molestie porttitor consectetur. Sed at convallis tortor. Nunc tempor ligula nec congue rhoncus. Nullam dapibus pellentesque viverra. Donec vitae pulvinar nibh, in mattis ex. Duis et dolor mauris. Aenean dictum tincidunt fringilla. Maecenas consequat, lectus at rutrum dignissim, metus tortor sollicitudin urna, id varius libero nunc lobortis odio.
						{'\n\n'}
						Integer pellentesque, sem sit amet convallis cursus, odio risus efficitur turpis, sit amet vestibulum quam ipsum ac orci. Donec quis erat nunc. Ut fermentum turpis sit amet sem sodales porta. Ut ligula massa, auctor eu consectetur ut, iaculis eget tellus. Mauris at eleifend ipsum, nec pharetra nibh. Donec eu elit in turpis aliquet bibendum. Pellentesque ac ullamcorper erat, ut condimentum risus. Aliquam pretium nulla non diam venenatis pulvinar. Cras tristique magna volutpat libero ornare, luctus lacinia sapien imperdiet. Nullam sit amet ullamcorper ex, sit amet consectetur mauris. Aenean vel imperdiet arcu. Quisque viverra tellus a nunc pharetra, non vulputate arcu accumsan. Vivamus iaculis pellentesque accumsan. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;
						{'\n\n'}
						Sed id nisl tempus, aliquam diam ac, condimentum ante. Nunc quis enim vitae turpis rutrum elementum. Vestibulum mollis mauris eu eros elementum ultrices. Donec porttitor elit at malesuada tempor. Etiam eu auctor lorem. Curabitur metus neque, tempor vel blandit ut, pulvinar at ipsum. Ut felis nunc, vestibulum nec lacinia vestibulum, pellentesque id orci. Sed ut posuere ante. Vivamus sodales dapibus eros. Donec eu mauris at dui egestas dictum. Aliquam quis nunc felis. Nunc egestas sit amet leo vel sodales.
						{'\n\n'}
					</Typography>
				</Box>
			</Box>
			
			{/* Slideshow aléatoire des projets */}
			<Box className="accueil_body" sx={{ 
				background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)',
				padding: '3rem 0'
			}}>
				<ProjectSlideshow />
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
