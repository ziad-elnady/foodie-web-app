import { LogoSize } from '@/enums/sizes';
import { useScroll } from '@/hooks';
import { BASE_TRANSITION } from '@/library/constants';
import { AppBar, Stack, Toolbar, useTheme } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Actions from './partials/actions';
import Logo from './partials/logo';
import Nav from './partials/nav';

const Header = () => {
	const theme = useTheme();
	const [scrolled, setScrolled] = useState<boolean>(false);

	const scrollY = useScroll();

	const pathname = usePathname();

	const isHome = pathname === '/';
	const position = isHome ? undefined : 'sticky';

	const getBackgroundStyles = () => {
		if (isHome) {
			if (scrolled) return { bgcolor: '#00000080', backdropFilter: 'blur(25px)' };
		} else {
			return { bgcolor: '#FFFFFF70', '*': { color: '#000000' }, backdropFilter: 'blur(25px)' };
		}
	};

	useEffect(() => {
		if (typeof window === 'undefined') return;

		setScrolled(scrollY >= window.innerHeight - (theme.mixins.toolbar.minHeight as number));
	}, [scrollY, theme.mixins.toolbar.minHeight]);

	return (
		<AppBar color={'transparent'} position={position} elevation={0} sx={{ transition: BASE_TRANSITION, ...getBackgroundStyles() }}>
			<Toolbar>
				<Stack width={1} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
					<Logo size={LogoSize.SMALL} />
					<Nav />
					<Actions />
				</Stack>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
