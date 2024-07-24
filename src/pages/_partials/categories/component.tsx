import { Container, Grid, Stack, Typography } from '@mui/material';
import CategoryCard from './partials/category_card/component';

type Props = {};

const CategoriesSection = (props: Props) => {
	return (
		<Container sx={{ my: 8 }}>
			<Stack spacing={4} useFlexGap>
				<Stack direction={'column'} alignItems={'center'} spacing={2} useFlexGap>
					<Typography variant="h4" fontWeight={700}>
						View Our Range Of Categories
					</Typography>
					<Typography variant={'body2'} align={'center'} color={'#666666'} maxWidth={'72ch'}>
						Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam.
					</Typography>
				</Stack>

				<Grid container spacing={2}>
					{Array(3)
						.fill('')
						.map((item, index) => (
							<Grid item xs={12} md={4} lg={4} key={index}>
								<CategoryCard />
							</Grid>
						))}
				</Grid>
			</Stack>
		</Container>
	);
};

export default CategoriesSection;
