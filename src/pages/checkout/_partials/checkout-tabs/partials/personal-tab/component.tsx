import FormInput from '@/components/input';
import { Box, Button, Stack, Typography } from '@mui/material';
import { Dispatch, FormEvent, SetStateAction } from 'react';

type Props = {
	setTab: Dispatch<SetStateAction<number>>;
	setFormData: Dispatch<SetStateAction<CheckoutFormData>>;
};

const PersonalTab = ({ setTab, setFormData }: Props) => {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.target as HTMLFormElement);
		setFormData((prev) => {
			return {
				...prev,
				personalInfo: {
					...prev.personalInfo,
					firstName: formData.get('firstName') || '',
					lastName: formData.get('lastName') || '',
					email: formData.get('email') || '',
					phoneNumber: formData.get('phoneNumber') || '',
					address: {
						...prev.personalInfo.address,
						city: formData.get('city') || '',
						street: formData.get('street') || '',
						country: formData.get('country') || '',
						postalCode: formData.get('postalCode') || ''
					}
				}
			};
		});

		setTab(1);
	};

	return (
		<Box component="form" onSubmit={handleSubmit}>
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
				<Button type="submit" sx={{ py: 1.65, px: 3, borderRadius: 999, width: 'fit-content' }}>
					<Typography variant="button" fontWeight={'bold'}>
						Proceed to Next Step
					</Typography>
				</Button>
			</Stack>
		</Box>
	);
};

export default PersonalTab;
