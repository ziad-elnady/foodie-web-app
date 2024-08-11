import FormInput from '@/components/input';
import { Button, Container, Link, Stack, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import NextLink from 'next/link';
import { Dispatch, SetStateAction } from 'react';

type Props = {
	setIsRegistering: Dispatch<SetStateAction<boolean>>;
};

const RegisterTab = ({ setIsRegistering }: Props) => {
	return (
		<Container sx={{ maxWidth: 0.75 }}>
			<Stack border={1} borderColor={'divider'} borderRadius={2} py={5} px={5} my={5}>
				<Stack spacing={2} useFlexGap>
					<Typography variant="h4">Signup</Typography>
					<Stack direction={'row'} spacing={1}>
						<Typography variant="body2" color={'text.secondary'}>
							Already Have An Account,
						</Typography>
						<Link onClick={() => setIsRegistering((prev) => !prev)} sx={{ cursor: 'pointer' }}>
							<Typography variant="body2" fontWeight={'light'} color={'inherit'}>
								login.
							</Typography>
						</Link>
					</Stack>
				</Stack>
				<Stack mt={5} direction={'row'} spacing={4} useFlexGap>
					<FormInput name="name" placeholder="michael joe" label="Full Name" rounded />
					<FormInput name="email" placeholder="michael.joe@xmail.com" label="Enter Your Email or Phone" rounded />
				</Stack>
				<Stack mt={4} direction={'row'} spacing={4} useFlexGap>
					<FormInput name="password" secure placeholder="********" label="Password" rounded />
					<FormInput name="confirm-password" secure placeholder="********" label="Confirm Password" rounded />
				</Stack>
				<FormControlLabel
					required
					control={<Checkbox />}
					label="I have read and agreed to the Terms of Service and Privacy Policy"
					sx={{ '.MuiFormControlLabel-label': { fontSize: 14 }, my: 2 }}
				/>
				<Button sx={{ py: 2, borderRadius: 999 }}>Create Account</Button>
				<Typography href={'#'} component={NextLink} variant="body2" fontWeight={'light'} color={'inherit'} textAlign={'center'} mt={2}>
					Forgot Your Password.
				</Typography>
			</Stack>
		</Container>
	);
};

export default RegisterTab;
