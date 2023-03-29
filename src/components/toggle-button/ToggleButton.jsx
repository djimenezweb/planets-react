import { StyledButton } from './styles';

const ToggleButton = ({ isOpen }) => {
	return (
		<StyledButton>
			<img src='/assets/images/icon-hamburger.svg' alt='Menu' />
		</StyledButton>
	);
};

export default ToggleButton;
