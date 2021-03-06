import { DataCarTOType, listAPI } from '../api/api';
import { 
  allTOTypes, 
  DataChartingListType, 
  DataRechartsType, 
  EditDataModal, 
  EditDataType, 
  GetTOListAC, 
  RechartsAC, 
  SetCurrentPage, 
  SetModal, 
  ThunkType, 
  ThunkTypeNotPromise, 
  TOListType } from "../types/AllTOStoreType"

export const getTOListAC = (list: TOListType): GetTOListAC => ({type: allTOTypes.READ_LIST, list})
export const setCurrentPage = (val: {currentPage: number, start: number, end: number}): SetCurrentPage => 
  ({type: allTOTypes.UPDATE_CURRENT_PAGE, val})
export const reFresh = () => ({type: allTOTypes.FRESH_PAGINATION})
export const setModal = (val: boolean): SetModal => ({type: allTOTypes.MODAL_FALSE_TRUE, val})
export const editDataModal = (val: EditDataType): EditDataModal => ({type: allTOTypes.EDIT_DATA, val})
export const resetState = () => ({type: allTOTypes.RESET_STATE})
export const rechartsAC = (data: DataRechartsType): RechartsAC => ({type: allTOTypes.UPDATE_RECHARTS, data})

export const onGetListTO = (src_list: string): ThunkType => async (dispatch) => {
  try {
    const response = await listAPI.getlistTO(src_list)
    const responseList: TOListType = Object.values(response.data)
    dispatch(getTOListAC(responseList))
  } catch (error) {
    console.log(error)
  }
}

export const onSetListTO = (dataForm: DataCarTOType): ThunkType => async (dispatch) => {
  try {
    await listAPI.setListMadeTO(dataForm)
    dispatch(onGetListTO(allTOTypes.URL_FOR_UPDATE))
  } catch (error) {
    console.log(error)
  }
}

export const onUpdateListTO = (dataForm: DataCarTOType): ThunkType => async (dispatch) => {
  try {
    await listAPI.updateListMadeTO(dataForm)
    dispatch(onGetListTO(allTOTypes.URL_FOR_UPDATE))
  } catch (error) {
    console.log(error);
  }
}

export const onDataCharting = (listTO: DataChartingListType): ThunkTypeNotPromise => (dispatch) => {
  const dataPrice: DataRechartsType = []
  for (let data of listTO) {
    const pricePr: Array<string | number> = data.priceTo.split(': ')
    const priceWrk: Array<string | number> = data.textTo.split(': ')
    const title: Array<string> = data.titleTo.split(';')
    if (pricePr[1] === undefined) pricePr[1] = 0
    if (priceWrk[1] === undefined) priceWrk[1] = 0

    dataPrice.push(
      {
        title: title[0].split(' ')[0],
        priceProduct: pricePr[1], 
        priceWork: priceWrk[1]
      }
    )
  }
  dispatch(rechartsAC(dataPrice))
}