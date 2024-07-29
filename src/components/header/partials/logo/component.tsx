import { Routes } from '@/enums';
import { Link } from '@mui/material';
import LogoSVG from '@public/assets/svgs';
import NextLink from 'next/link';

type Props = {
	size: 'small' | 'medium' | 'large'
};

const Logo = (props: Props) => {
	return (
		<Link component={NextLink} href={Routes.ROOT} color={'#FFFFFF'}>
			<LogoSVG size={props.size} />
		</Link>
	);
};

export default Logo;
