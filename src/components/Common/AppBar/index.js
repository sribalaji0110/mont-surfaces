import {
  AppBar as _AppBar,
  IconButton,
  Toolbar,
  Box,
  Grid,
  Typography,
  TextField as _TextField
} from '@material-ui/core'
import {
  faMessage,
  faCartShopping,
  faArrowRightFromBracket
} from '@fortawesome/free-solid-svg-icons'
import StoneLogo from 'assets/images/stone.png'
import MenuIcon from '@material-ui/icons/Menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import { logout } from 'services/utilities'
import { connect } from 'react-redux'

const IconButtonMenu = styled(IconButton)`
  ${(props) => props.theme.breakpoints.up('sm')} {
    display: none;
  }
`

const TextField = styled(_TextField)`
  ${(props) => props.theme.breakpoints.down('sm')} {
    display: none;
  }
`

const AppBar = styled(_AppBar)`
  box-shadow: none;
  ${(props) => `background: ${props.primary};`}
`

const GridWrapper = styled(Grid)`
  img {
    width: 238px;
    object-fit: contain;
    padding-top: 5px;
  }
  .MuiTypography-h4 {
    text-align: center;
  }
  .MuiTypography-h5 {
    text-align: right;
  }
  ${(props) => props.theme.breakpoints.down('sm')} {
    img {
      display: none;
    }
  }
`

const IconGridWrapper = styled(Grid)`
  ${(props) => props.theme.breakpoints.down('sm')} {
    display: none;
  }
`

const AppBarComp = ({ mobileOpen, setMobileOpen = () => {}, colorPalette }) => {
  return (
    <AppBar position="fixed" primary={colorPalette.primary}>
      <Toolbar>
        <IconButtonMenu
          aria-label="open drawer"
          edge="start"
          onClick={() => {
            setMobileOpen(!mobileOpen)
          }}>
          <MenuIcon />
        </IconButtonMenu>
        <GridWrapper item container xs={12}>
          <Grid item xs={3}>
            <img src={StoneLogo} alt="StoneLogo" />
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h4">
              <Box>
                <TextField id="outlined-search" type="search" placeholder="search" />
              </Box>
            </Typography>
          </Grid>
          <IconGridWrapper item xs={3}>
            <Typography variant="h5">
              <Box>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  color="inherit">
                  <FontAwesomeIcon icon={faMessage} />
                </IconButton>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true">
                  <FontAwesomeIcon icon={faCartShopping} />
                </IconButton>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={logout}>
                  <FontAwesomeIcon icon={faArrowRightFromBracket} />
                </IconButton>
              </Box>
            </Typography>
          </IconGridWrapper>
        </GridWrapper>
      </Toolbar>
    </AppBar>
  )
}

let mapStateToProps = (state) => {
  return { colorPalette: state.authStore.colorPalette }
}

export default connect(mapStateToProps, null)(AppBarComp)
