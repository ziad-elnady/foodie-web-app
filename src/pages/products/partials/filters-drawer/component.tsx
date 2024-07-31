import { Box, Drawer } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import FiltersSection from '../filters/component';

type Props = {
	onClose: Dispatch<SetStateAction<boolean>>;
};

const FiltersDrawerSection = ({ onClose }: Props) => {
	return (
		<Drawer open onClose={() => onClose(false)}>
			<Box width={1} p={2}>
				<FiltersSection />
			</Box>
		</Drawer>
	);
};

export default FiltersDrawerSection;
