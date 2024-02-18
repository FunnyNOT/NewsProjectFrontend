import React from 'react'
import { styled, Card, CardContent, Typography, useTheme, useMediaQuery } from '@mui/material'
import '@fontsource/league-spartan'

const AboutUsCard = () => {
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))

  const MyCard = styled(Card)({
    flexDirection: isSmallScreen ? 'column' : 'row',
    display: 'flex',
    margin: '0px',
    backgroundColor: '#23282f',
    width: '100%',
    height: isSmallScreen ? '450px' : isMediumScreen ? '400px' : '350px',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: 'none' // Remove box shadow
  })

  return (
    <MyCard>
      <CardContent>
        <Typography
          variant='h4'
          align='center'
          style={{ fontSize: isSmallScreen ? '30px' : isMediumScreen ? '38px' : '45px', marginBottom: '20px' }}
        >
          About Us
        </Typography>
        <Typography
          variant='body1'
          align='center'
          style={{ fontSize: isSmallScreen ? '14px' : isMediumScreen ? '19px' : '25px', fontWeight: '100' }}
        >
          Welcome to{' '}
          <img
            src={`${process.env.PUBLIC_URL}/images/logo.png`}
            alt='Newsify'
            style={{
              width: isSmallScreen ? '64px' : isMediumScreen ? '75px' : '120px',
              height: 'auto',
              marginBottom: '0px',
              verticalAlign: 'middle'
            }}
          />
          , your go-to destination for curated news and information.
          <br />
          Where the world's new converge to meet your preferances and priorities.
          <br />
          We go beyond the conventional news aggregation model, offering you a unique and personalized
          <br />
          news experience, tailored to your individual interests.
        </Typography>
      </CardContent>
    </MyCard>
  )
}

export default AboutUsCard
