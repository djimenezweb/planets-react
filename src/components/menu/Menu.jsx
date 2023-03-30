import { MENU } from '../../constants/menu';
import {
	StyledIcon,
	StyledLi,
	StyledNav,
	StyledNavLink,
	StyledUl
} from './styles';

const Menu = ({ show, setMenuOpen }) => {
	return (
		<StyledNav show={show}>
			<StyledUl>
				{MENU.map(planet => {
					return (
						<StyledLi key={planet.id}>
							<StyledNavLink
								to={planet.route}
								onClick={() => setMenuOpen(!show)}
								color={planet.color}
							>
								<StyledIcon />
								{planet.planet}
								<img src='/assets/images/icon-chevron.svg' alt='' />
							</StyledNavLink>
						</StyledLi>
					);
				})}
			</StyledUl>
		</StyledNav>
	);
};

export default Menu;
