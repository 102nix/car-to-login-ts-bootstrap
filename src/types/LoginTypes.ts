export type LoginStateType = {
  logined: null | boolean
  load: boolean
}
export type LoginDispatcType = {
  onLogined(dataForm: LoginFormDataType): void
  setLoader(val: boolean): void
}

export type LoginFormDataType = {
  email: string
  password: string
}

export type LoginFormContainerType = {
  onSubmit(dataForm: LoginFormDataType): void
  load: boolean
}