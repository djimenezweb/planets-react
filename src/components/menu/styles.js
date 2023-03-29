import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledNav = styled.nav`
	position: absolute;
	inset: 0;
	padding-top: 5rem;
`;

const StyledUl = styled.ul`
	padding: 1.5rem;
	margin: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	list-style: none;
`;

const StyledLi = styled.li`
	margin: 0;
	padding: 1.25rem 0;
	text-transform: uppercase;
	font-size: 15px;
	font-weight: bold;
	line-height: 1.6;
	letter-spacing: 1.36px;

	& + & {
		border-top: 1px solid ${COLORS.gray};
	}
`;

export { StyledNav, StyledUl, StyledLi };
