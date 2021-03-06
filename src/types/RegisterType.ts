export type RegisterStateType = {
  registered: null | boolean
  load: boolean
}
export type RegisterDispatcType = {
  onRegistered(dataForm: RegisterFormUsesData): void
  setLoader(val: boolean): void
}
export type RegisterTypes = RegisterStateType & RegisterDispatcType

export type RegisterFormUsesData = {
  email: string
  password: string
  confirmpassword?: string
}
export type RegisterFormContainerType = {
  onSubmit(dataForm: RegisterFormUsesData): void
  load: boolean
}