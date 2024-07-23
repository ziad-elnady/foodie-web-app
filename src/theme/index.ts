import { ThemeOptions } from '@mui/material';
import { Oxygen } from 'next/font/google';

const fontFamily = Oxygen({ weight: ['300', '400', '700'], subsets: ['latin'], display: 'swap' });

export const themeOptions: ThemeOptions = {
	palette: {},
	typography: {
		fontFamily: fontFamily.style.fontFamily
	}
};
