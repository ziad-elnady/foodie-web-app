import { Stack } from '@mui/material';
import CategoriesPanel from './partials/categories-panel';
import FilterPanel from './partials/filter-panel';

type Props = {};

const FiltersSection = (props: Props) => {
	return (
		<Stack width={1} spacing={2}>
			<CategoriesPanel />
			<FilterPanel />
		</Stack>
	);
};

export default FiltersSection;
