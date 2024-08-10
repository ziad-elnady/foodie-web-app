import { Container, Stack } from '@mui/material';
import { useState } from 'react';
import PersonalTab from './_partials/personal-tab';
import PricingDetailsCard from './_partials/pricing-details/component';

type Props = {};

const CheckoutPage = (props: Props) => {
	const [tab, setTab] = useState<number>(0);

	return (
		<Container sx={{ my: 6, width: 1 }}>
			<Stack direction={'row'} spacing={4} width={1}>
				<PersonalTab />
				<PricingDetailsCard />
			</Stack>
		</Container>
	);
};

export default CheckoutPage;
