export type ContainerRegTOStateType = {
  TOList: Array<{id: number, titleTo: string, textTo: string, priceTo: string}> | null 
  currentPage: number
  start: number
  end: number
}
export type ContainerRegTODispatchType = {
  onGetListTO(url: string): void
  setCurrentPage(dataPaginat: {currentPage: number, start: number, end: number}): void
  reFresh(): void
}
export type ContainerRegTOTypes = ContainerRegTOStateType & ContainerRegTODispatchType

export type RegTOContainerProps = {
  title: string
  text: string
}