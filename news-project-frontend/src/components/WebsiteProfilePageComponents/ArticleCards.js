import React from 'react'
import { Typography, Grid, Card, CardMedia, CardContent, styled, Button, Divider, Box } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

const ArticleCards = ({ data }) => {
  return (
    <Grid container spacing={2}>
      {data &&
        data.articles.map((article, index) => (
          <Grid item key={index} xs={12} sm={12} md={12} lg={12}>
            <div>
              <ArticleCard
                title={article.title}
                summary={article.summary}
                link={article.link}
                published={article.published}
                image={article.image}
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

  const MyCard = styled(Card)({
    // flexDirection: isSmallScreen ? 'column' : isMediumScreen ? 'column' : 'row',
    flexDirection: 'row',
    display: 'flex',
    marginLeft: isSmallScreen ? '2%' : isMediumScreen ? '5%' : '10%',
    marginRight: isSmallScreen ? '0%' : isMediumScreen ? '5%' : '10%',
    backgroundColor: isImageAvailable ? '#23282f': '#EAF4FC',
    width: isSmallScreen ? '95%' : isMediumScreen ? '90%' : '80%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    variant: isSmallScreen ? 'outlined' : isMediumScreen ? 'outlined' : 'plain'
  })

  const handleButtonClick = (websiteLink) => {
    window.open(websiteLink, '_blank')
  }

  return (
    <>
      <MyCard
        variant={isSmallScreen ? 'outlined' : isMediumScreen ? 'outlined' : 'plain'}
        style={{ borderColor: '#f9f9f9', borderRadius: '10px', marginBottom: isSmallScreen ? '0px' : isMediumScreen ? '0px' : '10px'}}
      >
        {
          isImageAvailable && (
            <CardMedia
              component='img'
              alt={title}
              image={image}
              sx={{ height: 'auto' }}
              title='oops'
              style={{
                width: '30%',
                objectFit: 'cover',
                height: isSmallScreen ? '100%' : isMediumScreen ? '50%' : '25%',
                marginLeft: isSmallScreen ? '10px' : isMediumScreen ? '20px' : '50px'
              }}
              onError={(e) => {
                e.target.src = defaultImageUrl;
              }}
            />
          )          
        }
        <CardContent style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
          <div style={{ flex: 1 }}>
            <Typography variant='body1' style={{ color: '#da292f', fontSize: isSmallScreen ? '11px' : isMediumScreen ? '16px' : '25px' }}>
              {title}
            </Typography>
            {!isImageAvailable &&(
              <Divider style={{ width: '100%', borderBottom: '1px solid #23282f', marginTop:'10px' }} />
            )}
            <Box style={{ marginTop:isImageAvailable ? 'auto': '15px'}}>
            <Typography
              variant='caption'
              style={{ color: isImageAvailable ? '#EAF4FC': '#23282f', width: '100%', fontSize: isSmallScreen ? '9px' : isMediumScreen ? '12px' : '18px' }}
            >
              {summary}
            </Typography>
            {!isImageAvailable &&(
              <Divider style={{ width: '100%', borderBottom: '1px solid #23282f', marginTop:'20px' }} />
            )}
            </Box>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <div>
              <Typography
                variant='caption'
                style={{ color: isImageAvailable ? '#EAF4FC': '#23282f', fontStyle: 'italic', fontSize: isSmallScreen ? '9px' : isMediumScreen ? '12px' : '18px' }}
              >
                {published}
              </Typography>
            </div>
            {/* {!isSmallScreen && ( */}
            <div>
              <Button
                variant='outlined'
                sx={{
                  '&:hover': {
                    backgroundColor: 'rgba(170, 170, 170, 0.15)'
                  }
                }}
                style={{
                  color: isImageAvailable ? '#EAF4FC': '#23282f',
                  fontSize: isSmallScreen ? '6px' : '12px',
                  borderColor: isImageAvailable ? '#EAF4FC': '#23282f',
                  marginLeft: 'auto',
                  marginTop: isSmallScreen ? '10px' : isMediumScreen ? '25px' : '35px',
                  padding: isSmallScreen ? '0' : 'auto',
                  paddingTop: isSmallScreen ? '5px' : 'auto',
                  paddingBottom: isSmallScreen ? '5px' : 'auto'
                }}
                endIcon={<ArrowOutwardIcon />}
                onClick={() => handleButtonClick(link)}
              >
                Visit
                <br />
                Article
              </Button>
            </div>
            {/* )} */}
          </div>
        </CardContent>
      </MyCard>
      <Divider
        sx={{
          color: '#f9f9f9',
          borderColor: '#f9f9f9',
          marginLeft: '5%',
          marginRight: '5%'
        }}
      />
    </>
  )
}

export default ArticleCards
