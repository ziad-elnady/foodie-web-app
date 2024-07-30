import { Box, Button, Stack, type SvgIconTypeMap, TextField } from '@mui/material';
import { type OverridableComponent } from '@mui/material/OverridableComponent';
import { FormEvent } from 'react';

type Props = {
	placeholder: string;
	Icon: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & { muiName: string };
	onSubmit: (e: FormEvent<HTMLFormElement>) => void;
};

const SearchInput = ({ placeholder, Icon, onSubmit }: Props) => {
	return (
		<Box component={'form'} width={1} onSubmit={onSubmit}>
			<Stack direction={'row'} alignItems={'center'} width={1} maxWidth={'40ch'} mx={'auto'} p={1} borderRadius={999} border={'1px solid #FFFFFF99'} bgcolor="#00000026">
				<TextField
					size="small"
					variant="standard"
					name="search"
					placeholder={placeholder}
					sx={{ flex: 1, '.MuiInputBase-input': { p: 0 } }}
					InputProps={{
						disableUnderline: true,
						sx: { color: '#FFFFFF', p: 0, pt: 0, px: 1 }
					}}
				/>
				<Button type="submit" variant="contained" color="inherit" sx={{ minWidth: 'unset', p: 1, borderRadius: 999, bgcolor: '#282828', color: '#FFFFFF' }}>
					<Icon />
				</Button>
			</Stack>
		</Box>
	);
};

export default SearchInput;
