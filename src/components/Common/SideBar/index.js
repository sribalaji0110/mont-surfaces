import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import StoneLogo from 'assets/images/stone.png'
import {
  CssBaseline,
  Drawer as _Drawer,
  Hidden,
  List,
  ListItem as _ListItem,
  ListItemIcon,
  ListItemText,
  Box,
  Grid,
  Collapse,
  useMediaQuery
} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons'
import styled, { css } from 'styled-components'
import { drawerWidth } from 'services/helpers/constants'
import AppBarComp from '../AppBar'
import { connect } from 'react-redux'

const AppBarMobile = styled(Grid)`
  img {
    width: 240px;
    object-fit: contain;
    padding: 0px 0 24px 30px;
  }
`

const Drawer = styled(_Drawer)`
  .MuiDrawer-paper {
    border-right: none;
    top: 66px;
    width: ${drawerWidth}px;
  }
  ${(props) => props.theme.breakpoints.down('sm')} {
    .MuiDrawer-paper {
      top: 0px;
    }
  }
`

const ListItem = styled(_ListItem)`
  border-left: 6px solid transparent;
  ${({ $active }) =>
    $active &&
    css`
      background: #ddd;
      border-left: 6px solid;
      &:hover {
        background: #ddd;
      }
    `}
`

const CollapseListItem = styled(_ListItem)`
  padding: 0px 0px 0 75px;
  .MuiTypography-body1 {
    font-size: 14px;
  }
`

const Sidebar = ({ sideBarList }) => {
  const theme = useTheme()
  const location = useLocation()
  const { pathname } = location
  const [mobileOpen, setMobileOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState('')
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const navigate = useNavigate()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen)
  }

  const handleRoute = (path) => {
    navigate(path)
  }

  const handleClick = (index) => {
    if (selectedIndex !== index) {
      setSelectedIndex(index)
    } else {
      setSelectedIndex('')
    }
  }

  const drawer = (
    <List>
      {isMobile && (
        <AppBarMobile container xs={12}>
          <Grid item xs={4}>
            <img src={StoneLogo} alt="StoneLogo" />
          </Grid>
        </AppBarMobile>
      )}
      {sideBarList.map(({ label, path, isDropDown, subMenu }, index) => {
        return (
          <>
            {isDropDown ? (
              <>
                <ListItem button onClick={() => handleClick(index)}>
                  <ListItemIcon>
                    <FontAwesomeIcon icon={faStarRegular} />
                  </ListItemIcon>
                  <ListItemText primary={label} />
                  <FontAwesomeIcon
                    icon={index === selectedIndex ? faChevronLeft : faChevronRight}
                  />
                </ListItem>
                <Collapse in={index === selectedIndex} timeout="auto" unmountOnExit>
                  <List component="div">
                    {subMenu.map(({ title, to }, index) => (
                      <CollapseListItem
                        key={index}
                        button
                        onClick={() => {
                          handleRoute(to)
                        }}>
                        <ListItemText primary={title} />
                      </CollapseListItem>
                    ))}
                  </List>
                </Collapse>
              </>
            ) : (
              <>
                <ListItem
                  button
                  onClick={() => {
                    setSelectedIndex('')
                    navigate(path)
                  }}
                  $active={pathname && pathname.includes(path)}>
                  <ListItemIcon>
                    <FontAwesomeIcon
                      icon={pathname && pathname.includes(path) ? faStar : faStarRegular}
                    />
                  </ListItemIcon>
                  <ListItemText primary={label} />
                </ListItem>
              </>
            )}
          </>
        )
      })}
    </List>
  )

  return (
    <>
      <CssBaseline />
      <AppBarComp mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
      <Box component="nav" aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true
            }}>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer variant="permanent" open>
            {drawer}
          </Drawer>
        </Hidden>
      </Box>
    </>
  )
}

let mapStateToProps = (state) => {
  return { sideBarList: state.authStore.sideBarList }
}

export default connect(mapStateToProps, null)(Sidebar)
