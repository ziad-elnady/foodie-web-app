import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';

type Props = {};

const CategoryCard = (props: Props) => {
	return (
		<Stack position={'relative'} width={1} height={'auto'} justifyContent={'flex-end'} p={2} sx={{ aspectRatio: '3/4' }}>
			<Box
				component={Image}
				src={'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
				alt={'Food Item'}
				sx={{ objectFit: 'cover', borderRadius: 4, zIndex: -1, filter: 'brightness(0.75)' }}
				fill
			/>

			<Typography bottom={16} left={16} color={'#FFFFFF'} variant="h5" fontWeight={700}>
				Bedroom Furniture
			</Typography>
		</Stack>
	);
};

export default CategoryCard;
