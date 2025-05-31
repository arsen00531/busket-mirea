import type { TOrder } from "../../types/busket.type"
import GoodsItem from "../GoodsItem/GoodsItem"

function GoodsList({ goods = [], addToBasket }: { goods: TOrder[], addToBasket: (item: any) => void }) {

  if (!goods.length) {
    return <h3>Not found</h3>
  }

  return (
    <div className="goods">
      {
        goods.map(good => (
          <GoodsItem key={good.id} good={good} addToBasket={addToBasket} />
        ))
      }
    </div>
  )
}

export default GoodsList
