import { createTheme } from '@material-ui/core/styles'

// DEFAULT THEME FOR ENTIRE APPLICATION
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1024,
      lg: 1280,
      xl: 1920
    }
  },
  typography: {
    fontFamily: '"Inter",  sans-serif'
  }
})

export default theme
