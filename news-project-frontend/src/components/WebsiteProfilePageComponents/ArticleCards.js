import React from 'react'
import { Typography, Grid, Card, CardMedia, CardContent, styled, Button, Divider, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import ArticleSummaryModal from './ArticleSummaryModal'
import { normalizeGreekText } from '../../global_functions/NormalizeGreekText'

const ArticleCards = ({ data, searchQuery }) => {
  const normalizedSearchQuery = normalizeGreekText(searchQuery)

  const filteredArticles = data.articles.filter(
    (article) =>
      normalizeGreekText(article.title).toLowerCase().includes(normalizedSearchQuery.toLowerCase()) ||
      normalizeGreekText(article.summary).toLowerCase().includes(normalizedSearchQuery.toLowerCase())
  )

  return (
    <Grid container spacing={2}>
      {filteredArticles.map((article, index) => (
        <Grid
          item
          key={index}
          xs={12}
          sm={12}
          md={6}
          lg={6}
          xl={6}
          sx={{
            position: 'relative',
            '&:before': {
              content: '""',
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: index < filteredArticles.length - 1 ? '-5px' : '0', // Adjust the distance of the right border
              borderRight: index < filteredArticles.length - 1 ? '1px solid rgba(249, 249, 249, 0.8)' : 'none'
            }
          }}
        >
          <div>
            <ArticleCard
              title={article.title}
              summary={article.summary}
              link={article.link}
              published={article.published}
              image={article.image}
              tags={article.tags}
            />
          </div>
        </Grid>
      ))}
    </Grid>
  )
}

const ArticleCard = ({ title, summary, link, published, image }) => {
  const isImageAvailable = image && image.toLowerCase() !== 'null'
  const defaultImageUrl = `${process.env.PUBLIC_URL}/images/alt_article_image2.png`
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))
  const isLargeScreen = useMediaQuery(theme.breakpoints.down('lg'))

  const MyCard = styled(Card)({
    flexDirection: 'row',
    display: 'flex',
    marginLeft: isSmallScreen ? '2%' : isMediumScreen ? '5%' : '5%',
    marginRight: isSmallScreen ? '0%' : isMediumScreen ? '5%' : '5%',
    backgroundColor: isImageAvailable ? '#23282f' : '#23282f',
    width: isSmallScreen ? '95%' : isMediumScreen ? '90%' : '90%',
    height: isSmallScreen ? '200px' : isMediumScreen ? '220px' : '220px',
    justifyContent: 'center',
    alignItems: 'center',
    variant: isSmallScreen ? 'outlined' : isMediumScreen ? 'outlined' : 'plain',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.4)'
  })

  const handleButtonClick = (websiteLink) => {
    window.open(websiteLink, '_blank')
  }

  return (
    <>
      <MyCard
        variant='plain'
        style={{ borderColor: '#f9f9f9', borderRadius: '10px', marginBottom: isSmallScreen ? '0px' : isMediumScreen ? '0px' : '10px' }}
      >
        {isImageAvailable && (
          <CardMedia
            component='img'
            alt={title}
            image={image}
            sx={{ height: 'auto' }}
            style={{
              width: '35%',
              maxWidth: '250px',
              minWidth: isSmallScreen ? '35%' : isMediumScreen ? '35%' : isLargeScreen ? '35%' : '30%',
              objectFit: 'cover',
              height: isSmallScreen ? '55%' : isMediumScreen ? '75%' : isLargeScreen ? '70%' : '80%',
              marginLeft: isSmallScreen ? '10px' : isMediumScreen ? '20px' : '40px',
              borderRadius: '20px'
            }}
            onError={(e) => {
              e.target.src = defaultImageUrl
            }}
          />
        )}
        <CardContent style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1 }}>
            <Typography
              variant='body1'
              style={{ color: '#eba80a', fontSize: isSmallScreen ? '11px' : isMediumScreen ? '14px' : isLargeScreen ? '15px' : '20px' }}
            >
              {title}
            </Typography>
            {!isImageAvailable && (
              <Divider
                style={{
                  width: '100%',
                  borderBottom: '1px solid #23282f',
                  marginTop: '20px',
                  marginBottom: isSmallScreen ? '12px' : '0px'
                }}
              />
            )}
          </div>
          <Box style={{ marginTop: '10px' }}>
            <ArticleSummaryModal title={title} summary={summary} link={link} published={published} />
          </Box>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <Typography
                variant='caption'
                style={{
                  color: isImageAvailable ? '#EAF4FC' : '#EAF4FC',
                  fontStyle: 'italic',
                  fontSize: isSmallScreen ? '8px' : isMediumScreen ? '10px' : '13px'
                }}
              >
                {published}
              </Typography>
            </div>
            <div>
              <Button
                variant='outlined'
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(170, 170, 170, 0.15)'
                  }
                }}
                style={{
                  color: isImageAvailable ? '#EAF4FC' : '#EAF4FC',
                  fontSize: isSmallScreen ? '5px' : '10px',
                  borderColor: isImageAvailable ? '#EAF4FC' : '#EAF4FC',
                  marginLeft: '10px',
                  marginTop: isSmallScreen ? '5px' : isMediumScreen ? '15px' : '25px',
                  padding: isSmallScreen ? '0' : 'auto',
                  paddingTop: isSmallScreen ? '3px' : 'auto',
                  paddingBottom: isSmallScreen ? '3px' : 'auto'
                }}
                endIcon={<ArrowOutwardIcon />}
                onClick={() => handleButtonClick(link)}
              >
                Visit
                <br />
                Article
              </Button>
            </div>
          </div>
        </CardContent>
      </MyCard>
      <Divider
        sx={{
          color: '#f9f9f9',
          borderColor: '#f9f9f9',
          marginLeft: '-10%',
          marginRight: '0'
        }}
      />
    </>
  )
}

export default ArticleCards
