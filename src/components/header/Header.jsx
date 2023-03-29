import Menu from '../menu/Menu';
import ToggleButton from '../toggle-button/ToggleButton';
import { StyledHeader, StyledLogo } from './styles';

const Header = () => {
	return (
		<StyledHeader>
			<StyledLogo>The Planets</StyledLogo>
			<Menu />
			<ToggleButton></ToggleButton>
		</StyledHeader>
	);
};

export default Header;
