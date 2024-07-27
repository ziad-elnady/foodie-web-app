import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Button, Container, Grid, Stack, Typography } from '@mui/material';
import OnSaleFoodCard from './partials/onsale-food-card/component';

type Props = {}

const PropularProductsSection = (props: Props) => {
    return (
        <Container sx={{ my: 4 }}>
            <Stack spacing={4} useFlexGap>
                <Stack direction={'row'} alignItems={'center'}>
                    <Stack spacing={2} useFlexGap>
                        <Typography variant='h4' fontWeight={700}>Most Popular Products</Typography>
                        <Typography variant='body2' color='#666666' width={'58ch'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina.</Typography>
                    </Stack>

                    <Button variant='contained' disableElevation sx={{ ml: 'auto', px: '24px', py: '16px', borderRadius: 999, bgcolor: 'black' }} endIcon={<ArrowForwardIosRoundedIcon sx={{ height: '17px', ml: '4px' }} />}>
                        <Typography textTransform={'capitalize'} fontWeight={600}>View All</Typography>
                    </Button>
                </Stack>
                <Grid container rowSpacing={4} columnSpacing={2}>
                    {
                        Array(8).fill('').map((item, index) => (
                            <Grid item key={index} xs={6} md={3}>
                                <OnSaleFoodCard />
                            </Grid>
                        ))
                    }
                </Grid>
            </Stack>
        </Container>
    )
}

export default PropularProductsSection