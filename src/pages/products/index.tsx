import Footer from '@/components/footer';
import { useResponsive } from '@/hooks';
import { Search } from '@mui/icons-material';
import { Box, Container, Stack, Typography } from '@mui/material';
import dynamic from 'next/dynamic';
import { useState, type FormEvent } from 'react';
import SearchInput from '../_partials/hero/partials/search-input';
import FiltersSection from './_partials/filters';
import ProductsGridSection from './_partials/products/component';

type Props = {};

const FiltersDrawerSection = dynamic(() => import('./_partials/filters-drawer'));
const FiltersDrawerButton = dynamic(() => import('./_partials/filters-drawer-button'));

const ProductsPage = (props: Props) => {
	const showFiltersSection = useResponsive('md');

	const [showDrawer, setShowDrawer] = useState<boolean>(false);

	const handleNewsletter = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.target as HTMLFormElement);
		const search = formData.get('search');

		window.alert(`Form Submitted from footer: ${search}`);
	};

	return (
		<>
			<Stack>
				<Container>
					<Stack direction={'row'} mt={4} spacing={4} useFlexGap>
						{showFiltersSection && (
							<Box width={'40%'}>
								<FiltersSection />
							</Box>
						)}
						<Stack spacing={4} useFlexGap alignItems={'flex-start'} width={1}>
							<Typography variant="h4" fontWeight={600}>
								Our Collection Of Products
							</Typography>
							<Stack direction={'row'} width={1} spacing={2} useFlexGap>
								{!showFiltersSection && <FiltersDrawerButton onClick={setShowDrawer} />}
								<SearchInput onSubmit={handleNewsletter} transperant={true} placeholder={'Search An Item'} Icon={Search} />
							</Stack>
							<ProductsGridSection />
						</Stack>
					</Stack>
				</Container>
				<Footer />
			</Stack>
			{showDrawer && !showFiltersSection && <FiltersDrawerSection onClose={setShowDrawer} />}
		</>
	);
};

export default ProductsPage;
