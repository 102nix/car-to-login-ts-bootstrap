import { authAPI } from '../api/api'
import { LoginTypes, SetLoaderType, SetLoginType, SetRegisterType, ThunkType } from "../types/LoginStoreType"
import { RegisterFormUsesData } from "../types/RegisterType"

export const setRegister = (reg: boolean): SetRegisterType => ({type: LoginTypes.REGISTER, reg})
export const setLogin = (log: boolean): SetLoginType => ({type: LoginTypes.LOGIN, log})
export const setLoader = (val: boolean): SetLoaderType => ({type: LoginTypes.SET_LOADER, val})

export const onRegistered = (dataUserForm: RegisterFormUsesData): ThunkType => async (dispatch) => {
  try {
    await authAPI.register(dataUserForm.email, dataUserForm.password)
    dispatch(setRegister(true))
    dispatch(setLoader(false))
  } catch (error) {
    dispatch(setRegister(false))
  }
}
export const onLogined = (dataUserForm: RegisterFormUsesData): ThunkType => async (dispatch) => {
  try {
    let response = await authAPI.login(dataUserForm.email, dataUserForm.password)
    dispatch(setLogin(response.data.registered)) 
    dispatch(setLoader(false))
  } catch (error) {
    dispatch(setLogin(false))
    dispatch(setLoader(false))
  }
}