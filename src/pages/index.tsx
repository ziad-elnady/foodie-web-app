import Header from '@/components/header';
import { Box } from '@mui/material';
import Head from 'next/head';
import OngoingSection from '../components/latest-ongoings/components';
import UniqueProductsSection from '../components/unique-products/component';
import CategoriesSection from './_partials/categories/component';
import FeaturedProductsSection from './_partials/featured-products';
import HeroSection from './_partials/hero';
import PopularProducts from './_partials/popular-products';

export default function Home() {
	return (
		<>
			<Head>
				<title>Foodie</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header />
			<Box component={'main'}>
				<HeroSection />
				<FeaturedProductsSection />
				<CategoriesSection />
				<PopularProducts />
				<UniqueProductsSection />
				<OngoingSection />
			</Box>
		</>
	);
}
