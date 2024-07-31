import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Box, Link, Stack, Typography } from '@mui/material';
import NextLink from 'next/link';
import { categories } from './static';

type Props = {};

const CategoriesPanel = (props: Props) => {
	const accordionStyles = {
		boxShadow: 'none',
		'&:before': {
			display: 'none'
		},
		'& .MuiAccordionSummary-root': {
			minHeight: 'auto'
		},
		'& .MuiAccordionSummary-content': {
			margin: 0
		},
		'& .MuiAccordionDetails-root': {
			padding: 0
		}
	};

	return (
		<Stack py={5} px={3} border={1} borderColor={'#E2E2E2'}>
			<Stack direction={'row'} spacing={2} useFlexGap alignItems={'center'}>
				<Box width={'3px'} height={'24px'} bgcolor="#000000"></Box>
				<Typography>Categories</Typography>
			</Stack>
			<Stack spacing={2} mt={2}>
				{categories.map((category) => (
					<Accordion key={category.id} sx={accordionStyles}>
						<AccordionSummary expandIcon={<ExpandMoreIcon />} id={`panel-${category.id}`}>
							<Typography variant="body2" color={'#414141'}>
								{category.name} ({category.sub_categories.length})
							</Typography>
						</AccordionSummary>
						<Stack spacing={1} mt={2} useFlexGap mx={2}>
							{category.sub_categories.map((_category) => (
								<AccordionDetails key={_category.id}>
									<Link href={_category.path} component={NextLink} underline="none">
										<Typography variant="caption" color={'#414141'}>
											{_category.name}
										</Typography>
									</Link>
								</AccordionDetails>
							))}
						</Stack>
					</Accordion>
				))}
			</Stack>
		</Stack>
	);
};

export default CategoriesPanel;
