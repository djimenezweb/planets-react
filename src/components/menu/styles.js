import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledNav = styled.nav`
	display: none;
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
	color: ${COLORS.gray};
	text-transform: uppercase;
	font-size: 15px;
	font-weight: bold;
	line-height: 1.6;
	letter-spacing: 1.36px;
	display: flex;
	align-items: center;

	& + & {
		border-top: 1px solid ${COLORS.gray};
	}

	& img {
		margin-left: auto;
	}
`;

const StyledIcon = styled.div`
	margin: 0 25px 0 0;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${COLORS.gray};
`;

export { StyledNav, StyledUl, StyledLi, StyledIcon };
