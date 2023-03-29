import { useState } from 'react';
import Menu from '../menu/Menu';
import ToggleButton from '../toggle-button/ToggleButton';
import { StyledHeader, StyledLogo } from './styles';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<StyledHeader>
			<StyledLogo>The Planets</StyledLogo>
			<Menu show={menuOpen} />
			<ToggleButton
				onClick={() => toggleMenu(menuOpen, setMenuOpen)}
				isOpen={menuOpen}
			></ToggleButton>
		</StyledHeader>
	);
};

const toggleMenu = (menuOpen, setMenuOpen) => {
	setMenuOpen(!menuOpen);
};

export default Header;
