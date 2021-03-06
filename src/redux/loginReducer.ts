import { ActionsType, InitialStateType, LoginTypes } from '../types/LoginStoreType'

let initialState: InitialStateType = {
  registered: null,
  logined: null,
  load: false
}

const loginReducer = (state = initialState, action: ActionsType) => {
  switch (action.type) {
    case LoginTypes.REGISTER:
      return {
        ...state,
        registered: action.reg
      }
      case LoginTypes.LOGIN:
        return {
          ...state,
          logined: action.log
        }
      case LoginTypes.SET_LOADER:
        return {
          ...state,
          load: action.val
        }
    default: return state
  }
}
export default loginReducer
