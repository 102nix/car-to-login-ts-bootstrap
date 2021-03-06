export type ModalEditContainerTypes = {
  titleTo: string
  textTo: string
  priceTo: string
  id: number
  url: string
  showModal: boolean
  setModal(val: boolean): void
  onUpdateListTO(val: OnSubmitType): void
}
export type OnSubmitType = {
  titleTo: string
  textTo: string
  priceTo: string
  id?: number
  url?: string
}

export type FormModalContainerType = {
  onSubmit(dataForm: OnSubmitType): void
  setModal(val: boolean): void
  title: string
  text: string
  price: string
}
export type FormModalDataUseType = {
  titleTo: string
  textTo: string
  priceTo: string
}
