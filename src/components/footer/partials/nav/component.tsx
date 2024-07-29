import { Grid, Link, Stack, Typography } from '@mui/material'
import NextLink from 'next/link'

type Props = {}

const BottomNav = (props: Props) => {
  return (
    <Stack width={1} justifyContent={'space-around'}>
      <Grid container rowSpacing={1} columnSpacing={2}>
        {Array(5).fill('').map(() => (
          <Grid item sm={12} md={4} lg={2}>
            <Typography variant='body2' textTransform={'uppercase'} color='#9A9A9A'>Products</Typography>
            <Stack spacing={2} mt={3}>
              {Array(5).fill('').map(() => (
                <Link href='#' component={NextLink} underline="none">
                  <Typography variant='body2' color="#FFFFFF" >Lorem Ipsum</Typography>
                </Link>
              ))}
            </Stack>
          </Grid>
        ))}
      </Grid>
    </Stack>
  )
}

export default BottomNav