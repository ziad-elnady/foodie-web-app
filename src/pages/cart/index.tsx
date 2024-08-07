import Counter from '@/components/counter';
import Footer from '@/components/footer';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import { Box, Button, Container, IconButton, Stack, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Image from 'next/image';
import RecommendedProductsSection from './partials/recommended-products/component';

type Props = {};

const CartPage = (props: Props) => {
	const StyledTableCell = styled(TableCell)(({ theme }) => ({
		[`&.${tableCellClasses.head}`]: {
			backgroundColor: '#A6A6A6',
			color: theme.palette.common.white
		},
		[`&.${tableCellClasses.body}`]: {
			backgroundColor: '#FFFFFF',
			fontSize: 14
		}
	}));

	const StyledTableRow = styled(TableRow)(({ theme }) => ({
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover
		},
		// hide last border
		'&:last-child td, &:last-child th': {
			border: 0
		}
	}));

	function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
		return { name, calories, fat, carbs, protein };
	}

	const rows = [
		createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
		createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
		createData('Eclair', 262, 16.0, 24, 6.0),
		createData('Cupcake', 305, 3.7, 67, 4.3)
	];

	return (
		<Stack mt={4}>
			<Container>
				<Stack>
					<Stack direction={'row'} spacing={3}>
						<Box width={0.7}>
							<TableContainer component={Paper} sx={{ borderRadius: 2 }}>
								<Table sx={{ minWidth: 700 }} aria-label="customized table">
									<TableHead>
										<TableRow>
											<StyledTableCell>Products</StyledTableCell>
											<StyledTableCell align="right">Price</StyledTableCell>
											<StyledTableCell align="right">Quantity</StyledTableCell>
											<StyledTableCell align="right">Total</StyledTableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										{rows.map((row) => (
											<StyledTableRow key={row.name}>
												<TableCell align="right">
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
												<StyledTableCell align="right">${row.calories}</StyledTableCell>
												<StyledTableCell align="right">
													<Box width={120}>
														<Counter />
													</Box>
												</StyledTableCell>
												<StyledTableCell align="right">${row.carbs}</StyledTableCell>
											</StyledTableRow>
										))}
									</TableBody>
								</Table>
							</TableContainer>
						</Box>
						<Box width={0.4}>
							<TableContainer component={Paper} sx={{ borderRadius: 2 }}>
								<Table sx={{ minWidth: 700 }} aria-label="customized table">
									<TableHead>
										<TableRow>
											<StyledTableCell>Cart Total</StyledTableCell>
											<StyledTableCell></StyledTableCell>
										</TableRow>
									</TableHead>
									<TableBody>
										<TableRow>
											<TableCell>SUBTOTAL</TableCell>
											<TableCell>$400</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>DISCOUNT</TableCell>
											<TableCell>---</TableCell>
										</TableRow>
										<TableRow>
											<TableCell>TOTAL</TableCell>
											<TableCell>$400</TableCell>
										</TableRow>
									</TableBody>
								</Table>
							</TableContainer>
							<Button variant="contained" disableElevation sx={{ textTransform: 'none', bgcolor: '#000000', borderRadius: 2, width: 1 }}>
								Proceed To Checkout
							</Button>
						</Box>
					</Stack>
					<RecommendedProductsSection />
				</Stack>
			</Container>
			<Footer />
		</Stack>
	);
};

export default CartPage;
