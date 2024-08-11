import Footer from '@/components/footer';
import Header from '@/components/header';
import '@/styles/globals.css';
import { themeOptions } from '@/theme';
import { createTheme, ThemeProvider } from '@mui/material';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
	const [queryClient] = useState(() => new QueryClient());
	const theme = createTheme(themeOptions);

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<Header />
				<Component {...pageProps} />
				<Footer />
			</ThemeProvider>
		</QueryClientProvider>
	);
}
