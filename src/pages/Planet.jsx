import { useState } from 'react';
import { v4 } from 'uuid';
import { COLORS } from '../constants/colors';
import { INFO } from '../constants/info';
import {
	StyledButton,
	StyledSource,
	StyledTab,
	StyledTabContainer,
	StyledText,
	StyledTitle
} from './styles';

const Planet = ({ planetName }) => {
	const [activeTab, setActiveTab] = useState(0);
	return (
		<>
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
			<div>
				<img src={INFO[planetName].data[activeTab].image} alt='' />
			</div>
			<StyledTitle>{INFO[planetName].name}</StyledTitle>
			<StyledText>{INFO[planetName].data[activeTab].content}</StyledText>
			<StyledSource>
				Source: <a href={INFO[planetName].data[activeTab].source}>Wikipedia</a>
			</StyledSource>
			<ul>
				<li>
					<p>Rotation Time</p>
					<p>{INFO[planetName].rotation}</p>
				</li>
				<li>
					<p>Revolution Time</p>
					<p>{INFO[planetName].revolution}</p>
				</li>
				<li>
					<p>Radius</p>
					<p>{INFO[planetName].radius}</p>
				</li>
				<li>
					<p>Average Temp.</p>
					<p>{INFO[planetName].temperature}</p>
				</li>
			</ul>
		</>
	);
};

export default Planet;
