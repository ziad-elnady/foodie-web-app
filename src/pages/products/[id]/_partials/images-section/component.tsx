import { Box, Grid, Stack } from '@mui/material';
import Image from 'next/image';

type Props = {};

const ProductImagesSection = (props: Props) => {
	return (
		<Stack direction={'row'} width={'50%'} spacing={2} useFlexGap>
			<Grid container rowSpacing={2} width={128}>
				{Array(3)
					.fill('')
					.map((_, index) => (
						<Grid key={index} item xs={12}>
							<Box position={'relative'} width={'auto'} height={1} sx={{ aspectRatio: '3/4' }}>
								<Image
									src={
										'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
									}
									alt="Food Item"
									style={{ objectFit: 'cover' }}
									fill
								/>
							</Box>
						</Grid>
					))}
			</Grid>
			<Box position={'relative'} flex={1} width={'auto'} height={'auto'} sx={{ aspectRatio: '3/4' }}>
				<Image
					src={'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
					alt="Product Image"
					style={{ objectFit: 'cover' }}
					fill
				/>
			</Box>
		</Stack>
	);
};

export default ProductImagesSection;
