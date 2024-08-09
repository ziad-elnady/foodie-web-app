import Counter from '@/components/counter';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Box, Button, Container, IconButton, Stack, Typography } from '@mui/material';
import {} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Image from 'next/image';
import RecommendedProductsSection from './partials/recommended-products/component';

type Props = {};

const CartPage = (props: Props) => {
	function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
		return { name, calories, fat, carbs, protein };
	}

	const rows = [
		createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
		createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
		createData('Eclair', 262, 16.0, 24, 6.0),
		createData('Eclair', 262, 16.0, 24, 6.0),
		createData('Eclair', 262, 16.0, 24, 6.0),
		createData('Eclair', 262, 16.0, 24, 6.0),
		createData('Eclair', 262, 16.0, 24, 6.0),
		createData('Eclair', 262, 16.0, 24, 6.0),
		createData('Cupcake', 305, 3.7, 67, 4.3)
	];

	return (
		<Stack mt={4}>
			<Container>
				<Stack>
					<Stack direction={'row'} spacing={3}>
						<Box width={0.7}>
							<TableContainer sx={{ borderRadius: 2, border: '1px solid', borderColor: 'divider' }}>
								<Table>
									<TableHead>
										<TableRow sx={{ bgcolor: 'secondary.light', color: 'common.white' }}>
											<TableCell>Products</TableCell>
											<TableCell align="right">Price</TableCell>
											<TableCell align="right">Quantity</TableCell>
											<TableCell align="right">Total</TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{rows.map((row) => (
											<TableRow key={row.name} sx={{ '&:last-child td': { border: 0 } }}>
												<TableCell align="right" sx={{ py: 4 }}>
													<Stack direction={'row'} alignItems={'center'} spacing={2} useFlexGap>
														<IconButton size="small">
															<CloseRoundedIcon fontSize="small" />
														</IconButton>
														<Box position={'relative'} width={32} height={32} sx={{ aspectRatio: '1/1' }}>
															<Image
																src={
																	'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
																}
																alt="Food Item"
																style={{ objectFit: 'cover', borderRadius: 6 }}
																fill
															/>
														</Box>
														<Typography>{row.name}</Typography>
													</Stack>
												</TableCell>
												<TableCell align="right">${row.calories}</TableCell>
												<TableCell align="right">
													<Box display={'inline-block'}>
														<Counter />
													</Box>
												</TableCell>
												<TableCell align="right">${row.carbs}</TableCell>
											</TableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
						</Box>
						<Stack
							position={'sticky'}
							top={(theme) => (theme.mixins.toolbar.minHeight as number) + 32}
							width={0.4}
							height={'fit-content'}
							border={1}
							borderColor={'divider'}
							borderRadius={2}
							overflow={'hidden'}>
							<TableContainer>
								<Table>
									<TableHead>
										<TableRow sx={{ bgcolor: 'secondary.light', color: 'common.white' }}>
											<TableCell>Cart Total</TableCell>
											<TableCell></TableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										<TableRow>
											<TableCell>SUBTOTAL</TableCell>
											<TableCell align="right">$400</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>DISCOUNT</TableCell>
											<TableCell align="right">---</TableCell>
										</TableRow>
										<TableRow sx={{ border: 0 }}>
											<TableCell>TOTAL</TableCell>
											<TableCell align="right">$400</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</TableContainer>
							<Button size="large" variant="contained" disableElevation sx={{ borderRadius: 0, py: 2 }}>
								Proceed To Checkout
							</Button>
						</Stack>
					</Stack>
					<RecommendedProductsSection />
				</Stack>
			</Container>
		</Stack>
	);
};

export default CartPage;
