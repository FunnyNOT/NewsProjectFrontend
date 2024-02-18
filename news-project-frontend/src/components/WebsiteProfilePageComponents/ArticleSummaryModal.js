import * as React from 'react'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Divider } from '@mui/material'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'
import CloseIcon from '@mui/icons-material/Close'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  display: 'flex', // Add this line
  flexDirection: 'column', // Add this line
  paddingTop: '10px'
}

const scrollableStyle = {
  overflowY: 'auto',
  maxHeight: '250px',
  paddingRight: '5px'
}

export default function ArticleSummaryModal({ title, summary, link, published }) {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))
  const isMediumScreen = useMediaQuery(theme.breakpoints.down('md'))
  const isLargeScreen = useMediaQuery(theme.breakpoints.down('lg'))

  const handleButtonClick = (websiteLink) => {
    window.open(websiteLink, '_blank')
  }

  return (
    <div>
      <Button
        onClick={handleOpen}
        style={{
          color: '#eba80a',
          borderColor: '#eba80a',
          fontSize: isSmallScreen ? '8px' : isMediumScreen ? '8px' : isLargeScreen ? '8px' : '11px'
        }}
        variant='outlined'
      >
        Summary
      </Button>
      <Modal open={open} onClose={handleClose} aria-labelledby='modal-modal-title' aria-describedby='modal-modal-description'>
        <Box sx={style}>
          <Button style={{ marginLeft: 'auto' }} onClick={handleClose}>
            <CloseIcon />
          </Button>
          <Typography
            id='modal-modal-title'
            variant='body1'
            style={{ color: '#eba80a', fontSize: isSmallScreen ? '15px' : isMediumScreen ? '18px' : isLargeScreen ? '22px' : '28px' }}
          >
            {title}
          </Typography>
          <Divider style={{ width: '100%', borderBottom: '1px solid #23282f', marginBottom: '15px', marginTop: '15px' }} />
          <Typography
            id='modal-modal-description'
            variant='caption'
            style={{
              color: '#23282f',
              width: '100%',
              fontSize: isSmallScreen ? '13px' : isMediumScreen ? '18px' : '22px',
              ...scrollableStyle
            }}
          >
            {summary}
          </Typography>
          <div style={{ marginTop: '30px' }}>
            <Typography
              variant='caption'
              style={{
                color: '#23282f',
                fontStyle: 'italic',
                fontSize: isSmallScreen ? '13px' : isMediumScreen ? '16px' : '18px'
              }}
            >
              {published}
            </Typography>
          </div>
          <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
            <Button
              variant='outlined'
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(170, 170, 170, 0.15)'
                }
              }}
              style={{
                color: '#23282f',
                fontSize: isSmallScreen ? '10px' : '15px',
                borderColor: '#23282f',
                marginLeft: '10px',
                marginTop: isSmallScreen ? '10px' : isMediumScreen ? '25px' : '35px',
                padding: isSmallScreen ? '3px' : 'auto',
                paddingLeft: isSmallScreen ? '4px' : 'auto',
                paddingRight: isSmallScreen ? '3px' : 'auto',
                paddingTop: isSmallScreen ? '3px' : 'auto',
                paddingBottom: isSmallScreen ? '3px' : 'auto'
              }}
              endIcon={<ArrowOutwardIcon />}
              onClick={() => handleButtonClick(link)}
            >
              Visit
              <br />
              Article
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  )
}
