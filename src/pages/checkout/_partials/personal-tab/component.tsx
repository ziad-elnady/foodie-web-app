import FormInput from '@/components/input';
import { Button, Stack, Typography } from '@mui/material';

type Props = {};

const PersonalTab = (props: Props) => {
	const tabs = ['Personal', 'Billing', 'Confirmation'];

	return (
		<Stack sx={{ borderRadius: 2, border: '1px solid', borderColor: 'divider', overflow: 'hidden', flex: 1 }}>
			<Stack direction={'row'} bgcolor={'secondary.light'} justifyContent={'space-around'} py={3} px={5}>
				{tabs.map((name, index) => (
					<Typography key={index} color={'common.white'}>
						{name}
					</Typography>
				))}
			</Stack>
			<Stack spacing={3} useFlexGap p={4}>
				<Stack direction={'row'} justifyContent={'space-between'} spacing={2} useFlexGap>
					<FormInput placeholder="First Name*" />
					<FormInput placeholder="Last Name*" />
				</Stack>
				<Stack direction={'row'} justifyContent={'space-between'} spacing={2} useFlexGap>
					<FormInput placeholder="Email Address*" />
					<FormInput placeholder="Phone Number*" />
				</Stack>
				<FormInput placeholder="Street Address*" />
				<FormInput placeholder="Town / City*" />
				<FormInput placeholder="Country*" />
				<FormInput placeholder="Postcode / Zip*" />
				<Button sx={{ py: 1.65, px: 3, borderRadius: 999, width: 'fit-content' }}>
					<Typography variant="button" fontWeight={'bold'}>
						Proceed to Next Step
					</Typography>
				</Button>
			</Stack>
		</Stack>
	);
};

export default PersonalTab;
