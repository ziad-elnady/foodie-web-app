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
					<FormInput name="firstName" placeholder="First Name*" />
					<FormInput name="lastName" placeholder="Last Name*" />
				</Stack>
				<Stack direction={'row'} justifyContent={'space-between'} spacing={2} useFlexGap>
					<FormInput name="email" placeholder="Email Address*" />
					<FormInput name="phoneNumber" placeholder="Phone Number*" />
				</Stack>
				<FormInput name="street" placeholder="Street Address*" />
				<FormInput name="city" placeholder="Town / City*" />
				<FormInput name="country" placeholder="Country*" />
				<FormInput name="postalCode" placeholder="Postcode / Zip*" />
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
