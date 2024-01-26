import React from 'react'
import { styled, Card, CardContent, Typography, CardMedia, Box, useTheme, useMediaQuery } from '@mui/material'
import '@fontsource/league-spartan'

const HowItWorksCard = () => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))

  const MyCard = styled(Card)({
    flexDirection: isSmallScreen ? 'column' : 'row',
    display: 'flex',
    margin: '0px',
    backgroundColor: '#23282f',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'none' // Remove box shadow
  })

  const ContentContainer = styled('div')({
    display: 'flex',
    flexDirection: isSmallScreen ? 'column' : isMediumScreen ? 'column' : 'row',
    justifyContent: 'center',
    alignItems: 'center'
  })

  const TextContainer = styled('div')({
    flex: isSmallScreen ? 'none' : 1, // Take up remaining space only for larger screens
    marginLeft: isSmallScreen ? '0' : '2%', // Adjust margin for smaller screens
    marginTop: isSmallScreen ? '2%' : '0' // Adjust top margin for smaller screens
  })

  const imageUrl = `${process.env.PUBLIC_URL}/images/how_it_works.png`

  return (
    <MyCard variant='plain'>
      <ContentContainer>
        {isSmallScreen ? (
          <>
            <Box width={'90%'}>
              <CardMedia
                component='img'
                alt='Our Mission Image'
                src={imageUrl}
                style={{
                  width: '100%',
                  objectFit: 'contain',
                  borderRadius: '0%'
                }}
              />
            </Box>
            <TextContainer>
              <CardContent>
                <Typography variant='body1' color='text.secondary' style={{ color: '#f9f9f9', fontSize: '16px' }}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/logo.png`}
                    alt='Newsify Logo'
                    style={{ width: '64px', height: 'auto', marginBottom: '0px', marginRight: '3px', verticalAlign: 'middle' }}
                  />{' '}
                  aggregates news articles from a diverse range of reputable sources across the web. Our advanced algorithms analyze and
                  categorize the content, allowing you to tailor your news feed based on topics that matter most to you. Whether you're
                  interested in technology, politics, entertainment or sports, we've got you covered.
                </Typography>
              </CardContent>
            </TextContainer>
          </>
        ) : isMediumScreen ? (
          <>
            <Box width={'75%'}>
              <CardMedia
                component='img'
                alt='Our Mission Image'
                src={imageUrl}
                style={{
                  width: '100%',
                  objectFit: 'contain',
                  borderRadius: '10%'
                }}
              />
            </Box>
            <TextContainer>
              <CardContent>
                <Typography variant='body1' color='text.secondary' style={{ color: '#f9f9f9', fontSize: '20px' }}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/logo.png`}
                    alt='Newsify Logo'
                    style={{ width: '75px', height: 'auto', marginBottom: '0px', marginRight: '3px', verticalAlign: 'middle' }}
                  />{' '}
                  aggregates news articles from a diverse range of reputable sources across the web. Our advanced algorithms analyze and
                  categorize the content, allowing you to tailor your news feed based on topics that matter most to you. Whether you're
                  interested in technology, politics, entertainment or sports, we've got you covered.
                </Typography>
              </CardContent>
            </TextContainer>
          </>
        ) : (
          <>
            <TextContainer>
              <CardContent>
                <Typography variant='body1' color='text.secondary' style={{ color: '#f9f9f9', fontSize: '25px' }}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/logo.png`}
                    alt='Newsify Logo'
                    style={{ width: '120px', height: 'auto', marginBottom: '0px', marginRight: '3px', verticalAlign: 'middle' }}
                  />{' '}
                  aggregates news articles from a diverse range of reputable sources across the web. Our advanced algorithms analyze and
                  categorize the content, allowing you to tailor your news feed based on topics that matter most to you. Whether you're
                  interested in technology, politics, entertainment or sports, we've got you covered.
                </Typography>
              </CardContent>
            </TextContainer>
            <Box width={'40%'}>
              <CardMedia
                component='img'
                alt='Our Mission Image'
                src={imageUrl}
                style={{
                  width: '100%',
                  objectFit: 'contain',
                  borderRadius: '10%'
                }}
              />
            </Box>
          </>
        )}
      </ContentContainer>
    </MyCard>
  )
}

export default HowItWorksCard
