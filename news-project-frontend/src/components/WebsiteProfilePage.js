import React, { useEffect, useState } from 'react'
import WebsiteInfoCard from './WebsiteProfilePageComponents/WebsiteInfoCard'
import ArticleCards from './WebsiteProfilePageComponents/ArticleCards'
import { DrawerAppBar } from './globalComponents/Header'
import { createTheme, ThemeProvider, CircularProgress, Typography, Fab } from '@mui/material'
import { styled } from '@mui/material'
import Box from '@mui/material/Box'
import { fetchArticles } from '../global_functions/ApiDataDisplay'
import { useLocation } from 'react-router-dom'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'

const StyledPage = styled('div')({
  backgroundColor: '#23282f',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  margin: 0, // Reset margin
  padding: 0, // Reset padding
  overflowX: 'hidden', // Prevent horizontal scrollbar
  maxHeight: '100vh'
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

function getWebsiteId(pathname) {
  const splitted_pathname = pathname.split('/')[1]
  const websiteId = parseInt(splitted_pathname.slice(3, -3), 10)

  return websiteId
}
const WebsiteProfilePage = () => {
  const { pathname } = useLocation()
  const websiteId = getWebsiteId(pathname)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchDataFromAPI2 = async () => {
      try {
        const result = await fetchArticles(websiteId)
        setData(result)
      } catch (error) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    fetchDataFromAPI2()
  }, [websiteId])

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#23282f' }}>
        <CircularProgress size={30} color='primary' thickness={4} />
      </div>
    )
  }

  if (error) {
    return <p>Error: {error}</p>
  }

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

  const imageUrl = `${process.env.PUBLIC_URL}/images/${data.website.website_image_name}.png`
  const websiteName = data.website.website_name
  const websiteDescription = data.website.website_description
  const websiteLink = data.website.website_link

  return (
    <ThemeProvider theme={theme}>
      <StyledPage id='back-to-top-anchor'>
        <DrawerAppBar />
        <Box
          component='section'
          sx={{ marginTop: '80px', marginLeft: '0px', marginBottom: '0px', alignContent: 'center', borderBottom: '1px solid #fff' }}
        >
          <WebsiteInfoCard
            imageUrl={imageUrl}
            websiteName={websiteName}
            websiteDescription={websiteDescription}
            websiteLink={websiteLink}
          />
        </Box>
        <Box component='section' sx={{ marginLeft: '0px', alignContent: 'center' }}>
          <Box sx={{ width: '100%', backgroundColor: '#fff', marginTop: '-20px', marginBottom: '40px' }}>
            <Typography style={{ textAlign: 'center', fontSize: '24px' }}>Latest News</Typography>
          </Box>
          <Box sx={{ marginTop: '0px' }}>
            <ArticleCards data={data} />
          </Box>
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

export default WebsiteProfilePage
