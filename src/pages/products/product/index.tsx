import Footer from '@/components/footer';
import { Container, Stack } from '@mui/material';
import BreadcrumbPath from './_partials/breadcrumb';
import ProductDetailsSection from './_partials/details-section/component';
import ProductImagesSection from './_partials/images-section/component';

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
					<Stack>Descripiton | Reviews</Stack>
					<Stack>Similar products</Stack>
				</Stack>
			</Container>
			<Footer />
		</Stack>
	);
};

export default ProductDetailPage;
