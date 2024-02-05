import { createTheme } from '@mui/material'
import '@fontsource/league-spartan'

const theme = createTheme({
  palette: {
    primary: {
      main: '#23282f',
      secondary: '#eba80a'
    }
  },
  typography: {
    fontFamily: 'League Spartan, sans-serif'
  }
})

export { theme }
