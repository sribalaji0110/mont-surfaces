import {
  Box,
  Typography as _Typography,
  FormControl,
  Button as _Button,
  Link,
  Grid,
  Divider
} from '@material-ui/core'
import { useState, useEffect } from 'react'
import Logo from 'assets/images/logo.png'
import { Form as _Form, Formik } from 'formik'
import styled from 'styled-components'
import { colors } from 'services/colors'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormError, InputPassword, RevealTextField } from 'components/Common'
import { authSchema } from 'services/validation/schema'
import { useNavigate } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import { AdminActionType } from 'redux/actionType'
import { menuList, loginButtonList } from 'services/helpers/constants'
import { endPoints } from 'services/helpers/config'

const FaUserIcon = styled(FontAwesomeIcon).attrs({
  icon: faUsers
})`
  font-size: 14px;
  color: ${colors['off-black'].light};
  position: absolute;
  left: 22px;
  top: 7px;
  ${(props) => props.theme.breakpoints.up('sm')} {
    position: static;
  }
`

const Form = styled(_Form)`
  padding: 110px 10px 0px;
  max-width: 320px;
  img {
    max-width: 330px;
    padding-bottom: 42px;
  }

  ${(props) => props.theme.breakpoints.down('xs')} {
    padding: 40px 15px;
    max-width: 450px;
    margin: 0px auto;
    img {
      max-width: 245px;
      margin: 0px auto;
      display: flex;
    }
  }
  ${(props) => props.theme.breakpoints.down('sm')} {
    padding: 60px 0px 0px;
    max-width: 280px;
    img {
      max-width: 250px;
      margin: 0px auto;
      display: flex;
    }
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    max-width: 370px;
  }
`
const Typography = styled(_Typography)`
  text-align: center;
  color: ${colors.grey[100]};
  font-weight: 600;
  ${(props) => props.theme.breakpoints.down('sm')} {
    font-size: 20px;
  }
`

const LinkWrapper = styled(Box)`
  text-align: right;
  padding-top: 10px;
  a {
    color: ${colors['off-pink'].base};
  }
`

const DividerWrap = styled(_Typography)`
  color: ${colors.grey[300]};
  position: relative;
  top: -15px;
  font-size: 16px;
  background: white;
`

const PrimaryButton = styled(_Button)`
  background-color: ${colors['off-pink'].base};
  color: white;
  box-shadow: none;
  &:hover {
    background-color: ${colors['off-pink'].base};
    box-shadow: none;
  }
`

const OutlinedButton = styled(_Button)`
  border: 1px solid ${colors['off-pink'].base};
  color: ${colors['off-pink'].base};
  font-size: 14px;
  font-weight: 500;
  border-radius: 12px;
  text-transform: initial;
  ${(props) => props.theme.breakpoints.down('xs')} {
    max-width: 320px;
    display: flex;
    margin: 0px auto 20px auto;
  }
`
const BoxWrapper = styled(Box)`
  ${(props) => props.theme.breakpoints.down('xs')} {
    margin: 0px;
  }
`

const LoginForm = ({ userRoleId }) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [user, setUser] = useState('')

  const handleNavigate = (key, route) => {
    dispatch({ type: AdminActionType.userRoled, payload: key })
    navigate(route)
  }
  const handleSubmit = () => {
    const storeList = menuList.filter((ele) => ele.roleId === userRoleId && ele)[0]
    dispatch({ type: AdminActionType.sideBarMenuList, payload: storeList.route })
    dispatch({ type: AdminActionType.currentUser, payload: storeList.name })
    navigate(storeList.route[0].path)
  }
  useEffect(() => {
    if (userRoleId === 0) {
      setUser(endPoints.auth.admin)
    } else if (userRoleId === 1) {
      setUser(endPoints.auth.customer)
    } else {
      setUser(endPoints.auth.supplier)
    }
  }, [userRoleId])

  return (
    <Formik
      initialValues={{ userName: '', password: '' }}
      validationSchema={authSchema}
      onSubmit={handleSubmit}>
      {({ handleChange, values, errors, touched }) => (
        <Form>
          <Box>
            <img src={Logo} alt="Logo"></img>
          </Box>
          <Box sx={{ mb: 3 }}>
            <Typography variant="h5">Welcome {user} users!</Typography>
          </Box>
          <Box sx={{ mb: 4 }}>
            <FormControl fullWidth>
              <RevealTextField
                error={Boolean(errors.userName && touched.userName)}
                textProp
                revealed
                variant="filled"
                label="User Name"
                id="userName"
                onChange={handleChange}
                value={values.userName}
              />
              {errors.userName && touched.userName && <FormError message={errors.userName} />}
            </FormControl>
          </Box>
          <Box sx={{ mb: 3 }}>
            <FormControl fullWidth>
              <InputPassword
                error={Boolean(errors.password && touched.password)}
                fullWidth
                label="Password"
                id="password"
                onChange={handleChange}
                value={values.password}
              />
              {errors.password && touched.password && <FormError message={errors.password} />}
            </FormControl>
            <LinkWrapper>
              <Link href="">Forgot password?</Link>
            </LinkWrapper>
          </Box>
          <Box sx={{ mb: 5 }}>
            <PrimaryButton type="submit" size="medium" variant="contained" fullWidth>
              Login
            </PrimaryButton>
          </Box>
          <Box textAlign="center">
            <Divider />
            <DividerWrap variant="caption">or</DividerWrap>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Grid item container xs={12}>
              {loginButtonList.map(
                ({ name, key, route }, index) =>
                  userRoleId !== key && (
                    <Grid item xs={12} sm={6} key={index}>
                      <BoxWrapper sx={{ mr: 1 }}>
                        <OutlinedButton
                          size="medium"
                          variant="outlined"
                          fullWidth
                          startIcon={<FaUserIcon />}
                          onClick={() => {
                            handleNavigate(key, route)
                          }}>
                          {name}
                        </OutlinedButton>
                      </BoxWrapper>
                    </Grid>
                  )
              )}
            </Grid>
          </Box>
        </Form>
      )}
    </Formik>
  )
}

let mapStateToProps = (state) => {
  return { userRoleId: state.authStore.userRoleId }
}

export default connect(mapStateToProps, null)(LoginForm)
