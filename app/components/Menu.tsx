"use client";

interface MenuProps
{
	toggleMenu: () => void;
	showMenu: string;
}

const Menu = ({ toggleMenu, showMenu }: MenuProps) =>
{
	return (
		<div className={`menu-container ${showMenu}`}>
			<div className="overlay" onClick={toggleMenu}></div>
			<div className="menu-items">
				<ul>
					<li>
						<a href="#welcome-section" onClick={toggleMenu}>
							Accueil
						</a>
					</li>
					<li>
						<a href="#about" onClick={toggleMenu}>
							À propos
						</a>
					</li>
					<li>
						<a href="#projects" onClick={toggleMenu}>
							Projets
						</a>
					</li>
					<li>
						<a href="#contact" onClick={toggleMenu}>
							Contact
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Menu;
