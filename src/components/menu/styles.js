import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledNav = styled.nav`
	transform: ${({ show }) => (show ? 'translateX(0%)' : 'translateX(100%)')};
	background-color: ${COLORS.almostBlack};
	position: absolute;
	z-index: 100;
	width: 100%;
	height: 100vh;
	top: 4.5rem;
	left: 0;
	transition: transform 300ms ease-out;

	@media screen and (min-width: 768px) {
		transform: translateX(0);
		position: static;
		height: auto;
	}
`;

const StyledUl = styled.ul`
	padding: 1.5rem;
	margin: 0;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	list-style: none;

	@media screen and (min-width: 768px) {
		padding: 0;
		flex-direction: row;
		gap: 2rem;
	}

	@media screen and (min-width: 1440px) {
		justify-content: end;
		padding: 0;
	}
`;

const StyledLi = styled.li`
	&:not(:last-child) {
		border-bottom: 1px solid ${COLORS.gray};

		@media screen and (min-width: 768px) {
			border: none;
		}
	}
`;

const StyledIcon = styled.div`
	margin: 0 25px 0 0;
	width: 20px;
	height: 20px;
	border-radius: 50%;
	background-color: ${COLORS.gray};

	@media screen and (min-width: 768px) and (max-width: 1439.99px) {
		display: none;
	}

	@media screen and (min-width: 1440px) {
		background-color: transparent;
		margin: 0;
		width: 100%;
		height: 4px;
		top: 0;
		left: 0;
		border-radius: 0;
		position: absolute;
	}
`;

const StyledNavLink = styled(NavLink)`
	position: relative;
	margin: 0;
	padding: 1.25rem 0.5rem 1.25rem 0;
	color: ${COLORS.gray};
	text-transform: uppercase;
	font-size: 15px;
	font-weight: bold;
	line-height: 1.6;
	letter-spacing: 1.36px;
	display: flex;
	align-items: center;

	&.active {
		color: ${COLORS.white};
	}

	@media screen and (min-width: 768px) {
		color: ${COLORS.white};
		opacity: 0.75;
		font-size: 11px;
		line-height: 1;
		letter-spacing: 1px;
		padding: 1.25rem 0;
	}

	@media screen and (min-width: 1440px) {
		padding: 2rem 0;

		&.active {
			color: ${COLORS.white};
			opacity: 1;
		}
	}

	& img {
		margin-left: auto;

		@media screen and (min-width: 768px) {
			display: none;
		}
	}

	&.active ${StyledIcon} {
		background-color: ${({ color }) => color};
	}
`;

export { StyledNav, StyledUl, StyledLi, StyledIcon, StyledNavLink };
