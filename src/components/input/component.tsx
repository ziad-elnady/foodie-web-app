import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import { IconButton, InputAdornment, OutlinedInput, Stack, Typography } from '@mui/material';
import { useState } from 'react';

type Props = {
	name: string;
	secure?: boolean;
	label?: string;
	placeholder?: string;
	required?: boolean;
	rounded?: boolean;
};

const FormInput = ({ name, secure = false, label = undefined, placeholder = undefined, required = true, rounded = false }: Props) => {
	const [showPassword, setShowPassword] = useState(true);

	const handleClickShowPassword = () => setShowPassword((show) => !show);

	const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
	};

	return (
		<Stack width={1} spacing={1} useFlexGap>
			<Typography variant="body2" color={'#3D3D3D'}>
				{label}
			</Typography>
			<OutlinedInput
				name={name}
				type={!(showPassword && secure) ? 'text' : 'password'}
				placeholder={placeholder}
				required={required}
				onChange={() => {}}
				fullWidth
				sx={{ borderRadius: rounded ? 999 : '10px', height: 43, '.MuiOutlinedInput-input': { height: '43px', py: 0 } }}
				endAdornment={
					secure && (
						<InputAdornment position="end">
							<IconButton aria-label="toggle password visibility" onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword} edge="end">
								{showPassword ? <VisibilityOffRoundedIcon /> : <VisibilityRoundedIcon />}
							</IconButton>
						</InputAdornment>
					)
				}
			/>
		</Stack>
	);
};

export default FormInput;
