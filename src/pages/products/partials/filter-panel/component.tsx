import { Box, Checkbox, FormControlLabel, FormGroup, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { price_ranges } from './static';

type Props = {};

const FilterPanel = (props: Props) => {
	const [currentFilter, setCurrentFilter] = useState<number>(0);

	return (
		<Stack py={5} px={3} border={1} borderColor={'#E2E2E2'}>
			<Stack direction={'row'} spacing={2} useFlexGap alignItems={'center'}>
				<Box width={'3px'} height={'24px'} bgcolor="#000000"></Box>
				<Typography>Price Range</Typography>
			</Stack>
			<Stack mt={2}>
				<FormGroup>
					{price_ranges.map((range, index) => (
						<FormControlLabel key={range.id} control={<Checkbox defaultChecked />} label={`$${range.from} - ${range.to}`} sx={{ '& .MuiSvgIcon-root': { fontSize: 22 } }} />
					))}
				</FormGroup>
			</Stack>
		</Stack>
	);
};

export default FilterPanel;
