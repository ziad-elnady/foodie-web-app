import { OutlinedInput, Stack, Typography } from '@mui/material';

type Props = {
	placeholder: string;
};

const FormInput = ({ placeholder }: Props) => {
	return (
		<Stack width={1} spacing={1} useFlexGap>
			<Typography variant="body2" color={'#3D3D3D'}>
				{placeholder}
			</Typography>
			<OutlinedInput required fullWidth sx={{ borderRadius: '10px', height: 43 }}></OutlinedInput>
		</Stack>
	);
};

export default FormInput;
