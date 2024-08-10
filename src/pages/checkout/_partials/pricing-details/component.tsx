import { Divider, Stack, Typography } from '@mui/material';

type Props = {};

const PricingDetailsCard = (props: Props) => {
	return (
		<Stack width={0.4} sx={{ borderRadius: 2, border: '1px solid', borderColor: 'divider', overflow: 'hidden', height: 'fit-content' }}>
			<Stack direction={'row'} bgcolor={'secondary.light'} py={3} px={3}>
				<Typography color={'common.white'}>Cart Details</Typography>
			</Stack>
			<Stack spacing={3} useFlexGap>
				<Stack>
					<Stack direction={'row'} bgcolor={'#F9F9F9'} py={4} px={3} justifyContent={'space-between'}>
						<Typography fontWeight={'light'} width={0.5} textAlign={'start'}>
							PRODUCT
						</Typography>
						<Typography fontWeight={'light'} width={0.25} textAlign={'center'}>
							Quantity
						</Typography>
						<Typography fontWeight={'light'} width={0.25} textAlign={'end'}>
							SUBTOTAL
						</Typography>
					</Stack>
					<Divider sx={{ borderStyle: 'dashed', borderImageSlice: 13 }} />
					<Stack spacing={2} py={4} px={3} bgcolor={'#F9F9F9'}>
						<Stack direction={'row'} justifyContent={'space-between'} color={'#949494'}>
							<Typography fontWeight={'light'} textAlign={'start'} width={0.5} noWrap>
								Double Bed & Dressing
							</Typography>
							<Typography fontWeight={'light'} textAlign={'center'} width={0.25}>
								01
							</Typography>
							<Typography fontWeight={'light'} textAlign={'end'} width={0.25}>
								$180
							</Typography>
						</Stack>
						<Stack direction={'row'} justifyContent={'space-between'} color={'#949494'}>
							<Typography fontWeight={'light'} textAlign={'start'} width={0.5} noWrap>
								Double Bed & Dressing
							</Typography>
							<Typography fontWeight={'light'} textAlign={'center'} width={0.25}>
								01
							</Typography>
							<Typography fontWeight={'light'} textAlign={'end'} width={0.25}>
								$180
							</Typography>
						</Stack>
						<Stack direction={'row'} justifyContent={'space-between'} color={'#949494'}>
							<Typography fontWeight={'light'} textAlign={'start'} width={0.5} noWrap>
								Double Bed & Dressing
							</Typography>
							<Typography fontWeight={'light'} textAlign={'center'} width={0.25}>
								01
							</Typography>
							<Typography fontWeight={'light'} textAlign={'end'} width={0.25}>
								$180
							</Typography>
						</Stack>
					</Stack>
					<Divider sx={{ borderStyle: 'dashed' }} />
					<Stack direction={'row'} justifyContent={'space-between'} py={4} px={3} bgcolor={'#F9F9F9'}>
						<Typography fontWeight={'light'} textAlign={'start'}>
							SUBTOTAL
						</Typography>
						<Typography fontWeight={'light'} textAlign={'end'} color={'#949494'}>
							$400
						</Typography>
					</Stack>
					<Divider sx={{ borderStyle: 'dashed' }} />
					<Stack direction={'row'} justifyContent={'space-between'} py={4} px={3} bgcolor={'#F9F9F9'}>
						<Typography fontWeight={'light'} textAlign={'start'}>
							SHIPPING
						</Typography>
						<Typography fontWeight={'light'} textAlign={'end'} color={'#949494'}>
							$100
						</Typography>
					</Stack>
					<Divider sx={{ borderStyle: 'dashed' }} />
					<Stack direction={'row'} justifyContent={'space-between'} py={4} px={3} bgcolor={'#F9F9F9'}>
						<Typography fontWeight={'light'} textAlign={'start'}>
							TOTAL
						</Typography>
						<Typography fontWeight={'bold'} textAlign={'end'} color={'#949494'}>
							$500
						</Typography>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
};

export default PricingDetailsCard;
