import React, { useState } from 'react'
import WebsiteCards from './HomePageComponents/WebsiteCards'
import { DrawerAppBar } from './globalComponents/Header'
import Box from '@mui/system/Box'
import { styled } from '@mui/material'
import { createTheme, ThemeProvider, Fab } from '@mui/material'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import SearchComponent from './globalComponents/SearchComponent'
import '@fontsource/league-spartan'

const StyledHomePage = styled('div')({
  backgroundColor: '#23282f',
  height: '100%',
  display: 'flex',
  width: '100%',
  margin: 0,
  padding: 0,
  overflowX: 'hidden',
  position: 'relative'
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
  const [searchQuery, setSearchQuery] = useState('')
  const [isSearchFieldVisible, setIsSearchFieldVisible] = useState(false)

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
  }

  const handleSearchIconClick = () => {
    setIsSearchFieldVisible(!isSearchFieldVisible)
  }

  const handleClearSearch = () => {
    setSearchQuery('')
  }

  return (
    <ThemeProvider theme={theme}>
      <StyledHomePage id='back-to-top-anchor'>
        <DrawerAppBar />
        <Box component='section' sx={{ p: 2, marginTop: '60px', position: 'relative' }}>
          <SearchComponent
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            onSearchIconClick={handleSearchIconClick}
            onClearSearch={handleClearSearch}
            isSearchFieldVisible={isSearchFieldVisible}
          />
          <Box sx={{ marginTop: '10px' }}>
            <WebsiteCards searchQuery={searchQuery} />
          </Box>
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
