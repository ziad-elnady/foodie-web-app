import { Routes } from '@/enums';
import { LogoSize } from '@/enums/sizes';
import { Link } from '@mui/material';
import LogoSVG from '@public/assets/svgs';
import NextLink from 'next/link';

type Props = {
	size: LogoSize;
};

const Logo = (props: Props) => {
	return (
		<Link component={NextLink} href={Routes.ROOT} color={'#FFFFFF'}>
			<LogoSVG size={props.size} />
		</Link>
	);
};

export default Logo;
