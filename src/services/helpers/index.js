import { createStore, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { api } from '../api'
import { reducers } from 'redux/reducers'
import { Toast } from '../toast'
import logger from 'redux-logger'

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument({ api, Toast }), logger))
)

export const persistor = persistStore(store)
