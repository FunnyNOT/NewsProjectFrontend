import React from 'react'
import { WebsiteCards } from './HomePageComponents/WebsiteCards'
import { DrawerAppBar } from './globalComponents/Header'
import Box from '@mui/system/Box'

const Homepage = () => {
  return (
    <>
      <DrawerAppBar />

      <Box sx={{ p: 10 }}>
        <h1> HOMEPAGE </h1>
      </Box>

      <Box component='section' sx={{ p: 10 }}>
        <WebsiteCards />
      </Box>
    </>
  )
}

export default Homepage
