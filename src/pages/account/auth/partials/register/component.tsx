import FormInput from '@/components/input';
import { Box, Button, Container, Link, Stack, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import NextLink from 'next/link';
import { Dispatch, SetStateAction } from 'react';

type Props = {
	setIsRegistering: Dispatch<SetStateAction<boolean>>;
};

const RegisterTab = ({ setIsRegistering }: Props) => {
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

				<Box component={'form'}>
					<Stack spacing={2} useFlexGap>
						<FormInput placeholder="michael joe" label="Full Name" />
						<FormInput placeholder="michael_joe" label="Enter Your Username" />
						<FormInput secure placeholder="********" label="Password" />
						<FormControlLabel
							required
							control={<Checkbox />}
							label="I have read and agreed to the Terms of Service and Privacy Policy"
							sx={{ '.MuiFormControlLabel-label': { fontSize: 14 } }}
						/>
						<Button type="submit" sx={{ mt: 2 }}>
							Create Account
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
