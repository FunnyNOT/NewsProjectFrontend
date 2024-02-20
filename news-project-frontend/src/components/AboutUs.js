import React from 'react'
import { DrawerAppBar } from './globalComponents/Header'
import Box from '@mui/system/Box'
import { styled } from '@mui/material'
import { createTheme, ThemeProvider, Fab, Typography, Divider, useMediaQuery } from '@mui/material'
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
  // maxHeight: '2800px'
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
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <ThemeProvider theme={theme}>
      <StyledPage id='back-to-top-anchor'>
        <DrawerAppBar />
        <Box component='section' sx={{ marginTop: isSmallScreen ? '5px' : '45px' }}>
          <AboutUsCard />
        </Box>
        <Box component='section' sx={{ p: 6, marginTop: '-40px' }}>
          <OurMissionCard />
        </Box>
        <Box component='section' sx={{ p: 7, marginTop: '-20px' }}>
          {!isSmallScreen && (
            <Box style={{ width: isSmallScreen ? '90%' : '100%', height: 'auto', marginLeft: '20px' }}>
              <Divider sx={{ width: '2%', borderBottom: '5px solid #eba80a', marginBottom: '6px', marginLeft: 'auto' }} />
              <Typography
                variant='h4'
                align='right'
                sx={{ marginBottom: '20px', fontWeight: 'bold', fontSize: isMediumScreen ? '38px' : '45px', marginRight: '5px' }}
              >
                How It Works
              </Typography>
            </Box>
          )}
          <HowItWorksCard />
        </Box>
        <Box component='section' sx={{ p: 7, marginTop: '-20px' }}>
          <Typography
            variant='h4'
            align='center'
            sx={{ marginBottom: '20px', fontWeight: 'bold', fontSize: isSmallScreen ? '30px' : '45px' }}
          >
            Why Choose{' '}
            <img
              src={`${process.env.PUBLIC_URL}/images/logo.png`}
              alt='NewsPort'
              style={{ width: '170px', height: 'auto', marginBottom: '5px', verticalAlign: 'middle' }}
            />
            ?
          </Typography>
          <WhyChooseCard />
        </Box>
        <Box component='section' sx={{ p: 7, marginTop: '-20px' }}>
          <Divider
            sx={{
              width: isSmallScreen ? '8%' : '3%',
              borderBottom: '5px solid #eba80a',
              marginBottom: '6px',
              margin: 'auto',
              textAlign: 'center'
            }}
          />
          <Typography
            variant='h4'
            align='center'
            sx={{ marginBottom: '20px', fontWeight: 'bold', textAlign: 'center', fontSize: isSmallScreen ? '30px' : '45px' }}
          >
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
