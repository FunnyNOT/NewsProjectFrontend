import React from 'react'
import { Typography, Grid, Card, CardMedia, CardContent, styled } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

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
    flexDirection: isSmallScreen ? 'column' : isMediumScreen ? 'column' : 'row',
    display: 'flex',
    marginLeft: isSmallScreen ? '0%' : isMediumScreen ? '5%' : '10%',
    marginRight: isSmallScreen ? '0%' : isMediumScreen ? '5%' : '10%',
    backgroundColor: '#23282f',
    width: isSmallScreen ? '100%' : isMediumScreen ? '90%' : '80%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  })

  return (
    <MyCard variant='plain' sx={{ marginBottom: '10px' }}>
      {isImageAvailable ? (
        <CardMedia
          component='img'
          alt={title}
          image={image}
          sx={{ height: 'auto' }}
          title='oops'
          style={{
            width: isSmallScreen ? '70%' : isMediumScreen ? '45%' : '25%',
            objectFit: 'cover',
            borderRadius: '10px',
            marginLeft: '-10%',
            height: isSmallScreen ? '25%' : isMediumScreen ? '35%' : '80%'
          }}
        />
      ) : (
        <CardMedia
          component='img'
          alt={title}
          image={defaultImageUrl}
          sx={{ border: '1px solid #f9f9f9' }}
          title='Default Image'
          style={{
            width: isSmallScreen ? '40%' : isMediumScreen ? '35%' : '25%',
            objectFit: 'scale-down',
            borderRadius: '10px',
            marginLeft: '-10%',
            height: isSmallScreen ? '25%' : isMediumScreen ? '35%' : '70%'
          }}
        />
      )}
      <CardContent style={{ width: isSmallScreen ? '90%' : isMediumScreen ? '80%' : '65%' }}>
        <Typography variant='body1' style={{ color: '#da292f' }}>
          {title}
        </Typography>
        <Typography variant='caption' style={{ color: '#EAF4FC', width: isSmallScreen ? '95%' : isMediumScreen ? '85%' : '75%' }}>
          {summary}
        </Typography>
        <a href={link} target='_blank' rel='noopener noreferrer' variant='caption'>
          Read more
        </a>
        <br></br>
        <Typography variant='caption' style={{ color: '#EAF4FC', fontStyle: 'italic' }}>
          {published}
        </Typography>
      </CardContent>
    </MyCard>
  )
}

export default ArticleCards
