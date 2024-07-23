import { Routes } from '@/enums';
import { Person, ShoppingBag } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';
import NextLink from 'next/link';

type Props = {};

const Actions = (props: Props) => {
	return (
		<Stack direction={'row'} alignItems={'center'} color={'#FFFFFF'}>
			<IconButton LinkComponent={NextLink} href={Routes.ACCOUNT_AUTH} color="inherit">
				<Person />
			</IconButton>
			<IconButton LinkComponent={NextLink} href={Routes.CART} color="inherit">
				<ShoppingBag />
			</IconButton>
		</Stack>
	);
};

export default Actions;
