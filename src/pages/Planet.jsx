import { useState } from 'react';
import { v4 } from 'uuid';
import { COLORS } from '../constants/colors';
import { INFO } from '../constants/info';
import {
	StyledButton,
	StyledFactsContainer,
	StyledFactsInfo,
	StyledFactsLi,
	StyledFactsTitle,
	StyledGeologyPicture,
	StyledGrid,
	StyledInfo,
	StyledPictureContainer,
	StyledSource,
	StyledTab,
	StyledTabContainer,
	StyledText,
	StyledTitle
} from './styles';

const Planet = ({ planetName }) => {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<StyledGrid>
			<StyledTabContainer>
				{INFO[planetName].data.map((object, index) => (
					<StyledTab key={v4()}>
						<StyledButton
							onClick={() => setActiveTab(index)}
							active={index === activeTab}
							color={COLORS[planetName]}
						>
							{object.title}
						</StyledButton>
					</StyledTab>
				))}
			</StyledTabContainer>
			<StyledPictureContainer>
				<img src={INFO[planetName].data[activeTab].image} alt='' />
				<StyledGeologyPicture active={activeTab}>
					<img src={INFO[planetName].images.geology} alt='' />
				</StyledGeologyPicture>
			</StyledPictureContainer>
			<StyledInfo>
				<StyledTitle>{INFO[planetName].name}</StyledTitle>
				<StyledText>{INFO[planetName].data[activeTab].content}</StyledText>
				<StyledSource>
					Source:{' '}
					<a href={INFO[planetName].data[activeTab].source}>Wikipedia</a>
				</StyledSource>
			</StyledInfo>
			<StyledFactsContainer>
				<StyledFactsLi>
					<StyledFactsTitle>Rotation Time</StyledFactsTitle>
					<StyledFactsInfo>{INFO[planetName].rotation}</StyledFactsInfo>
				</StyledFactsLi>
				<StyledFactsLi>
					<StyledFactsTitle>Revolution Time</StyledFactsTitle>
					<StyledFactsInfo>{INFO[planetName].revolution}</StyledFactsInfo>
				</StyledFactsLi>
				<StyledFactsLi>
					<StyledFactsTitle>Radius</StyledFactsTitle>
					<StyledFactsInfo>{INFO[planetName].radius}</StyledFactsInfo>
				</StyledFactsLi>
				<StyledFactsLi>
					<StyledFactsTitle>Average Temp.</StyledFactsTitle>
					<StyledFactsInfo>{INFO[planetName].temperature}</StyledFactsInfo>
				</StyledFactsLi>
			</StyledFactsContainer>
		</StyledGrid>
	);
};

export default Planet;
