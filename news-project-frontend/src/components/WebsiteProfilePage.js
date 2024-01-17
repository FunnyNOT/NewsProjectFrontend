import React, { useEffect, useState } from 'react'
import { useWebsiteContext } from '../global_functions/WebsiteContext'
import ProfileBanner from './WebsiteProfilePageComponents/WebsiteProfileBanner'
import ArticleCards from './WebsiteProfilePageComponents/ArticleCards'
import { DrawerAppBar } from './globalComponents/Header'
import { createTheme, ThemeProvider } from '@mui/material'
import { styled } from '@mui/material'
import Box from '@mui/material/Box'
import { fetchArticles } from '../global_functions/ApiDataDisplay'

const StyledPage = styled('div')({
  backgroundColor: '#23282f',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  margin: 0, // Reset margin
  padding: 0, // Reset padding
  overflowX: 'hidden' // Prevent horizontal scrollbar
})

const theme = createTheme({
  palette: {
    primary: {
      main: '#23282f'
    }
  }
})

const WebsiteProfilePage = () => {
  const { websiteId } = useWebsiteContext();
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
    return <p>Loading...</p>
  }

  if (error) {
    return <p>Error: {error}</p>
  }

  const imageUrl = `${process.env.PUBLIC_URL}/images/${data.website.website_image_name}.png`

  return (
    <ThemeProvider theme={theme}>
      <StyledPage>
        <DrawerAppBar />
        <ProfileBanner imageLink={imageUrl} />
        <Box component='section' sx={{ marginTop: '150px', marginLeft: '10px', alignContent: 'center' }}>
          <h2>Latest News</h2>
          <ArticleCards data={data} />
        </Box>
      </StyledPage>
    </ThemeProvider>
  )
}

export default WebsiteProfilePage
