import AddRoundedIcon from '@mui/icons-material/AddRounded';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import { Avatar, Box, Button, Divider, IconButton, List, ListItem, ListItemAvatar, ListItemText, Rating, Stack, Typography } from '@mui/material';

type Props = {};

const ProductDetailsSection = (props: Props) => {
	return (
		<Stack width={'50%'}>
			<Stack spacing={1} useFlexGap>
				<Stack direction={'row'} spacing={'auto'} alignItems={'center'}>
					<Typography variant="h6" fontWeight={700}>
						Double Bed & Side Tables
					</Typography>
					<IconButton>
						<FavoriteBorderOutlinedIcon fontSize="small" sx={{ color: '#AEAEAE' }} />
					</IconButton>
				</Stack>
				<Stack direction={'row'} alignItems={'center'}>
					<Typography variant="h5" fontWeight="light">
						$54.98
					</Typography>
					<Divider orientation="vertical" variant="middle" flexItem sx={{ mx: 1.5, bgcolor: '#000000', width: 2, height: 25.5 }} />
					<Box
						sx={{
							width: 200,
							display: 'flex',
							alignItems: 'center',
							color: '#A6A6A6'
						}}>
						<Rating name="text-feedback" value={2.5} readOnly precision={0.5} size="small" emptyIcon={<StarRoundedIcon style={{ opacity: 1, color: 'inherit' }} fontSize="inherit" />} />
						<Box sx={{ ml: 1 }}>
							<Typography variant="caption">( 34 review )</Typography>
						</Box>
					</Box>
				</Stack>
			</Stack>
			<Divider sx={{ my: 3 }} />
			<Stack spacing={2} useFlexGap my={1}>
				<Typography variant="body2" color={'#414141'} fontWeight={'light'}>
					Lorem ipsum dolor sit amet, consectetuer adipi scing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magn. Lorem ipsum dolor sit amet, consectetuer adipi scing
					elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magn.
				</Typography>
				<Stack sx={{ color: '#414141' }}>
					<Typography variant="body2" fontWeight="light">
						• Lorem ipsum dolor sit amet, adipi scing elit
					</Typography>
					<Typography variant="body2" fontWeight="light">
						• Lorem ipsum dolor sit amet, consectetuer adipi scing elit
					</Typography>
					<Typography variant="body2" fontWeight="light">
						• Lorem ipsum dolor sit amet, consectetuer adipi
					</Typography>
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
			<Stack my={1} width={1} spacing={2} useFlexGap>
				<Stack direction={'row'} spacing={2} height={'49px'}>
					<Box border={1} borderColor="#D7D7D7" borderRadius={999} width={'30%'} alignContent={'center'}>
						<Stack direction={'row'} alignItems={'center'} spacing={1.5} useFlexGap>
							<IconButton size="large">
								<RemoveRoundedIcon fontSize="small" />
							</IconButton>
							<Typography variant="body1">2</Typography>
							<IconButton size="large">
								<AddRoundedIcon fontSize="small" />
							</IconButton>
						</Stack>
					</Box>
					<Button variant="contained" disableElevation sx={{ borderRadius: 999, width: '100%', bgcolor: '#000000', textTransform: 'none' }}>
						Add to Cart
					</Button>
				</Stack>
				<Button
					variant="outlined"
					disableElevation
					sx={{ borderRadius: 999, width: '100%', height: '49px', borderColor: '#000000', fontWeight: 'bold', textTransform: 'none', color: '#000000' }}>
					Buy Now
				</Button>
			</Stack>

			<Stack mt={4} spacing={2} useFlexGap>
				<Stack direction={'row'} spacing={3}>
					<LocalShippingOutlinedIcon fontSize="medium" sx={{ color: '#B9B9B9' }} />
					<Typography variant="body1" color={'#424242'}>
						Free worldwide shipping on all orders over $100
					</Typography>
				</Stack>
				<Stack direction={'row'} spacing={3}>
					<ShoppingCartCheckoutRoundedIcon fontSize="medium" sx={{ color: '#B9B9B9' }} />
					<Typography variant="body1" color={'#424242'}>
						Delivers in: 3-7 Working Days Shipping & Return
					</Typography>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default ProductDetailsSection;
