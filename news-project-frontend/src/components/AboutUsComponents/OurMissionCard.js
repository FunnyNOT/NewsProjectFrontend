import React from 'react'
import { styled, Card, CardContent, Typography, CardMedia, Box, useTheme, useMediaQuery, Divider, Avatar } from '@mui/material'
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
        {!isSmallScreen && (
          <Box style={{ width: isSmallScreen ? '90%' : isMediumScreen ? '75%' : '40%', height: 'auto' }}>
            <Divider sx={{ width: '4%', borderBottom: '5px solid #eba80a', marginBottom: '6px' }} />
            <Typography
              variant='h4'
              align='left'
              sx={{ marginBottom: '20px', fontWeight: 'bold', fontSize: isSmallScreen ? '30px' : isMediumScreen ? '38px' : '45px' }}
            >
              Our Mission
            </Typography>
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
        )}
        {isSmallScreen && (
          <Box style={{ width: isSmallScreen ? '110%' : '100%', height: 'auto' }}>
            <Box
              display='flex'
              alignItems='center'
              justifyContent='center'
              flexDirection='column'
              height={200} // Adjust the height of the container as needed
            >
              {/* Horizontal line */}
              <Box width='100%' borderBottom='1px solid #fff' position='relative' display='flex' justifyContent='center'>
                {/* Circular image */}
                <Avatar
                  src={imageUrl} // Replace with your image source
                  alt='Circular Image'
                  sx={{
                    width: 'auto',
                    maxWidth: '40%',
                    height: '130px',
                    maxHeight: '130px',
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    backgroundColor: 'white', // Set background color to match your container
                    borderRadius: '50%'
                  }}
                />
              </Box>
            </Box>
            <Box style={{ width: isSmallScreen ? '90%' : '100%', height: 'auto', marginLeft: '20px' }}>
              <Divider sx={{ width: '8%', borderBottom: '5px solid #eba80a', marginTop: '22px' }} />
              <Typography
                variant='h4'
                align='left'
                sx={{ marginBottom: '5px', fontWeight: 'bold', fontSize: isSmallScreen ? '30px' : isMediumScreen ? '38px' : '45px' }}
              >
                Our Mission
              </Typography>
            </Box>
          </Box>
        )}
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
                alt='NewsPort Logo'
                style={{
                  width: isSmallScreen ? '70px' : isMediumScreen ? '75px' : '120px',
                  height: 'auto',
                  marginBottom: '0px',
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
