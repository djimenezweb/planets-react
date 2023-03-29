import styled from 'styled-components';

const StyledHeader = styled.header`
	position: relative;
	padding: 1rem 1.5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const StyledLogo = styled.p`
	margin: 0;
	font-family: 'Antonio', sans-serif;
	font-size: 1.75rem;
	letter-spacing: -1.05px;
	text-transform: uppercase;
`;

export { StyledHeader, StyledLogo };
