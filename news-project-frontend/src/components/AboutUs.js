import React from 'react'
import { DrawerAppBar } from './globalComponents/Header'
import Box from '@mui/system/Box'
import { styled } from '@mui/material'
import { createTheme, ThemeProvider, Fab, Typography, Divider } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import '@fontsource/league-spartan'
import AboutUsCard from './AboutUsComponents/AboutUsCard'
import OurMissionCard from './AboutUsComponents/OurMissionCard'
import HowItWorksCard from './AboutUsComponents/HowItWorksCard'
import WhyChooseCard from './AboutUsComponents/WhyChooseCard'
import OurTeamCard from './AboutUsComponents/OurTeamCard'

const StyledPage = styled('div')({
  backgroundColor: '#23282f',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  margin: 0, // Reset margin
  padding: 0, // Reset padding
  overflowX: 'hidden', // Prevent horizontal scrollbar
  position: 'relative' // Ensure relative positioning for the "Back to Top" button
})

const theme = createTheme({
  palette: {
    primary: {
      main: '#23282f'
    },
    text: {
      primary: '#f9f9f9',
      secondary: '#23282f'
    }
  },
  typography: {
    fontFamily: 'League Spartan, sans-serif'
  }
})

const ScrollTop = (props) => {
  const { children } = props

  const handleClick = () => {
    const anchor = document.querySelector('#back-to-top-anchor')

    if (anchor) {
      anchor.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <div onClick={handleClick} role='presentation' style={{ position: 'fixed', bottom: 16, right: 16, cursor: 'pointer' }}>
      {children}
    </div>
  )
}

const AboutUs = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledPage id='back-to-top-anchor'>
        <DrawerAppBar />

        <Box component='section' sx={{ marginTop: '35px' }}>
          <AboutUsCard />
        </Box>
        <Box component='section' sx={{ p: 7, marginTop: '-20px' }}>
          <Divider sx={{ width: '4%', borderBottom: '5px solid #da292f', marginBottom: '6px' }} />
          <Typography variant='h4' align='left' fontSize={'45px'} sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
            Our Mission
          </Typography>
          <OurMissionCard />
        </Box>
        <Box component='section' sx={{ p: 7, marginTop: '-20px' }}>
          <Divider sx={{ width: '3%', borderBottom: '5px solid #da292f', marginBottom: '6px', marginLeft: 'auto' }} />
          <Typography variant='h4' align='right' fontSize={'45px'} sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
            How It Works
          </Typography>
          <HowItWorksCard />
        </Box>
        <Box component='section' sx={{ p: 7, marginTop: '-20px' }}>
          <Typography variant='h4' align='center' fontSize={'45px'} sx={{ marginBottom: '20px', fontWeight: 'bold' }}>
            Why Choose{' '}
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt='Newsify'
              style={{ width: '170px', height: 'auto', marginBottom: '5px', verticalAlign: 'middle' }}
            />
            ?
          </Typography>
          <WhyChooseCard />
        </Box>
        <Box component='section' sx={{ p: 7, marginTop: '-20px' }}>
          <Divider sx={{ width: '3%', borderBottom: '5px solid #da292f', marginBottom: '6px', margin: 'auto', textAlign: 'center' }} />
          <Typography variant='h4' align='center' fontSize={'45px'} sx={{ marginBottom: '20px', fontWeight: 'bold', textAlign: 'center' }}>
            Our Team
          </Typography>
          <OurTeamCard />
        </Box>
        <Box sx={{ height: '100vh', overflowY: 'auto' }}>
          <ScrollTop {...{ window }}>
            <Fab color='primary' size='medium' aria-label='scroll back to top'>
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </Box>
      </StyledPage>
    </ThemeProvider>
  )
}

export default AboutUs
