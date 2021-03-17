import { combineReducers, createStore, applyMiddleware } from 'redux'
import allToReducer from './allToReducer'
import loginReducer from './loginReducer'
import thunkMiddleware from 'redux-thunk'

let rootReducer = combineReducers({
  allToReducer,
  loginReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

const storage = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default storage