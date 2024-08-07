import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Breadcrumbs, Link, Stack, Typography } from '@mui/material';

type Props = {};

const BreadcrumbPath = (props: Props) => {
	const breadcrumbs = [
		<Link underline="none" key="1" href="/products">
			<Typography variant="body2" color="#7B7B7B">
				Products
			</Typography>
		</Link>,
		<Typography key="2" variant="body2" color="text.primary">
			Product Name
		</Typography>
	];

	return (
		<Stack spacing={2}>
			<Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
				{breadcrumbs}
			</Breadcrumbs>
		</Stack>
	);
};

export default BreadcrumbPath;
