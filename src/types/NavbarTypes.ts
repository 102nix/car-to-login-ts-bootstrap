export type NavbarStateType = {
  logined: null | boolean
}
export type NavbarDispatchType = {
  setLogin(val: null | boolean): void
}

export type NavbarTypes = NavbarStateType & NavbarDispatchType