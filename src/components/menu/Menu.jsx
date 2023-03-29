import { PLANETS } from '../../constants/planets';
import { StyledIcon, StyledLi, StyledNav, StyledUl } from './styles';

const Menu = ({ show }) => {
	return (
		<StyledNav>
			<StyledUl>
				{PLANETS.map(planet => {
					return (
						<StyledLi key={planet.id}>
							<StyledIcon />
							{planet.planet}
							<img src='/assets/images/icon-chevron.svg' alt='' />
						</StyledLi>
					);
				})}
			</StyledUl>
		</StyledNav>
	);
};

export default Menu;
