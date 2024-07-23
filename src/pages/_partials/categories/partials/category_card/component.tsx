import { Box, Typography } from "@mui/material"
import Image from "next/image"

type Props = {}

const CategoryCard = (props: Props) => {
    return (
        <Box position={'relative'} width={1} height={'auto'} sx={{ aspectRatio: 5 / 6, zIndex: -1 }}>
            <Image
                src={'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
                alt={'Food Item'}
                fill
                style={{ objectFit: 'cover', borderRadius: 16 }}
            />

            <Typography position={'absolute'}>
                Bedroom Furniture
            </Typography>
        </Box>
    )
}

export default CategoryCard