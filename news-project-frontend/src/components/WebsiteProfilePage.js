import React, { useEffect, useState } from 'react'
import WebsiteInfoCard from './WebsiteProfilePageComponents/WebsiteInfoCard'
import ArticleCards from './WebsiteProfilePageComponents/ArticleCards'
import { DrawerAppBar } from './globalComponents/Header'
import { ThemeProvider, CircularProgress, Typography, Fab } from '@mui/material'
import { styled } from '@mui/material'
import Box from '@mui/material/Box'
import { fetchArticles } from '../global_functions/ApiDataDisplay'
import { useLocation } from 'react-router-dom'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import { theme } from '../global_functions/GlobalTheme'
import { ScrollTop } from '../global_functions/ScrollTop'
import SearchAndFilterComponent from './WebsiteProfilePageComponents/SearchAndFilter'

//Page's style
const StyledPage = styled('div')({
  backgroundColor: '#23282f',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  margin: 0,
  padding: 0,
  overflowX: 'hidden',
  maxHeight: '100vh'
})
//Get the websiteId from the pathname
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
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedTags, setSelectedTags] = useState([])
  const [searchAndFilterVisible, setSearchAndFilterVisible] = useState(false)

  //Handle for tag change
  const handleTagChange = (event) => {
    setSelectedTags(event.target.value)
  }

  //Get unique tags
  const allTags =
    data?.articles?.reduce((tags, article) => {
      if (Array.isArray(article.tags) && article.tags !== null) {
        article.tags.forEach((tag) => {
          if (!tags.includes(tag)) {
            tags.push(tag)
          }
        })
      }
      return tags
    }, []) || []
  //Create the filtered articles to pass on the article cards
  const filteredArticles = data?.articles
    ? data.articles.filter((article) => {
        if (selectedTags.length === 0) {
          return true // No tags selected, show all articles
        }

        return Array.isArray(article.tags) && article.tags.some((tag) => selectedTags.includes(tag))
      })
    : []
  //Handle for search change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
  }

  //Handle for clear search field
  const handleClearSearch = () => {
    setSearchQuery('')
  }
  const handleSearchButtonClick = () => {
    setSearchAndFilterVisible(!searchAndFilterVisible)
  }

  //API call to get the articles using the websiteId
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

  const imageUrl = `${process.env.PUBLIC_URL}/images/${data.website.website_image_name}.png`
  const websiteName = data.website.website_name
  const websiteDescription = data.website.website_description
  const websiteLink = data.website.website_link

  return (
    <ThemeProvider theme={theme}>
      <StyledPage>
        <DrawerAppBar onSearchButtonClick={handleSearchButtonClick} visible={searchAndFilterVisible} />
        <Box
          id='back-to-top-anchor'
          component='section'
          sx={{ marginTop: '80px', marginLeft: '0px', marginBottom: '10px', alignContent: 'center', borderBottom: '1px solid #fff' }}
        >
          {/* Website info card */}
          <WebsiteInfoCard
            imageUrl={imageUrl}
            websiteName={websiteName}
            websiteDescription={websiteDescription}
            websiteLink={websiteLink}
          />
        </Box>
        {searchAndFilterVisible && (
          <SearchAndFilterComponent
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
            onClearSearch={handleClearSearch}
            allTags={allTags}
            selectedTags={selectedTags}
            onTagChange={handleTagChange}
            visible={searchAndFilterVisible}
          />
        )}
        <Box component='section' sx={{ marginLeft: '0px', alignContent: 'center' }}>
          <Box sx={{ width: '100%', backgroundColor: '#fff', marginTop: '20px', marginBottom: '20px' }}>
            <Typography style={{ textAlign: 'center', fontSize: '24px' }}>Latest News</Typography>
          </Box>
          <Box sx={{ marginTop: '30px' }}>
            {/* Article cards */}
            {data?.articles && <ArticleCards data={{ articles: filteredArticles }} searchQuery={searchQuery} />}
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
