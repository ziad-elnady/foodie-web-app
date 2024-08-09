import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import { IconButton, Stack, Typography } from '@mui/material';

type Props = {};

const Counter = (props: Props) => {
	return (
		<Stack direction={'row'} justifyContent={'space-between'} alignItems={'center'} width={'fit-content'} border={1} borderColor="#D7D7D7" borderRadius={999} spacing={1} useFlexGap>
			<IconButton>
				<RemoveRoundedIcon fontSize="small" />
			</IconButton>
			<Typography variant="body1">2</Typography>
			<IconButton>
				<AddRoundedIcon fontSize="small" />
			</IconButton>
		</Stack>
	);
};

export default Counter;
