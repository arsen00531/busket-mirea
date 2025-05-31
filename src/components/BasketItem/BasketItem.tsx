type Props = {
  id: string
  displayName: string
  price: number
  quantity: number
  removeFromBasket: (itemId: string) => void
  incQuantity: (itemId: string) => void
  decQuantity: (itemId: string) => void
}

function BasketItem({ id, displayName, price, quantity, removeFromBasket, incQuantity, decQuantity }: Props) {
  return (
    <ul className="collection">
      <li className="collection-item">
        {displayName}{" "}
        <i className="material-icons basket-quantity" onClick={() => decQuantity(id)}>
          remove
        </i>
        x {quantity}
        <i className="material-icons basket-quantity" onClick={() => incQuantity(id)}>
          add
        </i>{" "}
        = {price * quantity} руб.
        <span className="secondary-content" onClick={() => removeFromBasket(id)}>
          <i className="material-icons basket-delete">clear</i>
        </span>
      </li>
    </ul>
  )
}

export default BasketItem
