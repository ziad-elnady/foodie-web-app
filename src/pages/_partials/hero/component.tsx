import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import SearchInput from './partials/search-input';
import { media } from './static';

type Props = {};

const HeroSection = (props: Props) => {
	return (
		<Box component={'section'} position={'relative'} width={1} height={'100dvh'}>
			<Box component={Image} src={media.background.url} alt={media.background.alt} sx={{ position: 'absolute', inset: 0, objectFit: 'cover', filter: 'brightness(0.5)', zIndex: -1 }} fill />
			<Stack width={1} height={1} justifyContent={'center'} alignItems={'center'} spacing={4} useFlexGap>
				<Typography variant="h3" fontWeight={700} maxWidth={'30ch'} textAlign={'center'} color={'#FFFFFF'}>
					Crafting Comfort, Redefining Spaces. Your Home, Your Signature Style!
				</Typography>
				<Typography variant="body2" maxWidth={'65ch'} textAlign={'center'} color={'#CECCCC'}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat
				</Typography>
				<SearchInput />
			</Stack>
		</Box>
	);
};

export default HeroSection;
