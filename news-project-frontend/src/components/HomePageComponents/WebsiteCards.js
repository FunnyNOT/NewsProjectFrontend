import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, Divider } from '@mui/material'
import { fetchData } from '../../global_functions/ApiDataDisplay'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

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
    <>
      {data &&
        data.map((item, index) => (
          <React.Fragment key={index}>
            <Card
              style={{
                display: 'flex',
                margin: '5px',
                backgroundColor: '#23282f',
                width: '100%',
                height: '220px',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              variant='outlined'
              key={item}
            >
              <CardActionArea href={item.website_link} style={{ display: 'flex', width: '90%' }}>
                <CardMedia
                  component='img'
                  image={`${process.env.PUBLIC_URL}/images/${item.website_image_name}.png`}
                  alt='green iguana'
                  style={{ width: '25%', objectFit: 'cover', borderRadius: '8px' }}
                />

                <CardContent>
                  <Typography gutterBottom variant='h5' component='div' style={{ color: '#da292f' }}>
                    {item.website_name}
                  </Typography>

                  <Typography variant='body1' color='text.secondary' style={{ color: '#f9f9f9' }}>
                    {item.website_description.substring(0, 200) + '...'}
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardContent
                style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}
              >
                <Button variant='text' style={{ color: '#f9f9f9', fontSize: '10px' }} endIcon={<ArrowOutwardIcon />}>
                  Visit
                  <br />
                  Website
                </Button>
              </CardContent>
            </Card>

            <Divider style={{ color: '#f9f9f9', borderColor: '#f9f9f9' }} />
          </React.Fragment>
        ))}
    </>
  )
}

export { WebsiteCards }
