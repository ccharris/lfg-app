import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'
export default () => {
  let middlewares = [thunk]
  let store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(...middlewares))
  return store
}