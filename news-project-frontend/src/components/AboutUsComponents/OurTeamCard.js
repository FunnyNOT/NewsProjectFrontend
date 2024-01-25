import React from 'react'
import { Card, CardContent, Grid, Typography } from '@mui/material'

const OurTeamCard = () => {
  return (
    <Card>
      <Grid container>
        {/* Left Image (Top on Small and Medium Screens) */}
        <Grid item xs={12} md={4}>
          <img
            src={`${process.env.PUBLIC_URL}/images/our_team4.png`} // Replace with the actual path or URL of your left image
            alt='Our Team 1'
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Grid>

        {/* Centered Text (Middle on Small and Medium Screens) */}
        <Grid item xs={12} md={4} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <CardContent>
            <Typography variant='h6' align='center' style={{ color: '#23282f' }}>
              Behind the scenes is a dynamic team of individuals passionate about the transformative potential of information. From editors
              ensuring accuracy to developers shaping the technological backbone, our collective goal is to redefine how you engage with the
              news.
            </Typography>
          </CardContent>
        </Grid>

        {/* Right Image (Bottom on Small and Medium Screens) */}
        <Grid item xs={12} md={4}>
          <img
            src={`${process.env.PUBLIC_URL}/images/our_team3.png`} // Replace with the actual path or URL of your right image
            alt='Our Team 2'
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </Grid>
      </Grid>
    </Card>
  )
}

export default OurTeamCard
