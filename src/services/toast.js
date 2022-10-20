import { NotificationManager } from 'react-notifications'
import { endPoints } from './helpers/config'

export const Toast = ({ type = endPoints.auth.success, message, time = '3000' }) => {
  if (Array.isArray(message)) {
    let item
    for (item of message) {
      NotificationManager[type](item.message, '', time)
    }
  } else {
    NotificationManager[type](message, '', time)
  }
}
