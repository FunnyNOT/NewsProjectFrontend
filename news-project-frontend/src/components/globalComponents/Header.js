import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import useScrollTrigger from '@mui/material/useScrollTrigger'
import Slide from '@mui/material/Slide'
import { Link } from 'react-router-dom'
import { useMediaQuery, useTheme } from '@mui/material'

function HideOnScroll(props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined
  })

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  )
}

const drawerWidth = 240
// const navItems = ['Home', 'About Us']
// const navItems = [
//   { label: 'Home', path: '/' },
//   { label: 'About Us', path: '/about' },
// ];

function DrawerAppBar(props) {
  const { window } = props
  const [mobileOpen, setMobileOpen] = React.useState(false)
  const theme = useTheme()
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'))

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState)
  }

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: '#23282f', height: '100%' }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={`${process.env.PUBLIC_URL}/images/logo.png`} alt='Logo' height='67px' />
      </Box>

      <Divider style={{ color: '#f9f9f9', borderColor: '#f9f9f9' }} />
      <List>
        <ListItem disablePadding>
          <Link to='/' style={{ textDecoration: 'none', width: '100%' }}>
            <ListItemButton sx={{ textAlign: 'center', color: '#fff', margin: '8px 0' }}>
              <ListItemText primary='Home' />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link to='/about' style={{ textDecoration: 'none', width: '100%' }}>
            <ListItemButton sx={{ textAlign: 'center', color: '#fff', margin: '8px 0' }}>
              <ListItemText primary='About Us' />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <Box sx={{ display: 'flex' }}>
      <React.Fragment>
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar component='nav' sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: '1px solid #fff' }}>
            <Toolbar sx={{ display: 'flex', width: '100%' }}>
              <IconButton
                color='inherit'
                aria-label='open drawer'
                edge='start'
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { sm: 'none' }, width: isSmallScreen ? '10%' : 'auto' }}
              >
                <MenuIcon />
              </IconButton>
              <Box width={isSmallScreen ? '40%' : '50%'}></Box>
              <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                <Link to='/' style={{ textDecoration: 'none' }}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/logo.png`}
                    alt='Logo'
                    height='50'
                    style={{ transform: 'translateX(-50%)', userSelect: 'none', marginTop: '8px' }}
                  />
                </Link>
              </Box>
              <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                <Link to='/' style={{ textDecoration: 'none' }}>
                  <Button sx={{ color: '#fff' }}>Home</Button>
                </Link>
                <Link to='/about' style={{ textDecoration: 'none' }}>
                  <Button sx={{ color: '#fff' }}>About Us</Button>
                </Link>
              </Box>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
      </React.Fragment>
      <nav>
        <Drawer
          container={container}
          variant='temporary'
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  )
}

export { DrawerAppBar }
