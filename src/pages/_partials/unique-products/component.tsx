import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { Box, Button, Container, Stack, Typography } from "@mui/material";

type Props = {}

const UniqueProductsSection = (props: Props) => {
    return (
        <Box bgcolor='#666666' sx={{ my: 12, color: '#FFFFFF' }}>
            <Container sx={{ py: 18 }}>
                <Stack direction={'row'} spacing={1} useFlexGap>
                    <Stack spacing={3} sx={{ alignItems: 'start' }}>
                        <Typography variant='h4' fontWeight={700} color="#FFFFFF" width={'24ch'}>Have a Look at Our Unique Selling Proportions</Typography>
                        <Button variant='contained' disableElevation sx={{ ml: 'auto', px: '24px', py: '16px', borderRadius: 999, bgcolor: "#282828" }} endIcon={<ArrowForwardIosRoundedIcon sx={{ height: '17px', ml: '4px' }} />}>
                            <Typography textTransform={'capitalize'} fontWeight={600}>Read More</Typography>
                        </Button>
                    </Stack>
                    <Stack spacing={4} useFlexGap>
                        <Typography variant='caption'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</Typography>
                        <Stack direction={'row'} spacing={3} useFlexGap>
                            <Stack>
                                <Typography variant='h3' fontWeight={700}>99%</Typography>
                                <Typography variant='caption'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</Typography>
                            </Stack>
                            <Stack>
                                <Typography variant='h3' fontWeight={700}>100%</Typography>
                                <Typography variant='caption'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</Typography>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
}

export default UniqueProductsSection