import { useState, useEffect } from 'react'
import MainLayout from 'layouts/MainLayout'
import { endPoints } from 'services/helpers/config'
import { connect } from 'react-redux'
import { Routes as Switch, Route, useNavigate } from 'react-router-dom'
import { NotificationContainer } from 'react-notifications'
import { loginFlowRoutes, adminFlowRoutes, customerFlowRoutes, supplierFlowRoutes } from './routes'

const Routes = ({ authStore }) => {
  const { userRoleId, currentUser } = authStore
  const navigate = useNavigate()
  const { login } = endPoints.auth
  const [routeState, setRouteState] = useState(loginFlowRoutes)

  useEffect(() => {
    if (userRoleId === 0 && currentUser === null) {
      navigate('/admin/login')
    } else if (currentUser === endPoints.auth.admin) {
      setRouteState(adminFlowRoutes)
    } else if (currentUser === endPoints.auth.customer) {
      setRouteState(customerFlowRoutes)
    } else if (currentUser === endPoints.auth.supplier) {
      setRouteState(supplierFlowRoutes)
    }
  }, [currentUser, userRoleId])

  return (
    <>
      <Switch>
        {routeState.map(({ path, PageComponent, layout }, index) => {
          return (
            <Route
              exact
              path={path}
              element={
                layout === login ? (
                  <PageComponent />
                ) : (
                  <MainLayout>
                    <PageComponent />
                  </MainLayout>
                )
              }
              key={'Routes_' + index}
            />
          )
        })}
      </Switch>
      <NotificationContainer />
    </>
  )
}

let mapStateToProps = (state) => {
  return { authStore: state.authStore }
}

export default connect(mapStateToProps, null)(Routes)
