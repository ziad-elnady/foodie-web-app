import { Menu } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';

type Props = {
	onClick: Dispatch<SetStateAction<boolean>>;
};

const FiltersDrawerButton = ({ onClick }: Props) => {
	return (
		<IconButton onClick={() => onClick((prev) => !prev)}>
			<Menu />
		</IconButton>
	);
};

export default FiltersDrawerButton;
