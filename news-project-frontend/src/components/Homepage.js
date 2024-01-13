import React from 'react'
import { WebsiteCards } from './HomePageComponents/WebsiteCards'
import { DrawerAppBar } from './globalComponents/Header'
import Box from '@mui/system/Box'
import { styled } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material'

const StyledHomePage = styled('div')({
  backgroundColor: '#23282f',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%'
})

const theme = createTheme({
  palette: {
    primary: {
      main: '#23282f'
    }
  }
})

const Homepage = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledHomePage>
        <DrawerAppBar />

        <Box component='section' sx={{ p: 20 }}>
          <WebsiteCards />
        </Box>
      </StyledHomePage>
    </ThemeProvider>
  )
}

export default Homepage
