import SearchInput from "@/pages/_partials/hero/partials/search-input"
import { Container, Divider, Stack, Typography } from "@mui/material"
import Logo from "../header/partials/logo"
import SponsersSection from "../sponsers"
import BottomNav from "./partials/nav/component"

type Props = {}

const FooterSection = (props: Props) => {
    return (
        <Stack>
            <SponsersSection />
            <Stack sx={{ background: "#3D3D3D", pt: 6 }} >
                <Container>
                    <Stack alignItems={'center'} spacing={4}>
                        <Logo size="small" />
                        <Typography variant='h4' color={"#FFFFFF"} width={'32ch'} textAlign={'center'}>Subscribe To Your Newsletter to Stay Updated About Discounts</Typography>
                        <SearchInput />
                        <BottomNav />
                    </Stack>
                </Container>
                <Divider sx={{ mt: 8, bgcolor: "#FFFFFF" }} />
                <Typography variant='caption' color={"#FFFFFF"} textAlign={'center'} sx={{ width: 1, my: 3 }}>Copyright © 2023 Renew Bariatrics, Inc </Typography>
            </Stack>
        </Stack>
    )
}

export default FooterSection