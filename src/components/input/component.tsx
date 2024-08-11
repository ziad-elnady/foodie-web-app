import { OutlinedInput, Stack, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

type Props = {
	register?: UseFormRegisterReturn<string>;
	secure?: boolean;
	label?: string;
	placeholder?: string;
	required?: boolean;
	rounded?: boolean;
	error?: string;
};

const PasswordToggleButton = dynamic(() => import('./partials/password-toggle-button'));

const FormInput = ({ register, secure = false, label = undefined, placeholder = undefined, required = true, rounded = false, error }: Props) => {
	const [showPassword, setShowPassword] = useState(true);

	return (
		<Stack width={1} spacing={1} useFlexGap>
			<Typography variant="body2" color={!!error ? 'error.main' : '#3D3D3D'}>
				{label}
			</Typography>
			<OutlinedInput
				{...register}
				type={!(showPassword && secure) ? 'text' : 'password'}
				placeholder={placeholder}
				error={!!error}
				fullWidth
				sx={{ borderRadius: rounded ? 999 : '10px', height: 43, '.MuiOutlinedInput-input': { height: '43px', py: 0 } }}
				endAdornment={secure && <PasswordToggleButton isVisible={showPassword} onClick={() => setShowPassword((prev) => !prev)} />}
			/>
			{error && (
				<Typography variant="caption" color={'error.main'}>
					{error}
				</Typography>
			)}
		</Stack>
	);
};

export default FormInput;
