import CssBaseline from '@material-ui/core/CssBaseline'
import { StylesProvider as MuiStylesProvider } from '@material-ui/core/styles'
import { createGlobalStyle } from 'styled-components'
import ThemeProvider from '../ThemeProvider'
import theme from 'services/theme'
import 'assets/style.css'

const GlobalStyle = createGlobalStyle`
html, 
body {
  margin: 0; 
  height: 100%;
  font-family: 'Inter';
}
#root {
  display: flex;
  flex-direction: column;
  height: 100%;
}
img {
  width:100%;
}
`

const StyleProvider = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <MuiStylesProvider injectFirst>
        <ThemeProvider theme={theme}>
          {children}
          <CssBaseline />
        </ThemeProvider>
      </MuiStylesProvider>
    </>
  )
}

export default StyleProvider
