import FormInput from '@/components/input';
import { Button, Container, Link, Stack, Typography } from '@mui/material';
import NextLink from 'next/link';
import { Dispatch, SetStateAction } from 'react';

type Props = {
	setIsRegistering: Dispatch<SetStateAction<boolean>>;
};

const LoginTab = ({ setIsRegistering }: Props) => {
	return (
		<Container sx={{ maxWidth: 0.65 }}>
			<Stack border={1} borderColor={'divider'} borderRadius={2} py={5} px={5} my={5}>
				<Stack spacing={2} useFlexGap>
					<Typography variant="h4">Login</Typography>
					<Stack direction={'row'} spacing={1}>
						<Typography variant="body2" color={'text.secondary'}>
							Do not have an account,
						</Typography>
						<Link onClick={() => setIsRegistering((prev) => !prev)} sx={{ cursor: 'pointer' }}>
							<Typography variant="body2" fontWeight={'light'} color={'inherit'}>
								create a new one.
							</Typography>
						</Link>
					</Stack>
				</Stack>
				<Stack mt={5} spacing={2} useFlexGap>
					<FormInput name="email" placeholder="michael.joe@xmail.com" label="Enter Your Email or Phone" rounded />
					<FormInput name="password" secure placeholder="*********" label="Enter Your Password" rounded />
				</Stack>
				<Button sx={{ py: 2, borderRadius: 999, mt: 3 }}>Login</Button>
				<Typography href={'#'} component={NextLink} variant="body2" fontWeight={'light'} color={'inherit'} textAlign={'center'} mt={2}>
					Forgot Your Password.
				</Typography>
			</Stack>
		</Container>
	);
};

export default LoginTab;
