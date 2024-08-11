import { LogoSize } from '@/enums/sizes';
import SearchInput from '@/pages/_partials/hero/partials/search-input';
import { ChevronRight } from '@mui/icons-material';
import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import { type FormEvent } from 'react';
import Logo from '../header/partials/logo';
import SponsorsSection from '../sponsors';
import BottomNav from './partials/nav/component';

type Props = {};

const FooterSection = (props: Props) => {
	const handleNewsletter = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.target as HTMLFormElement);
		const search = formData.get('search');

		window.alert(`Form Submitted from footer: ${search}`);
	};

	return (
		<Stack>
			<SponsorsSection />
			<Stack sx={{ background: '#3D3D3D', pt: 6 }}>
				<Container>
					<Stack alignItems={'center'} spacing={4} useFlexGap>
						<Logo size={LogoSize.LARGE} />
						<Typography variant="h4" color={'#FFFFFF'} width={'32ch'} textAlign={'center'}>
							Subscribe To Your Newsletter to Stay Updated About Discounts
						</Typography>
						<Box width={1} maxWidth={'40ch'}>
							<SearchInput placeholder="person@email.com" transperant={false} Icon={ChevronRight} onSubmit={handleNewsletter} />
						</Box>
						<BottomNav />
					</Stack>
				</Container>
				<Divider sx={{ mt: 8, bgcolor: '#FFFFFF' }} />
				<Typography variant="caption" color={'#FFFFFF'} textAlign={'center'} sx={{ width: 1, my: 3 }}>
					Copyright © 2023 Renew Bariatrics, Inc
				</Typography>
			</Stack>
		</Stack>
	);
};

export default FooterSection;
