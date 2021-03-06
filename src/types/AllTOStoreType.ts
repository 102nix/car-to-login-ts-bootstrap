import { ThunkAction } from "redux-thunk"
import { AppStateType } from "../redux/store"

export enum allTOTypes {
  READ_LIST = 'READ_LIST',
  UPDATE_CURRENT_PAGE = 'UPDATE_CURRENT_PAGE',
  FRESH_PAGINATION = 'FRESH_PAGINATION',
  MODAL_FALSE_TRUE = 'MODAL_FALSE_TRUE',
  EDIT_DATA = 'EDIT_DATA',
  RESET_STATE = 'RESET_STATE',
  URL_FOR_UPDATE = 'https://made-car-to.firebaseio.com/.json',
  UPDATE_RECHARTS = 'UPDATE_RECHARTS'
}

export type TOListType = Array<EditDataType>
export type EditDataType = {id: number, titleTo: string, textTo: string, priceTo: string}
export type DataRechartsType = Array<{title: string, priceProduct: string | number, priceWork: string | number}> 
export type DataChartingListType = Array<{priceTo: string, textTo: string, titleTo: string}>

export type InitialStateType = {
  TOList: null | TOListType
  currentPage: number
  start: number
  end: number
  showModal: boolean
  editData: null | EditDataType
  dataRecharts: null | DataRechartsType
}

export type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> 

export type ThunkTypeNotPromise = ThunkAction<void, AppStateType, unknown, ActionsType> 

export type ActionsType = GetTOListAC | SetCurrentPage | ReFresh | SetModal | EditDataModal | ResetState | RechartsAC
export type GetTOListAC = {
  type: allTOTypes.READ_LIST
  list: TOListType
}
export type SetCurrentPage = {
  type: allTOTypes.UPDATE_CURRENT_PAGE
  val: {currentPage: number, start: number, end: number}
}
export type ReFresh = {
  type: allTOTypes.FRESH_PAGINATION
}
export type SetModal = {
  type: allTOTypes.MODAL_FALSE_TRUE
  val: boolean
}
export type EditDataModal = {
  type: allTOTypes.EDIT_DATA
  val: EditDataType
}
export type ResetState = {
  type: allTOTypes.RESET_STATE
}
export type RechartsAC = {
  type: allTOTypes.UPDATE_RECHARTS
  data: DataRechartsType
}
