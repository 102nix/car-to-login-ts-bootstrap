import { ActionsType, allTOTypes, InitialStateType } from '../types/AllTOStoreType';

let initialState: InitialStateType = {
  TOList: null,
  currentPage: 1,
  start: 0,
  end: 4,
  showModal: false,
  editData: null,
  dataRecharts: null
}

const allToReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case allTOTypes.READ_LIST:
      return {
        ...state,
        TOList: action.list
      }
    case allTOTypes.UPDATE_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.val.currentPage,
        start: action.val.start,
        end: action.val.end
      }
    case allTOTypes.FRESH_PAGINATION:
      return {
        ...state,
        currentPage: 1,
        start: 0,
        end: 4
      }
    case allTOTypes.MODAL_FALSE_TRUE:
      return {
        ...state,
        showModal: action.val
      }
    case allTOTypes.EDIT_DATA:
      return {
        ...state,
        editData: action.val,
        showModal: true
      }
    case allTOTypes.RESET_STATE:
      return {
        ...state,
        TOList: null,
        currentPage: 1,
        start: 0,
        end: 4,
        showModal: false,
        editData: null,
        dataRecharts: null
      }
      case allTOTypes.UPDATE_RECHARTS:
        return {
          ...state,
          dataRecharts: action.data
        }
    default: return state
  }
}

export default allToReducer