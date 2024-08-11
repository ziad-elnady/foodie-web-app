import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { IconButton, InputAdornment } from '@mui/material';

type Props = {
	isVisible: boolean;
	onClick: () => void;
};

const PasswordToggleButton = ({ isVisible, onClick }: Props) => {
	return (
		<InputAdornment position="end">
			<IconButton aria-label="toggle password visibility" onClick={onClick} edge="end">
				{isVisible ? <VisibilityOffRoundedIcon /> : <VisibilityRoundedIcon />}
			</IconButton>
		</InputAdornment>
	);
};

export default PasswordToggleButton;
