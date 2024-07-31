import FoodCard from '@/components/food-card';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Box, Button, Grid, LinearProgress, Stack, Typography } from '@mui/material';

type Props = {};

const ProductsGridSection = (props: Props) => {
	return (
		<Stack spacing={4} alignItems={'center'} mb={24}>
			<Stack spacing={1}>
				<Typography variant="body2" fontWeight={600}>
					Showing 1–12 of 24 item(s)
				</Typography>
				<Typography variant="body2" color={'#949494'}>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
				</Typography>
			</Stack>
			<Box>
				<Grid container spacing={4}>
					{Array(24)
						.fill('')
						.map((item, index) => (
							<Grid item xs={6} md={4} key={index}>
								<FoodCard />
							</Grid>
						))}
				</Grid>
			</Box>
			<Stack width={'60%'} spacing={3} alignItems={'center'}>
				<Typography variant="body2" color={'#414141'}>
					Showing 1–12 of 24 item(s)
				</Typography>
				<LinearProgress variant="determinate" value={60} sx={{ width: 1, height: '3px' }} color="inherit" />
				<Button
					variant="contained"
					disableElevation
					sx={{ ml: 'auto', px: '24px', py: '16px', borderRadius: 999, bgcolor: '#000000' }}
					endIcon={<ArrowForwardIosRoundedIcon sx={{ height: '17px', ml: '4px' }} />}>
					<Typography textTransform={'capitalize'} fontWeight={600}>
						Load More
					</Typography>
				</Button>
			</Stack>
		</Stack>
	);
};

export default ProductsGridSection;
