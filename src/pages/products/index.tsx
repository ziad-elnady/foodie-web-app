import Footer from '@/components/footer';
import { Search } from '@mui/icons-material';
import { Container, Stack, Typography } from '@mui/material';
import { type FormEvent } from 'react';
import SearchInput from '../_partials/hero/partials/search-input';
import CategoriesPanel from './partials/categories-panel';
import FilterPanel from './partials/filter-panel';
import ProductsGridSection from './partials/products/component';

type Props = {};

const ProductsPage = (props: Props) => {
	const handleNewsletter = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.target as HTMLFormElement);
		const search = formData.get('search');

		window.alert(`Form Submitted from footer: ${search}`);
	};

	return (
		<Stack>
			<Container>
				<Stack direction={'row'} mt={4} spacing={4} useFlexGap>
					<Stack width={'40%'} spacing={2}>
						<CategoriesPanel />
						<FilterPanel />
					</Stack>
					<Stack spacing={4} useFlexGap alignItems={'flex-start'} width={1}>
						<Typography variant="h4" fontWeight={600}>
							Our Collection Of Products
						</Typography>
						<SearchInput onSubmit={handleNewsletter} transperant={true} placeholder={'Search An Item'} Icon={Search} />
						<ProductsGridSection />
					</Stack>
				</Stack>
			</Container>
			<Footer />
		</Stack>
	);
};

export default ProductsPage;
