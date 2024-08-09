import OnSaleFoodCard from '@/pages/_partials/popular-products/partials/onsale-food-card';
import { Container, Grid, Stack, Typography } from '@mui/material';

type Props = {};

const SimilarProductsSection = (props: Props) => {
	return (
		<Container sx={{ my: 12 }}>
			<Stack>
				<Typography variant="h5" fontWeight={'bold'}>
					Similar Products
				</Typography>

				<Stack spacing={4}>
					<Grid container rowSpacing={4} columnSpacing={2}>
						{Array(4)
							.fill('')
							.map((item, index) => (
								<Grid item key={index} xs={6} md={3}>
									<OnSaleFoodCard />
								</Grid>
							))}
					</Grid>
				</Stack>
			</Stack>
		</Container>
	);
};

export default SimilarProductsSection;
