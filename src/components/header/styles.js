import styled from 'styled-components';
import { COLORS } from '../../constants/colors';

const StyledHeader = styled.header`
	position: relative;
	padding: 1rem 1.5rem;
	border-bottom: 1px solid ${COLORS.gray};
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media screen and (min-width: 768px) and (max-width: 1439.99px) {
		padding: 2rem 3.125rem 0 3.125rem;
		flex-direction: column;
		justify-content: center;
	}

	@media screen and (min-width: 1440px) {
		padding: 0 2.5rem 0 2rem;
	}
`;

const StyledLogo = styled.p`
	flex-shrink: 0;
	margin: 0;
	font-family: 'Antonio', sans-serif;
	font-size: 1.75rem;
	letter-spacing: -1.05px;
	text-transform: uppercase;

	@media screen and (min-width: 768px) and (max-width: 1439.99px) {
		margin: 0 0 1rem;
	}
`;

export { StyledHeader, StyledLogo };
