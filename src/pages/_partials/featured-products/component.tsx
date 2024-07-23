import { Container, Grid, Stack, Typography } from '@mui/material';
import FoodCard from './partials/food-card';

type Props = {};

const FeaturedProductsSection = (props: Props) => {
	return (
		<Container>
			<Stack py={8} spacing={4} useFlexGap>
				<Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
					<Typography variant="h4" fontWeight={700}>
						Featured Products
					</Typography>
					<Typography variant="body2" maxWidth={'57ch'} fontWeight={300} color={'#666666'}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina.
					</Typography>
				</Stack>
				<Grid container rowSpacing={6} columnSpacing={2}>
					{Array(6)
						.fill('')
						.map((item, index) => (
							<Grid item xs={6} md={4} lg={3} key={index}>
								<FoodCard />
							</Grid>
						))}
				</Grid>
			</Stack>
		</Container>
	);
};

export default FeaturedProductsSection;
