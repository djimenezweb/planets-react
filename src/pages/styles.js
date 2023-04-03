import styled from 'styled-components';
import { COLORS } from '../constants/colors';

const StyledGrid = styled.div`
	padding: 0 0 3rem;

	@media screen and (min-width: 768px) {
		padding: 0 2.5rem 2.5rem;
		display: grid;
		place-items: center;
		grid-template-areas:
			'picture picture'
			'info tabs'
			'facts facts';
		grid-auto-columns: 1fr;
		grid-row-gap: 2rem;
	}

	@media screen and (min-width: 1440px) {
		max-width: 1920px;
		margin: 0 auto;
		padding: 7rem 10rem 3.5rem;
		grid-template-areas:
			'picture picture info'
			'picture picture tabs'
			'facts facts facts';
		grid-row-gap: 2.5rem;
	}
`;

/************/
/*   TABS   */
/************/

const StyledTabContainer = styled.ul`
	counter-reset: button-counter;
	padding: 0 1.5rem;
	display: flex;
	justify-content: space-between;
	border-bottom: 1px solid ${COLORS.gray};

	@media screen and (min-width: 768px) {
		padding: 0;
		width: 280px;
		margin-left: 4rem;
		border: none;
		grid-area: tabs;
		justify-self: end;
		flex-direction: column;
		gap: 1rem;
	}

	@media screen and (min-width: 1440px) {
		margin: 0;
		width: 100%;
	}
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
	font-family: 'Spartan';
	font-size: 9px;
	font-weight: 700;
	line-height: 1;
	letter-spacing: 1.93px;
	position: relative;
	cursor: pointer;

	&::after {
		content: '';
		position: absolute;
		height: 4px;
		inset: auto 0 0 0;
		background-color: ${props => (props.active ? props.color : 'transparent')};

		@media screen and (min-width: 768px) {
			display: none;
		}
	}

	@media screen and (min-width: 768px) {
		width: 100%;
		opacity: 1;
		padding: 14px 2.75rem;
		background-color: ${props => (props.active ? props.color : 'transparent')};
		border: 1px solid
			${props => (props.active ? 'transparent' : 'rgba(255 255 255 / 0.2)')};
		text-align: left;

		&::before {
			counter-increment: button-counter;
			content: counter(button-counter, decimal-leading-zero);
			color: rgba(255 255 255 / 0.5);
			position: relative;
			left: -1.5rem;
		}
	}

	@media screen and (min-width: 1440px) {
		font-size: 12px;
		letter-spacing: 2.57px;

		&:hover {
			background-color: ${props => !props.active && 'rgba(255 255 255 / 0.2)'};
		}
	}
`;

/***********/
/* PICTURE */
/***********/

const StyledPictureContainer = styled.div`
	position: relative;
	grid-area: picture;
	padding: 1rem 1.5rem;
	display: flex;

	& > img {
		margin: auto;
	}

	@media screen and (min-width: 1440px) {
		padding: 3rem 0;
	}
`;

const StyledGeologyPicture = styled.div`
	display: ${props => (props.active === 2 ? 'block' : 'none')};
	position: absolute;
	width: 163px;
	bottom: 0;
	left: calc(50% - 82px);
`;

/**********/
/*  INFO  */
/**********/

const StyledInfo = styled.div`
	min-height: 235px;
	margin: 0 0 1.75rem;
	padding: 0 1.5rem;
	display: flex;
	flex-direction: column;
	gap: 1rem;

	@media screen and (min-width: 768px) {
		min-height: 250px;
		margin: 0;
		padding: 0;
		grid-area: info;
		gap: 1.5rem;
	}

	@media screen and (min-width: 1440px) {
		min-height: 325px;
		gap: 1.5rem;
	}
`;

const StyledTitle = styled.h1`
	margin: 0;
	text-align: center;
	font-family: 'Antonio', sans-serif;
	font-weight: 500;
	text-transform: uppercase;
	font-size: 2.5rem;
	line-height: 1;

	@media screen and (min-width: 768px) {
		text-align: left;
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
	font-size: 12px;
	font-weight: 400;
	line-height: 2;

	@media screen and (min-width: 768px) {
		text-align: left;
	}

	@media screen and (min-width: 1440px) {
		font-size: 14px;
		line-height: 1.78;
	}
`;

const StyledSource = styled.p`
	margin: auto 0 0;
	text-align: center;
	font-size: 12px;
	line-height: 2;
	color: rgba(255 255 255 / 0.5);
	opacity: 1;

	@media screen and (min-width: 768px) {
		text-align: left;
	}

	& a {
		font-weight: 700;
		text-decoration: underline;
	}

	&::after {
		content: url('/assets/images/icon-source.svg');
		position: relative;
		top: 0.2rem;
		left: 0.3rem;
	}
`;

/***********/
/*  FACTS  */
/***********/

const StyledFactsContainer = styled.ul`
	padding: 0 1.5rem;
	display: flex;
	flex-direction: column;
	gap: 8px;
	@media screen and (min-width: 768px) {
		padding: 0;
		width: 100%;
		grid-area: facts;
		display: flex;
		justify-content: space-between;
		flex-direction: row;
		gap: 8px;
	}

	@media screen and (min-width: 1440px) {
		padding: 3rem 0 0;
		gap: 30px;
	}
`;

const StyledFactsLi = styled.li`
	padding: 12px 1.5rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border: 1px solid rgba(216 216 216 / 0.2);

	@media screen and (min-width: 768px) {
		padding: 1rem;
		flex-direction: column;
		flex-basis: 100%;
		align-items: start;
		gap: 12px;
	}

	@media screen and (min-width: 1440px) {
		padding: 1.5rem;
	}
`;

const StyledFactsTitle = styled.h3`
	margin: 0;
	font-size: 9px;
	font-weight: 700;
	line-height: 1;
	letter-spacing: 0.73px;
	text-transform: uppercase;
	color: rgba(255 255 255 / 0.5);

	@media screen and (min-width: 1440px) {
		font-size: 11px;
		letter-spacing: 1px;
	}
`;

const StyledFactsInfo = styled.p`
	margin: 0;
	font-family: 'Antonio', sans-serif;
	font-size: 20px;
	font-weight: 500;
	line-height: 1;
	letter-spacing: -0.75px;
	text-transform: uppercase;
	color: white;
	@media screen and (min-width: 768px) {
		font-size: 24px;
		letter-spacing: -0.99px;
	}

	@media screen and (min-width: 1440px) {
		font-size: 40px;
		letter-spacing: -1.5px;
	}
`;

/*************/
/*   EXPORT  */
/*************/

export {
	StyledGrid,
	StyledTabContainer,
	StyledTab,
	StyledButton,
	StyledPictureContainer,
	StyledGeologyPicture,
	StyledInfo,
	StyledTitle,
	StyledText,
	StyledSource,
	StyledFactsContainer,
	StyledFactsLi,
	StyledFactsTitle,
	StyledFactsInfo
};
