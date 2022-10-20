import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { persistor, store } from './services/helpers'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import StyleProvider from './components/Common/StyleProvider'
import Routes from 'routes'
import 'react-notifications/lib/notifications.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <StyleProvider>
          <Routes />
        </StyleProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
