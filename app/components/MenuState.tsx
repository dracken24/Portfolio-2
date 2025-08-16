"use client";

import { useState } from 'react';

interface MenuStateProps
{
	children: (menuState: string, toggleMenu: () => void) => React.ReactNode;
}

const MenuState = ({ children }: MenuStateProps) =>
{
	const [menuState, setMenuState] = useState<string>('');

	const toggleMenu = () =>
	{
		setMenuState(prevState =>
		{
			if (!prevState || prevState === 'deactive')
			{
				return 'active';
			}
			return 'deactive';
		});
	};

	return <>{children(menuState, toggleMenu)}</>;
};

export default MenuState;
