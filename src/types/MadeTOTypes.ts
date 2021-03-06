import { EditDataType } from "./AllTOStoreType"
import { OnSubmitType } from "./ModalTypes"

export type ContainerMadeTOStateType = {
  TOList: Array<EditDataType> | null
  currentPage: number 
  start: number 
  end: number 
  editData: EditDataType | null
  showModal: boolean
  logined: null | boolean
}
export type ContainerMadeTODispatchType = {
  onGetListTO(list: string) : void 
  setCurrentPage(dataPaginat: {currentPage: number, start: number, end: number}): void
  reFresh(): void
  editDataModal(val: EditDataType): void
  setModal(val: boolean): void
  onUpdateListTO(data: OnSubmitType): void
}
export type MadeTOTypes = ContainerMadeTOStateType & ContainerMadeTODispatchType

export type MadeContainerProps = {
  editTO(val: EditDataType): void
  id: number
  titleTo: string
  textTo: string
  priceTo: string
}