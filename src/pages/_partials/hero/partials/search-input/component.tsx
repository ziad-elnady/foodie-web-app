import { Search } from '@mui/icons-material';
import { Box, Button, Stack, TextField } from '@mui/material';
import { FormEvent } from 'react';

type Props = {};

const SearchInput = (props: Props) => {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.target as HTMLFormElement);
		const search = formData.get('search');

		window.alert(`Form Submitted: ${search}`);
	};

	return (
		<Box component={'form'} width={1} onSubmit={handleSubmit}>
			<Stack direction={'row'} alignItems={'center'} width={1} maxWidth={'40ch'} mx={'auto'} p={1} borderRadius={999} border={'1px solid #FFFFFF99'} bgcolor="#00000026">
				<TextField
					size="small"
					variant="standard"
					name="search"
					placeholder="Search An Item"
					sx={{ flex: 1 }}
					InputProps={{
						disableUnderline: true,
						sx: { color: '#FFFFFF', p: 0, pt: 0, px: 1 }
					}}
				/>
				<Button type="submit" variant="contained" color="inherit" sx={{ minWidth: 'unset', p: 1, borderRadius: 999, bgcolor: '#282828', color: '#FFFFFF' }}>
					<Search />
				</Button>
			</Stack>
		</Box>
	);
};

export default SearchInput;
