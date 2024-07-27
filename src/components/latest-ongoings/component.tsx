import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Button, Container, Grid, Stack, Typography } from "@mui/material";
import OngoingCard from './partials/ongoing-card';


type Props = {}

const OngoingSection = (props: Props) => {
    return (
        <Container sx={{ my: 8 }}>
            <Stack>
                <Stack direction='row' alignItems='center' my={3}>
                    <Stack spacing={3} useFlexGap>
                        <Typography variant='h4' fontWeight={700}>Latest Ongoings</Typography>
                        <Typography variant='caption' color="#666666" width='62ch'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina.</Typography>
                    </Stack>
                    <Button variant='contained' disableElevation sx={{ ml: 'auto', px: '24px', py: '16px', borderRadius: 999, bgcolor: "#000000" }} endIcon={<ArrowForwardIosRoundedIcon sx={{ height: '17px', ml: '4px' }} />}>
                        <Typography textTransform={'capitalize'} fontWeight={600}>Read All Blogs</Typography>
                    </Button>
                </Stack>
                <Grid container rowSpacing={4} columnSpacing={2}>
                    {
                        Array(3).fill('').map((item, index) => (
                            <Grid key={index} item sm={6} md={4}>
                                <OngoingCard />
                            </Grid>
                        ))
                    }
                </Grid>
            </Stack>
        </Container>
    )
}

export default OngoingSection