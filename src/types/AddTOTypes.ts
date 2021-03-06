export type AddTOStateType = {
  logined: null| boolean
}
export type AddTODispatcType = {
  onSetListTO(dataForm: FormAddUsesDataType): void
}
export type AddTOTypes = AddTOStateType & AddTODispatcType

export type FormAddUsesDataType = {
  titleTo: string
  textTo: string
  priceTo: string
}
export type FormAddContainerType = {
  onSubmit(dataForm: FormAddUsesDataType): void
}