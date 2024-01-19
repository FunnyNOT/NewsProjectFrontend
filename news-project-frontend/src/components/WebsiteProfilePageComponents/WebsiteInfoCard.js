import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Button, styled } from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

const WebsiteInfoCard = ({ websiteName, websiteDescription, imageUrl, websiteLink }) => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleButtonClick = (websiteLink) => {
    // Open the website link in a new tab
    window.open(websiteLink, '_blank')
  }

  const MyCard = styled(Card)({
    flexDirection: isSmallScreen ? 'column' : isMediumScreen ? 'column' : 'row', // Dynamic flexDirection based on screen width
    display: 'flex',
    margin: '5px',
    backgroundColor: '#23282f',
    width: '100%',
    height: isSmallScreen ? '550px' : isMediumScreen ? '500px' : '400px',
    justifyContent: 'center',
    alignItems: 'center'
  })

  return (
    <MyCard variant='plain'>
      <CardMedia
        component='img'
        alt='Website Image'
        src={imageUrl}
        style={{
          width: isSmallScreen ? '75%' : isMediumScreen ? '50%' : '25%',
          objectFit: 'contain',
          borderRadius: '25px',
          marginLeft: isSmallScreen ? '0%' : isMediumScreen ? '0%' : '5%',
          height: isSmallScreen ? '25%' : isMediumScreen ? '25%' : '55%'
        }}
      />

      <CardContent style={{ width: isSmallScreen ? '80%' : isMediumScreen ? '65%' : '50%', marginLeft: '2%' }}>
        <Typography
          gutterBottom
          variant='h5'
          component='div'
          style={{ color: '#da292f', fontSize: isSmallScreen ? '14px' : isMediumScreen ? '18px' : '25px', textAlign: 'center' }}
        >
          {websiteName}
        </Typography>

        <Typography
          variant='body1'
          color='text.secondary'
          style={{ color: '#f9f9f9', fontSize: isSmallScreen ? '11px' : isMediumScreen ? '13px' : '17px' }}
        >
          {websiteDescription}
        </Typography>
      </CardContent>
      <CardContent style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
        <Button
          variant='outlined'
          sx={{
            '&:hover': {
              backgroundColor: 'rgba(170, 170, 170, 0.15)'
            }
          }}
          style={{ color: '#f9f9f9', fontSize: isSmallScreen ? '6px' : '10px', borderColor: '#f9f9f9' }}
          endIcon={<ArrowOutwardIcon />}
          onClick={() => handleButtonClick(websiteLink)}
        >
          Visit
          <br />
          Website
        </Button>
      </CardContent>
    </MyCard>
  )
}

export default WebsiteInfoCard
