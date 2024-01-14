import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Button, CardActionArea, Divider, styled, useMediaQuery, useTheme  } from '@mui/material'
import { fetchData } from '../../global_functions/ApiDataDisplay'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

export default function WebsiteCards() {
  const [data, setData] = useState(null);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData()
      setData(result)
    }

    getData()
  }, [])

const MyCard = styled(Card)({
  '&:hover .overlay': {
    backgroundColor: 'rgba(170, 170, 170, 0.1)',
  },
  flexDirection: isSmallScreen ? 'column' : 'row', // Dynamic flexDirection based on screen width
  display: 'flex',
  margin: '5px',
  backgroundColor: '#23282f',
  width: '100%',
  height: isSmallScreen ? '350px' : '220px',
  justifyContent: 'center',
  alignItems: 'center',
});

const Overlay = styled('div')({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  background:'transparent',
  transition: 'background-color 0.3s',
});  

  return (
    <>
      {data &&
        data.map((item, index) => (
          <React.Fragment key={index}>
            <MyCard
              variant='plain'
              key={item}
            >
              <CardActionArea href={item.website_link} style={{ display: 'flex', width: '85%', flexDirection: isSmallScreen ? 'column' : isMediumScreen? 'row' : 'row', }}  >
                <Overlay className="overlay"></Overlay>
                <CardMedia
                  component='img'
                  image={`${process.env.PUBLIC_URL}/images/${item.website_image_name}.png`}
                  alt='green iguana'
                  style={{ width: isSmallScreen ? '80%' : isMediumScreen ? '25%' : '25%', objectFit: 'cover', borderRadius: '8px' }}
                />

                <CardContent>
                  <Typography gutterBottom variant='h5' component='div' style={{ color: '#da292f' , fontSize: isSmallScreen ? '14px' : isMediumScreen ? '18px' : '25px' }}>
                    {item.website_name}
                  </Typography>

                  <Typography variant='body1' color='text.secondary' style={{ color: '#f9f9f9' , fontSize: isSmallScreen ? '11px' : isMediumScreen ? '14px' : '18px' }} >
                    {item.website_description.substring(0, isSmallScreen ? '120' : '200') + '...'}
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardContent
                style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}
              >
                <Button variant='text' style={{ color: '#f9f9f9', fontSize: isSmallScreen ? '6px' : '10px' }} endIcon={<ArrowOutwardIcon />} >
                  Visit
                  <br />
                  Website
                </Button>
              </CardContent>
            </MyCard>

            <Divider style={{ color: '#f9f9f9', borderColor: '#f9f9f9' }} />
          </React.Fragment>
        ))}
    </>
  )
}

export { WebsiteCards }
