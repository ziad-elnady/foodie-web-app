import { AppBar, Stack, Toolbar } from '@mui/material';
import Actions from './partials/actions';
import Logo from './partials/logo';
import Nav from './partials/nav';

const Header = () => {
	return (
		<AppBar color="transparent" elevation={0}>
			<Toolbar>
				<Stack width={1} direction={'row'} justifyContent={'space-between'} alignItems={'center'}>
					<Logo />
					<Nav />
					<Actions />
				</Stack>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
