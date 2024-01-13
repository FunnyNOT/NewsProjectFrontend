import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'

import { fetchData } from '../../global_functions/ApiDataDisplay'

export default function WebsiteCards() {
  const [data, setData] = useState(null)

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData()
      setData(result)
    }

    getData()
  }, [])
  return (
    <Grid container spacing={3}>
      {data &&
        data.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea href={item.website_link}>
                <CardMedia
                  component='img'
                  height='140'
                  image={`${process.env.PUBLIC_URL}/images/defaultNewsImage.png`}
                  alt='green iguana'
                />
                <CardContent>
                  <Typography gutterBottom variant='h5' component='div'>
                    {item.website_name}
                  </Typography>
                  <Typography variant='body2' color='text.secondary'>
                    {item.website_description.substring(0, 100) + '...'}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
    </Grid>
  )
}

export { WebsiteCards }
