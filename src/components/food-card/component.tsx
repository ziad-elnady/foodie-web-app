import { Add } from '@mui/icons-material';
import { Box, Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';

type Props = {};

const FoodCard = (props: Props) => {
	return (
		<Stack spacing={2} useFlexGap>
			<Box position={'relative'} width={1} height={'auto'} sx={{ aspectRatio: '3/4' }}>
				<Image
					src={'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
					alt="Food Item"
					style={{ objectFit: 'cover', borderRadius: 16 }}
					fill
				/>
			</Box>
			<Stack>
				<Typography>Double Bed & Side Tables</Typography>
				<Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
					<Typography variant="body2" color={'#404040'} sx={{ textDecoration: 'line-through' }}>
						$230.00
					</Typography>
					&nbsp;
					<Typography variant="body2">$200.00</Typography>
					<Button size="small" variant="outlined" color="inherit" sx={{ minWidth: 'unset', p: 0.25, ml: 'auto', borderRadius: 999 }}>
						<Add sx={{ fontSize: 16 }} />
					</Button>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default FoodCard;
