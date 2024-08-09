import { Container, Stack } from '@mui/material';
import BreadcrumbPath from './_partials/breadcrumb';
import ProductDescriptionTab from './_partials/description/component';
import ProductDetailsSection from './_partials/details-section/component';
import ProductImagesSection from './_partials/images-section/component';
import SimilarProductsSection from './_partials/similar-products/component';

type Props = {};

const ProductDetailPage = (props: Props) => {
	return (
		<Stack>
			<Container sx={{ mt: 3 }}>
				<Stack>
					<BreadcrumbPath />
					<Stack direction={'row'} mt={3} spacing={8}>
						<ProductImagesSection />
						<ProductDetailsSection />
					</Stack>
				</Stack>
			</Container>
			{/* //TODO: ASK SEIF ABOUT THE TAB LOGIC AND ANIMATION */}
			<ProductDescriptionTab />
			<SimilarProductsSection />
		</Stack>
	);
};

export default ProductDetailPage;
