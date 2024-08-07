import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Avatar, Box, Container, List, ListItem, ListItemAvatar, ListItemText, Stack, Typography } from '@mui/material';

type Props = {};

const ProductDescriptionTab = (props: Props) => {
	return (
		<Box bgcolor={'#F8F8F8'} my={6}>
			<Container>
				<Stack py={8}>
					<Stack direction={'row'} alignItems={'center'}>
						<Typography variant="h5" color={'#696969'} fontWeight={'bold'}>
							Description
						</Typography>
						<Box sx={{ width: 2, height: 33, mx: 2, bgcolor: '#696969' }} />
						<Typography variant="h5" color={'#696969'}>
							Reviews
						</Typography>
					</Stack>
					<Stack mt={4} spacing={2} useFlexGap color={'#575757'}>
						<Typography variant="body2">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
							exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
							et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
							adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
							ea commodo consequat.
						</Typography>
						<Stack mt={2} spacing={1} useFlexGap>
							<Typography variant="body2">• Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
							<Typography variant="body2">
								• Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim <br />
								veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
							</Typography>
							<Typography variant="body2">• Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
							<Typography variant="body2">• Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Typography>
							{/* //TODO:FIX LIST */}
							<List dense={true}>
								{Array(3).map((_, index) => (
									<ListItem key={index}>
										<ListItemAvatar>
											<Avatar>
												<FiberManualRecordIcon fontSize="small" />
											</Avatar>
										</ListItemAvatar>
										<ListItemText primary={`hello ${index}`} />
									</ListItem>
								))}
							</List>
						</Stack>
					</Stack>
				</Stack>
			</Container>
		</Box>
	);
};

export default ProductDescriptionTab;
