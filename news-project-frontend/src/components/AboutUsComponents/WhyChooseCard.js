import React from 'react'
import { Card, CardContent, Typography, Box, useTheme, useMediaQuery, Divider, Container } from '@mui/material'
import '@fontsource/league-spartan'

const SquareCard = ({ title, text }) => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Card
      style={{
        width: '100%',
        height: isSmallScreen ? '200px' : isMediumScreen ? '250px' : '300px',
        borderRadius: '16px',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Divider sx={{ width: '4%', borderBottom: '2px solid #eba80a', marginBottom: '6px', position: 'left' }} />
        <Box style={{ height: '30%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography
            variant='h6'
            align='center'
            style={{
              marginBottom: isSmallScreen ? '5px' : isMediumScreen ? '10px' : '15px',
              color: '#23282f',
              fontSize: isSmallScreen ? '15px' : isMediumScreen ? '20px' : '25px'
            }}
          >
            {title}
          </Typography>
        </Box>
        <Divider style={{ width: '100%', borderBottom: '2px solid #23282f' }} />
        <Typography
          variant='body2'
          align='center'
          style={{ color: '#23282f', margin: '25px', fontSize: isSmallScreen ? '12px' : isMediumScreen ? '15px' : '20px' }}
        >
          {' '}
          {text}{' '}
        </Typography>
      </CardContent>
    </Card>
  )
}

const WhyChooseCard = () => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Container maxWidth='xl'>
      <Box
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: isSmallScreen ? 'column' : isMediumScreen ? 'column' : 'row',
          gap: isSmallScreen ? '13px' : '32px',
          margin: '0px'
        }}
      >
        <Box style={{ flexGrow: 1 }}>
          <SquareCard
            alignItems='center'
            title='Personalized Experience'
            text='Customize your news feed to reflect your interests and preferences.'
          />
        </Box>
        <Box style={{ flexGrow: 1 }}>
          <SquareCard title='Comprehensive Coverage' text='Access a wide range of news articles from reputable sources all in one place.' />
        </Box>
        <Box style={{ flexGrow: 1 }}>
          <SquareCard title='User-Friendly Interface' text='Navigate effortlessly through our intuitive and user-friendly platform.' />
        </Box>
        <Box style={{ flexGrow: 1 }}>
          <SquareCard
            title='Stay Informed & Empowered'
            text='Be in the know about the latest developments and trends that matter to you.'
          />
        </Box>
      </Box>
    </Container>
  )
}

export default WhyChooseCard
