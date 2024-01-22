import React, { useState, useEffect } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { useNavigate } from 'react-router-dom'
import { Button, CardActionArea, Divider, styled, useMediaQuery, useTheme } from '@mui/material'
import { fetchData } from '../../global_functions/ApiDataDisplay'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

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
    flexDirection: isSmallScreen ? 'column' : 'row', // Dynamic flexDirection based on screen width
    display: 'flex',
    margin: '5px',
    backgroundColor: '#23282f',
    width: '100%',
    height: isSmallScreen ? '350px' : isMediumScreen ? '300px' : '220px',
    justifyContent: 'center',
    alignItems: 'center'
  })

  const MyCardActionArea = styled(CardActionArea)({
    display: 'flex',
    width: '85%',
    flexDirection: isSmallScreen ? 'column' : isMediumScreen ? 'row' : 'row',
    '&:hover': {
      backgroundColor: 'rgba(170, 170, 170, 0.15)' // Change to the color you want on hover
    }
  })

  function generateRandomNumber(length) {
    const min = Math.pow(10, length - 1)
    const max = Math.pow(10, length) - 1

    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  function createPseudoId(websiteId) {
    // Convert numbers to strings
    const firstNumber = generateRandomNumber(3).toString()
    const secondNumber = generateRandomNumber(3).toString()
    const websiteIdString = websiteId.toString()

    const combinedString = firstNumber + websiteIdString + secondNumber

    const combinedNumber = parseInt(combinedString, 10)

    return combinedNumber
  }

  const navigate = useNavigate()

  const handleCardClick = (websiteImageName, websiteId) => {
    const pseudoId = createPseudoId(websiteId)

    navigate(`/${websiteImageName}${pseudoId}`)
  }
  const handleButtonClick = (websiteLink) => {
    // Open the website link in a new tab
    window.open(websiteLink, '_blank')
  }

  return (
    <>
      {data &&
        data.map((item, index) => (
          <React.Fragment key={index}>
            <MyCard variant='plain' key={item}>
              <MyCardActionArea onClick={() => handleCardClick(item.website_image_name, item.website_id)}>
                {/* <Overlay className='overlay'></Overlay> */}
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
              </MyCardActionArea>
              <CardContent
                style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-end' }}
              >
                <Button
                  variant='outlined'
                  sx={{
                    '&:hover': {
                      backgroundColor: 'rgba(170, 170, 170, 0.15)'
                    }
                  }}
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
