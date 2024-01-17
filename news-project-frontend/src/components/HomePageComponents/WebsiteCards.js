import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'
import { Button, CardActionArea, Divider, styled, useMediaQuery, useTheme } from '@mui/material'
import { fetchData } from '../../global_functions/ApiDataDisplay'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import { useWebsiteContext } from '../../global_functions/WebsiteContext'

export default function WebsiteCards() {
  const [data, setData] = useState(null)
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData()
      setData(result)
    }

    getData()
  }, [])


  const MyCard = styled(Card)({
    '&:hover .overlay': {
      backgroundColor: 'rgba(170, 170, 170, 0.1)'
    },
    flexDirection: isSmallScreen ? 'column' : 'row', // Dynamic flexDirection based on screen width
    display: 'flex',
    margin: '5px',
    backgroundColor: '#23282f',
    width: '100%',
    height: isSmallScreen ? '350px' : isMediumScreen ? '300px' : '220px',
    justifyContent: 'center',
    alignItems: 'center'
  })

  const Overlay = styled('div')({
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'transparent',
    transition: 'background-color 0.3s'
  })

  const navigate = useNavigate()
  const { setWebsiteIdValue } = useWebsiteContext();


  const handleCardClick = (websiteImageName,websiteId) => {

    setWebsiteIdValue(websiteId);

    navigate(`/${websiteImageName}`)
  }
  const handleButtonClick = (websiteLink) => {
    // Open the website link in a new tab
    window.open(websiteLink, '_blank');
  };

  return (
    <>
      {data &&
        data.map((item, index) => (
          <React.Fragment key={index}>
            <MyCard variant='plain' key={item}>
              <CardActionArea
                onClick={() => handleCardClick(item.website_image_name, item.website_id)}
                style={{ display: 'flex', width: '85%', flexDirection: isSmallScreen ? 'column' : isMediumScreen ? 'row' : 'row' }}
              >
                <Overlay className='overlay'></Overlay>
                <CardMedia
                  component='img'
                  image={`${process.env.PUBLIC_URL}/images/${item.website_image_name}.png`}
                  alt='green iguana'
                  style={{ width: isSmallScreen ? '100%' : isMediumScreen ? '45%' : '25%', objectFit: 'cover', borderRadius: '10px' }}
                />

                <CardContent>
                  <Typography
                    gutterBottom
                    variant='h5'
                    component='div'
                    style={{ color: '#da292f', fontSize: isSmallScreen ? '14px' : isMediumScreen ? '18px' : '25px' }}
                  >
                    {item.website_name}
                  </Typography>

                  <Typography
                    variant='body1'
                    color='text.secondary'
                    style={{ color: '#f9f9f9', fontSize: isSmallScreen ? '11px' : isMediumScreen ? '14px' : '18px' }}
                  >
                    {item.website_description.substring(0, isSmallScreen ? '120' : '200') + '...'}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardContent
                style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}
              >
                <Button
                  variant='outlined'
                  style={{ color: '#f9f9f9', fontSize: isSmallScreen ? '6px' : '10px', borderColor: '#f9f9f9' }}
                  endIcon={<ArrowOutwardIcon />}
                  onClick={() => handleButtonClick(item.website_link)}
                >
                  Visit
                  <br />
                  Website
                </Button>
              </CardContent>
            </MyCard>

            <Divider style={{ color: '#f9f9f9', borderColor: '#f9f9f9' }} />
            <br />
          </React.Fragment>
        ))}
    </>
  )
}
