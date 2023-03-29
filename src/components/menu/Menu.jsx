import { PLANETS } from '../../constants/planets';
import { StyledLi, StyledNav, StyledUl } from './styles';

const Menu = () => {
	return (
		<StyledNav>
			<StyledUl>
				{PLANETS.map(planet => {
					return <StyledLi key={planet.id}>{planet.planet}</StyledLi>;
				})}
			</StyledUl>
		</StyledNav>
	);
};

export default Menu;
