import { Avatar, Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';

type Props = {};

const OngoingCard = (props: Props) => {
	return (
		<Stack my={3} color="#404040">
			<Box position={'relative'} width={1} height={'auto'} sx={{ aspectRatio: '4/3' }}>
				<Image
					src={'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
					alt="Food Item"
					style={{ objectFit: 'cover', borderRadius: 16 }}
					fill
				/>
			</Box>
			<Stack direction="row" alignItems={'center'} my={2.5} spacing={1} useFlexGap>
				<Avatar
					src={'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
					alt="Food Item"
					sx={{ height: 28, width: 28 }}
				/>
				<Typography variant="caption">Oliver Bennett</Typography>
				<Typography variant="body1">•</Typography>
				<Typography variant="caption">18 Jan 2022</Typography>
			</Stack>
			<Typography variant="body2">Lorem Ipsum Is a Dummy Text Used As The Heading Of a Blog</Typography>
		</Stack>
	);
};

export default OngoingCard;
