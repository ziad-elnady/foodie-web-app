"use client"

import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import { AccordionSummaryProps, Button, Container, Stack, Typography, styled } from "@mui/material";
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import { useState } from 'react';

type Props = {}

const Accordion = styled((props: AccordionProps) => (
    <MuiAccordion elevation={0} {...props} />
))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&::before': {
        display: 'none',
    },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
    <MuiAccordionSummary
        expandIcon={<ArrowForwardIosRoundedIcon sx={{ fontSize: '0.9rem' }} />}
        {...props}
    />
))(({ theme }) => ({
    backgroundColor:
        theme.palette.mode === 'dark'
            ? 'rgba(255, 255, 255, .05)'
            : 'transperant',
    flexDirection: 'row-reverse',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
        transform: 'rotate(90deg)',
    },
    '& .MuiAccordionSummary-content': {
        marginLeft: theme.spacing(1),
    },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

const FrequentlyAskedQuestionsSection = (props: Props) => {
    const [expanded, setExpanded] = useState<string | false>('panel1');

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <Container sx={{ my: 12 }}>
            <Stack direction={'row'} spacing={1} useFlexGap>
                <Stack alignItems={'flex-start'} spacing={4}>
                    <Stack spacing={2}>
                        <Typography variant='h4' fontWeight={700}>Frequently Asked Questions</Typography>
                        <Typography variant='caption' color="#666666" width='62ch'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fringilla nunc in molestie feugiat. Nunc auctor consectetur elit, quis pulvina.</Typography>
                    </Stack>
                    <Button variant='contained' disableElevation sx={{ ml: 'auto', px: '24px', py: '16px', borderRadius: 999, bgcolor: "#000000" }} endIcon={<ArrowForwardIosRoundedIcon sx={{ height: '17px', ml: '4px' }} />}>
                        <Typography textTransform={'capitalize'} fontWeight={600}>Ask A Question</Typography>
                    </Button>
                </Stack>
                <Stack spacing={2} useFlexGap>
                    {
                        Array(5).fill('').map((item, index) => (
                            <Accordion key={index} expanded={expanded === `panel${index}`} onChange={handleChange(`panel${index}`)}>
                                <AccordionSummary aria-controls={`panel${index}d-content`} id={`panel${index}d-header`}>
                                    <Typography variant='subtitle2' color="#222222">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed?</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography variant='caption' color="#666666">
                                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))
                    }
                </Stack>
            </Stack>
        </Container>
    )
}

export default FrequentlyAskedQuestionsSection