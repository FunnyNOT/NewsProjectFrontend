import React from 'react'
import { Paper } from '@mui/material'

const styles = {
  profileBanner: {
    width: '100%',
    borderRadius: 15, // You can adjust the border radius as needed
    overflow: 'hidden',
    height: 550 // Set the desired height
  }
}

const ProfileBanner = ({ imageLink }) => {
  const bannerStyle = {
    ...styles.profileBanner,
    backgroundImage: `url(${imageLink})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
    <Paper style={bannerStyle} elevation={3}>
      {/* Add other content or styling as needed */}
    </Paper>
  )
}

export default ProfileBanner
