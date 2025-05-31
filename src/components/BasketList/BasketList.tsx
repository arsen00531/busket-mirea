import type { TOrder } from "../../types/busket.type"
import BasketItem from "../BasketItem/BasketItem"

type Props = {
  order: TOrder[]
  handleBasketShow: () => void
  removeFromBasket: (itemId: string) => void
  incQuantity: (itemId: string) => void
  decQuantity: (itemId: string) => void
}

function BasketList({ order = [], handleBasketShow, removeFromBasket, incQuantity, decQuantity }: Props) {

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price.floorPrice * el.quantity
  }, 0)
  return (
    <ul className="collection">
      <li className="collection-item">Корзина</li>
      {
        order.length ? (
          order.map((item) =>
            <BasketItem
              key={item.id}
              id={item.id}
              displayName={item.displayName}
              price={item.price.finalPrice}
              quantity={item.quantity}
              removeFromBasket={removeFromBasket}
              incQuantity={incQuantity}
              decQuantity={decQuantity}
            />
          )
        ) : (
          <li className="collection-item">Корзина пуста</li>
        )
      }
      <div className="collection-item active">Общая стоимость заказа: {totalPrice}</div>
      <i className="material-icons basket-clear" onClick={handleBasketShow}>
        clear
      </i>
    </ul>
  )
}

export default BasketList
