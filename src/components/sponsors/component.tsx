import { Box, Container, Stack, Typography } from '@mui/material';

type Props = {};

const SponsorsSection = (props: Props) => {
	return (
		<Box bgcolor="#666666" mt={4}>
			<Container sx={{ py: 4 }}>
				<Stack direction={'row'} justifyContent={'space-around'}>
					{Array(7)
						.fill('')
						.map((item, index) => (
							<Typography key={index} variant="h5" fontWeight={700} color="#3D3D3D">
								Sponsor
							</Typography>
						))}
				</Stack>
			</Container>
		</Box>
	);
};

export default SponsorsSection;
