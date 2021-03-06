export type RechartsStateType = {
  TOList: Array<{id: number, titleTo: string, textTo: string, priceTo: string}> | null
  dataRecharts: Array<{title: string, priceProduct: string | number, priceWork: string | number}> | null
}
export type RechartsDispatchType = {
  onDataCharting(list: Array<{id: number, titleTo: string, textTo: string, priceTo: string}>): void
}

export type RechartsTypes = RechartsStateType & RechartsDispatchType