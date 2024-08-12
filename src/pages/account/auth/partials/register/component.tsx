import FormInput from '@/components/input';
import { getInputErrors } from '@/library/errors';
import { useRegister } from '@/services/auth/register';
import { Box, Button, ButtonOwnProps, Container, Link, Stack, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import NextLink from 'next/link';
import { Dispatch, SetStateAction } from 'react';

type Props = {
	setIsRegistering: Dispatch<SetStateAction<boolean>>;
};

const RegisterTab = ({ setIsRegistering }: Props) => {
	const { form, mutation, handleSubmit } = useRegister();

	const isPending = mutation.isPending;
	const isSuccess = mutation.isSuccess;
	const isError = mutation.isError;

	const getButtonState = () => {
		if (isPending) return { color: 'primary', label: 'Loading...', disabled: true };
		if (isSuccess) return { color: 'success', label: mutation.data.message, disabled: false };
		if (isError) return { color: 'error', label: form.formState.errors.root?.message, disabled: false };
		return { color: 'primary', label: 'Create Account', disabled: false };
	};

	return (
		<Container maxWidth="sm">
			<Stack border={1} borderColor={'divider'} borderRadius={2} p={4} my={5} spacing={4} useFlexGap>
				<Stack spacing={2} useFlexGap>
					<Typography variant="h4">Sign up</Typography>
					<Typography variant="body2" color={'text.secondary'}>
						Already Have An Account,&nbsp;
						<Link onClick={() => setIsRegistering((prev) => !prev)} sx={{ cursor: 'pointer' }}>
							login.
						</Link>
					</Typography>
				</Stack>

				<Box component={'form'} onSubmit={handleSubmit}>
					<Stack spacing={2} useFlexGap>
						<FormInput register={form.register('name')} placeholder="michael joe" label="Full Name" error={getInputErrors(form, 'name')} />
						<FormInput register={form.register('username')} placeholder="michael_joe" label="Enter Your Username" error={getInputErrors(form, 'username')} />
						<FormInput register={form.register('password')} secure placeholder="*********" label="Enter Your Password" error={getInputErrors(form, 'password')} />
						<FormControlLabel
							required
							control={<Checkbox />}
							label="I have read and agreed to the Terms of Service and Privacy Policy"
							sx={{ '.MuiFormControlLabel-label': { fontSize: 14 } }}
						/>
						<Button type="submit" color={getButtonState().color as ButtonOwnProps['color']} disabled={getButtonState().disabled} sx={{ mt: 2 }}>
							{getButtonState().label}
						</Button>
					</Stack>
				</Box>

				<Link href={'#'} component={NextLink} variant="body2" fontWeight={'light'} color={'inherit'} textAlign={'center'}>
					Forgot Your Password
				</Link>
			</Stack>
		</Container>
	);
};

export default RegisterTab;
