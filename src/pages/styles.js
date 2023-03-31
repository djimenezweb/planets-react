import styled from 'styled-components';
import { COLORS } from '../constants/colors';

const StyledTabContainer = styled.ul`
	padding: 0 1.5rem;
	display: flex;
	justify-content: center;
	gap: 2.75rem;
	border-bottom: 1px solid ${COLORS.gray};
`;

const StyledTab = styled.li`
	padding: 0;
`;

const StyledButton = styled.button`
	opacity: ${props => (props.active ? 1 : 0.5)};
	padding: 1.25rem 0;
	background-color: transparent;
	text-transform: uppercase;
	color: white;
	border: 0;
	font-size: 10px;
	font-weight: 700;
	letter-spacing: 1.93px;
	position: relative;
	cursor: pointer;

	&::after {
		content: '';
		position: absolute;
		height: 4px;
		inset: auto 0 0 0;
		background-color: ${props => (props.active ? props.color : 'transparent')};
	}
`;

const StyledTitle = styled.h1`
	margin: 0;
	text-align: center;
	font-family: 'Antonio', sans-serif;
	font-weight: 500;
	text-transform: uppercase;
	font-size: 2.5rem;
	line-height: auto;

	@media screen and (min-width: 768px) {
		font-size: 3rem;
	}

	@media screen and (min-width: 1440px) {
		font-size: 5rem;
		line-height: 1.2875;
	}
`;

const StyledText = styled.p`
	margin: 0;
	text-align: center;
	font-size: 11px;
	line-height: 2;

	@media screen and (min-width: 1440px) {
		font-size: 14px;
		line-height: 1.78;
	}
`;

const StyledSource = styled.p`
	margin: 0;
	text-align: center;
	font-size: 12px;
	line-height: 2;
	color: rgba(255 255 255 / 0.5);
	opacity: 1;

	& a {
		font-weight: 700;
		text-decoration: underline;
	}

	&::after {
		content: url('/assets/images/icon-source.svg');
		position: relative;
	}
`;

export {
	StyledTabContainer,
	StyledTab,
	StyledButton,
	StyledTitle,
	StyledText,
	StyledSource
};
