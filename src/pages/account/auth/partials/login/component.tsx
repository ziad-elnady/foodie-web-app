import FormInput from '@/components/input';
import { getInputErrors } from '@/library/errors';
import { useLogin } from '@/services/auth/login';
import { Box, Button, Container, Link, Stack, Typography } from '@mui/material';
import NextLink from 'next/link';
import { Dispatch, SetStateAction, useEffect } from 'react';

type Props = {
	setIsRegistering: Dispatch<SetStateAction<boolean>>;
};

const LoginTab = ({ setIsRegistering }: Props) => {
	const { form, mutation, handleSubmit } = useLogin();

	const isPending = mutation.isPending;
	const isSuccess = mutation.isSuccess;
	const data = mutation.data;

	useEffect(() => {
		if (isSuccess) {
			alert('access_token is now set in local storage');
		}
	}, [isSuccess]);

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
						<Button type="submit" color={isSuccess ? 'success' : 'primary'} disabled={isPending} sx={{ mt: 2 }}>
							{isPending ? 'Loading...' : isSuccess && data ? data.message : 'Login'}
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
