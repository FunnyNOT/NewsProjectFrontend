import React from 'react'
import WebsiteCards from './HomePageComponents/WebsiteCards'
import { DrawerAppBar } from './globalComponents/Header'
import Box from '@mui/system/Box'
import { styled } from '@mui/material'
import { createTheme, ThemeProvider, Fab } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import '@fontsource/league-spartan'

const StyledHomePage = styled('div')({
  backgroundColor: '#23282f',
  height: '100%',
  display: 'flex',
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

const Homepage = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledHomePage>
        <DrawerAppBar />

        <Box component='section' id='back-to-top-anchor' sx={{ p: 10 }}>
          <WebsiteCards />
        </Box>
        <Box sx={{ height: '100vh', overflowY: 'auto' }}>
          <ScrollTop {...{ window }}>
            <Fab color='primary' size='medium' aria-label='scroll back to top'>
              <KeyboardArrowUpIcon />
            </Fab>
          </ScrollTop>
        </Box>
      </StyledHomePage>
    </ThemeProvider>
  )
}

export default Homepage
