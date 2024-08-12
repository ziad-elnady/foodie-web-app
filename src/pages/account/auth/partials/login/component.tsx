import FormInput from '@/components/input';
import { getInputErrors } from '@/library/errors';
import { useLogin } from '@/services/auth/login';
import { Box, Button, ButtonOwnProps, Container, Link, Stack, Typography } from '@mui/material';
import NextLink from 'next/link';
import { Dispatch, SetStateAction } from 'react';

type Props = {
	setIsRegistering: Dispatch<SetStateAction<boolean>>;
};

const LoginTab = ({ setIsRegistering }: Props) => {
	const { form, mutation, handleSubmit } = useLogin();

	const isPending = mutation.isPending;
	const isSuccess = mutation.isSuccess;
	const isError = mutation.isError;

	const getButtonState = () => {
		if (isPending) return { color: 'primary', label: 'Loading...', disabled: true };
		if (isSuccess) return { color: 'success', label: mutation.data.message, disabled: false };
		if (isError) return { color: 'error', label: form.formState.errors.root?.message, disabled: false };
		return { color: 'primary', label: 'Login', disabled: false };
	};

	return (
		<Container maxWidth="sm">
			<Stack border={1} borderColor={'divider'} borderRadius={2} p={4} my={5} spacing={4} useFlexGap>
				<Stack spacing={2} useFlexGap>
					<Typography variant="h4">Login</Typography>
					<Typography variant="body2" color={'text.secondary'}>
						Do not have an account,&nbsp;
						<Link component={'span'} onClick={() => setIsRegistering((prev) => !prev)} sx={{ cursor: 'pointer' }}>
							create a new one
						</Link>
					</Typography>
				</Stack>

				<Box component={'form'} onSubmit={handleSubmit}>
					<Stack spacing={2} useFlexGap>
						<FormInput register={form.register('username')} placeholder="michael_joe" label="Enter Your Username" error={getInputErrors(form, 'username')} />
						<FormInput register={form.register('password')} secure placeholder="*********" label="Enter Your Password" error={getInputErrors(form, 'password')} />
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

export default LoginTab;
