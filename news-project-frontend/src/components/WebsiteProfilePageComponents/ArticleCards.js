import React from 'react'
import { Typography, Grid, Card, CardMedia, CardContent, styled } from '@mui/material'

const MyCard = styled(Card)({
  '&:hover .overlay': {
    backgroundColor: 'rgba(170, 170, 170, 0.1)'
  },
  flexDirection: 'column',
  display: 'flex',
  margin: '5px',
  backgroundColor: '#23282f',
  width: '100%',
  maxWidth: '350px',
  height: 'auto',
  // maxHeight: '550px',
  flexWrap: 'wrap'
})

const ArticleCards = ({ data }) => {
  return (
    <Grid container spacing={2}>
      {data &&
        data.articles.map((article, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={4}>
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

  return (
    <MyCard variant='outlined'>
      {isImageAvailable && (
        <CardMedia
          component='img'
          alt={title}
          image={image}
          sx={{ height: 140 }}
          title='oops'
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      )}
      {/* <img src={image} alt={title} style={{ maxWidth: '100%', height: 'auto' }} /> */}
      <CardContent>
        <Typography variant='body1' style={{ color: '#da292f' }}>
          {title}
        </Typography>
        <Typography variant='caption' style={{ color: '#EAF4FC' }}>
          {summary}
        </Typography>
        <a href={link} target='_blank' rel='noopener noreferrer' variant='caption'>
          Read more
        </a>
        <br></br>
        <Typography variant='caption' style={{ color: '#EAF4FC' }}>
          {published}
        </Typography>
        {/* Add more elements for other properties */}
      </CardContent>
    </MyCard>
  )
}

export default ArticleCards
