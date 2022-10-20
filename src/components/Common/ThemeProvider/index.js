import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

const ThemeProvider = ({ children, theme }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </MuiThemeProvider>
  )
}
export default ThemeProvider
