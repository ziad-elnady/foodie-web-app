import FormInput from '@/components/input';
import { Box, Button, Stack, Typography } from '@mui/material';
import { Dispatch, FormEvent, SetStateAction } from 'react';

type Props = {
	setTab: Dispatch<SetStateAction<number>>;
	setFormData: Dispatch<SetStateAction<CheckoutFormData>>;
};

const BillingTab = ({ setTab, setFormData }: Props) => {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.target as HTMLFormElement);
		setFormData((prev) => {
			return {
				...prev,
				billingInfo: {
					...prev.billingInfo,
					cardName: formData.get('name') || '',
					cardNumber: formData.get('number') || '',
					expiry: formData.get('expiryDate') || '',
					cvv: formData.get('cvv') || ''
				}
			};
		});
	};

	return (
		<Box component="form" onSubmit={handleSubmit}>
			<Stack spacing={3} useFlexGap p={4}>
				<FormInput name="name" placeholder="Name on Card*" />
				<FormInput name="number" placeholder="Card Number*" />
				<Stack direction={'row'} justifyContent={'space-between'} spacing={2} useFlexGap>
					<FormInput name="expiryDate" placeholder="Valid Through*" />
					<FormInput name="cvv" placeholder="CVV*" />
				</Stack>
				<Button type="submit" sx={{ py: 1.65, px: 3, borderRadius: 999, width: 'fit-content' }}>
					<Typography variant="button" fontWeight={'bold'}>
						Proceed to Next Step
					</Typography>
				</Button>
			</Stack>
		</Box>
	);
};

export default BillingTab;
