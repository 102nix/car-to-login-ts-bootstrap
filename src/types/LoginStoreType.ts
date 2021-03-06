import { ThunkAction } from 'redux-thunk'
import { AppStateType } from '../redux/store'

export enum LoginTypes {
  REGISTER = 'REGISTER',
  LOGIN = 'LOGIN',
  SET_LOADER = 'SET_LOADER' 
}
export type InitialStateType = {
  registered: null | boolean
  logined: null | boolean
  load: boolean
}

export type ActionsType = SetRegisterType | SetLoginType | SetLoaderType

export type SetRegisterType = {
  type: LoginTypes.REGISTER
  reg: null | boolean
}
export type SetLoginType = {
  type: LoginTypes.LOGIN
  log: null | boolean
}
export type SetLoaderType = {
  type: LoginTypes.SET_LOADER
  val: boolean
}
export type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>
