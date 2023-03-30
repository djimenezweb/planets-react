import { StyledButton } from './styles';

const ToggleButton = ({ menuOpen, setMenuOpen }) => {
	return (
		<StyledButton onClick={() => setMenuOpen(!menuOpen)}>
			<img
				src={
					menuOpen
						? '/assets/images/icon-hamburger-closed.svg'
						: '/assets/images/icon-hamburger-open.svg'
				}
				alt='Menu'
			/>
		</StyledButton>
	);
};

export default ToggleButton;
