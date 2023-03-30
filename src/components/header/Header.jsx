import { useState } from 'react';
import Menu from '../menu/Menu';
import ToggleButton from '../toggle-button/ToggleButton';
import { StyledHeader, StyledLogo } from './styles';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<StyledHeader>
			<StyledLogo>The Planets</StyledLogo>
			<Menu show={menuOpen} setMenuOpen={setMenuOpen} />
			<ToggleButton
				setMenuOpen={setMenuOpen}
				menuOpen={menuOpen}
			></ToggleButton>
		</StyledHeader>
	);
};

export default Header;
