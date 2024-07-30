import { Box, Grid, Link, Stack, Typography } from '@mui/material';
import NextLink from 'next/link';
import { links } from './static';

type Props = {};

const BottomNav = (props: Props) => {
	return (
		<Stack width={1} mt={4} justifyContent={'space-around'}>
			<Box>
				<Grid container spacing={{ xs: 4, sm: 0 }}>
					{links.map((link) => (
						<Grid item xs={12} md={4} lg={12 / links.length} key={link.id}>
							<Stack spacing={2} useFlexGap>
								<Typography variant="body2" textTransform={'uppercase'} color="#9A9A9A">
									{link.title}
								</Typography>
								<Stack spacing={1}>
									{link.links.map((_link) => (
										<Link href={_link.path} component={NextLink} underline="none" key={_link.id}>
											<Typography variant="body2" color="#FFFFFF">
												{_link.label}
											</Typography>
										</Link>
									))}
								</Stack>
							</Stack>
						</Grid>
					))}
				</Grid>
			</Box>
		</Stack>
	);
};

export default BottomNav;
