export type TOrderPrice = {
  finalPrice: number,
  floorPrice: number,
  regularPrice: number
}

export type TOrder = {
  id: string,
  displayName: string,
  price: TOrderPrice,
  quantity: number,
  description: string,
  displayAssets: [{
    full_background: string,
    background: string
  }]
}

export type TFetchStatus = "fullfiled" | "pending" | "rejected";

export type TCardOrders = { quantity: number } & TOrder