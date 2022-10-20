import { Box, Grid } from '@material-ui/core/'
import LoginForm from './LoginForm'
import Stone from 'assets/images/stone-bg.svg'
import styled from 'styled-components'

const Login = () => {
  const GridImage = styled(Grid)`
    ${(props) => props.theme.breakpoints.down('xs')} {
      display: none;
    }
  `
  const BoxWrapper = styled(Box)`
    background-color: white;
  `
  return (
    <BoxWrapper>
      <Grid container>
        <GridImage item xs={12} sm={7}>
          <img src={Stone} alt="Stone" />
        </GridImage>
        <Grid item xs={12} sm={5}>
          <LoginForm />
        </Grid>
      </Grid>
    </BoxWrapper>
  )
}

export default Login
