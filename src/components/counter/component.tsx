import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { Box, IconButton, Stack, Typography } from '@mui/material';

type Props = {};

const Counter = (props: Props) => {
	return (
		<Box border={1} borderColor="#D7D7D7" borderRadius={999} width={'auto'} alignContent={'center'}>
			<Stack direction={'row'} alignItems={'center'} spacing={'auto'}>
				<IconButton size="large">
					<RemoveRoundedIcon fontSize="small" />
				</IconButton>
				<Typography variant="body1">2</Typography>
				<IconButton size="large">
					<AddRoundedIcon fontSize="small" />
				</IconButton>
			</Stack>
		</Box>
	);
};

export default Counter;
