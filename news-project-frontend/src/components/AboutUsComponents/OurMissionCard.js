import React from 'react'
import { styled, Card, CardContent, Typography, CardMedia, Box, useTheme, useMediaQuery } from '@mui/material'
import '@fontsource/league-spartan'

const OurMissionCard = () => {
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
    flex: 1, // Take up remaining space
    marginLeft: isSmallScreen ? '0' : '2%'
  })

  const imageUrl = `${process.env.PUBLIC_URL}/images/our_mission.png`

  return (
    <MyCard variant='plain'>
      <ContentContainer>
        <Box style={{ width: isSmallScreen ? '90%' : isMediumScreen ? '75%' : '40%', height: 'auto' }}>
          <CardMedia
            component='img'
            alt='Our Mission Image'
            src={imageUrl}
            style={{
              width: '100%',
              height: 'auto',
              objectFit: 'scale-down',
              borderRadius: '0px'
            }}
          />
        </Box>

        <TextContainer>
          <CardContent>
            <Typography
              variant='body1'
              color='text.secondary'
              style={{ color: '#f9f9f9', fontSize: isSmallScreen ? '16px' : isMediumScreen ? '20px' : '25px' }}
            >
              Our mission is to empower you with the latest and most relevant news from various sources, all in one place. We understand
              that everyone has unique interests and preferences when it comes to staying informed, and that is why we have designed{' '}
              <img
                src={`${process.env.PUBLIC_URL}/images/logo.png`}
                alt='Newsify Logo'
                style={{
                  width: isSmallScreen ? '58px' : isMediumScreen ? '68px' : '80px',
                  height: 'auto',
                  marginBottom: '5px',
                  marginRight: '3px',
                  verticalAlign: 'middle'
                }}
              />
              to be customizable and user-friendly.
            </Typography>
          </CardContent>
        </TextContainer>
      </ContentContainer>
    </MyCard>
  )
}

export default OurMissionCard
