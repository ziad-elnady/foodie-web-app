import { Routes } from '@/enums';
import { Link } from '@mui/material';
import LogoSVG from '@public/assets/svgs';
import NextLink from 'next/link';

type Props = {};

const Logo = (props: Props) => {
	return (
		<Link component={NextLink} href={Routes.ROOT}>
			<LogoSVG />
		</Link>
	);
};

export default Logo;
