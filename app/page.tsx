"use client";

import AppBarComponent from './components/appBar';
import Header from './components/Header';
import Menu from './components/Menu';
import MenuState from './components/MenuState';
// import Navigation from './components/Navigation';

export default function Home()
{
	return (
		<>
			{/* AppBar Material-UI existant */}
			<AppBarComponent />
			
			{/* Composants adaptés du code importé */}
			<MenuState>
				{(menuState, toggleMenu) => (
					<>
						<Menu toggleMenu={toggleMenu} showMenu={menuState} />
						{/* <Navigation toggleMenu={toggleMenu} showMenu={menuState} /> */}
						<Header />
					</>
				)}
			</MenuState>
		</>
	);
}
