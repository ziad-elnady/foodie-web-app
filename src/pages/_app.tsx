import '@/styles/globals.css';
import { themeOptions } from '@/theme';
import { createTheme, ThemeProvider } from '@mui/material';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
	const theme = createTheme(themeOptions);

	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
		</ThemeProvider>
	);
}
