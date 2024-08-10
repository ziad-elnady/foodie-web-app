import { Container, Stack } from '@mui/material';
import CheckoutTabs from './_partials/checkout-tabs';
import PricingDetailsCard from './_partials/pricing-details/component';

type Props = {};

const CheckoutPage = (props: Props) => {
	return (
		<Container sx={{ my: 6, width: 1 }}>
			<Stack direction={'row'} spacing={4} width={1}>
				<CheckoutTabs />
				<PricingDetailsCard />
			</Stack>
		</Container>
	);
};

export default CheckoutPage;
