import { AdminActionType } from 'redux/actionType'

const initialState = {
  userRoleId: 0,
  currentUser: null,
  sideBarList: [],
  colorPalette: {}
}

const authStore = (state = Object.assign({}, initialState), { type, payload }) => {
  switch (type) {
    case AdminActionType.userRoled:
      return {
        ...state,
        userRoleId: payload
      }
    case AdminActionType.currentUser:
      return {
        ...state,
        currentUser: payload
      }
    case AdminActionType.sideBarMenuList:
      return {
        ...state,
        sideBarList: payload
      }
    case AdminActionType.colorPalette:
      return {
        ...state,
        colorPalette: payload
      }
    default:
      return state
  }
}

export default authStore
