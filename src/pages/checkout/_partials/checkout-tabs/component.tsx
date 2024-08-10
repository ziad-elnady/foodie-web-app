import { Stack, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import { tabs } from './partials/static';

type Props = {};

const PersonalTab = dynamic(() => import('./partials/personal-tab'));
const BillingTab = dynamic(() => import('./partials/billing-tab'));

const TABS = [PersonalTab, BillingTab];

const CheckoutTabs = (props: Props) => {
	const [tab, setTab] = useState<number>(0);
	const [formData, setFormData] = useState<CheckoutFormData>({
		personalInfo: {
			firstName: '',
			lastName: '',
			email: '',
			phoneNumber: '',
			address: {
				city: '',
				street: '',
				country: '',
				postalCode: ''
			}
		},
		billingInfo: {
			cardName: '',
			cardNumber: '',
			expiry: new Date(),
			cvv: '',
			saveAsDefaultMethod: false
		}
	});

	useEffect(() => {
		console.log(formData);
	}, [formData]);

	const CurrentTab = TABS[tab];

	return (
		<Stack sx={{ borderRadius: 2, border: '1px solid', borderColor: 'divider', overflow: 'hidden', flex: 1, height: 'fit-content' }}>
			<Stack direction={'row'} bgcolor={'secondary.light'} justifyContent={'space-around'} py={3} px={5}>
				{tabs.map((name, index) => (
					<Typography key={index} color={'common.white'} fontWeight={index === tab ? 'bold' : 'light'}>
						{name}
					</Typography>
				))}
			</Stack>
			<CurrentTab setTab={setTab} setFormData={setFormData} />
		</Stack>
	);
};

export default CheckoutTabs;
