import { Breakpoint, Theme, useMediaQuery } from '@mui/material';

export const useResponsive = (breakpoint: Breakpoint = 'lg') => {
	const matches = useMediaQuery((theme: Theme) => theme.breakpoints.up(breakpoint));

	return matches;
};
