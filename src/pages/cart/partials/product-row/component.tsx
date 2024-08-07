import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Box, IconButton, Stack } from '@mui/material';
import Image from 'next/image';

type Props = {};

const CartProductRow = (props: Props) => {
	return (
		<Stack direction={'row'}>
			<IconButton>
				<CloseRoundedIcon fontSize="small" />
				<Box position={'relative'} width={32} height={32} sx={{ aspectRatio: '1/1' }}>
					<Image
						src={'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
						alt="Food Item"
						style={{ objectFit: 'cover', borderRadius: 6 }}
						fill
					/>
				</Box>
			</IconButton>
		</Stack>
	);
};

export default CartProductRow;
