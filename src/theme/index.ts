import { ThemeOptions } from '@mui/material';
import { Oxygen } from 'next/font/google';

const fontFamily = Oxygen({ weight: ['300', '400', '700'], subsets: ['latin'], display: 'swap' });

export const themeOptions: ThemeOptions = {
	// primary, secondary, warning, error, success, info
	// main, light, dark

	palette: {
		mode: 'light',
		primary: { main: '#010101' },
		secondary: { main: '#A6A6A6' },
		background: {
			default: '#FEFEFE',
			paper: '#EFEFEF'
		},
		common: {
			white: '#FFFFFF',
			black: '#000000'
		}
	},
	typography: {
		fontFamily: fontFamily.style.fontFamily,
		button: {
			textTransform: 'none'
		}
	},
	components: {
		MuiButton: {
			defaultProps: {
				disableElevation: true,
				variant: 'contained'
			},
			styleOverrides: {
				root: {
					borderRadius: 999,
					paddingBlock: 16
				}
			}
		},
		MuiOutlinedInput: {}
	}
};
