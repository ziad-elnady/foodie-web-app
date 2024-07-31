import { LogoSize } from '@/enums/sizes';
import { useScroll } from '@/hooks';
import { AppBar, Stack, Toolbar } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import Actions from './partials/actions';
import Logo from './partials/logo';
import Nav from './partials/nav';

const Header = () => {
	const [scrolled, setScrolled] = useState<boolean>(false);

	const scrollY = useScroll();

	const pathname = usePathname();

	const isHome = pathname === '/';
	const position = isHome ? undefined : 'sticky';
	const getForegroundColor = () => {
		if (isHome && scrolled) return '#000000';
		return '#FFFFFF';
	};

	useEffect(() => {
		if (typeof window === 'undefined') return;

		setScrolled(scrollY >= window.innerHeight);
	}, [scrollY]);

	return (
		<AppBar
			color={'transparent'}
			position={position}
			elevation={0}
			sx={{ color: getForegroundColor, bgcolor: scrolled ? '#00000080' : undefined, backdropFilter: scrolled ? 'blur(25px)' : undefined }}>
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
