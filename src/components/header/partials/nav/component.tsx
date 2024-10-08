import { Link, Stack, Typography } from '@mui/material';
import NextLink from 'next/link';
import { links } from './static';

const Nav = () => {
	return (
		<Stack direction={'row'} alignItems={'center'} spacing={4} useFlexGap>
			{links.map((link) => (
				<Link key={link.href} component={NextLink} href={link.href} color={'#FFFFFF'} underline="none">
					<Typography variant="body2">{link.label}</Typography>
				</Link>
			))}
		</Stack>
	);
};

export default Nav;
