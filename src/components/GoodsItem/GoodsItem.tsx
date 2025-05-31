import type { TOrder } from "../../types/busket.type"

type Props = {
  good: TOrder
  addToBasket: (item: any) => void
}

function GoodsItem(props: Props) {
  const { addToBasket } = props
  const { good: { displayName, displayAssets, description, price, id } } = props
  return (
    <div>
      <div className="card" id={id}>
        <div className="card-image">
          <img src={displayAssets[0]?.full_background} alt={displayName} />
          <span className="card-title">{displayName}</span>
        </div>
        <div className="card-content">
          <p>{description}</p>
        </div>
        <div className="card-action">
          <button
            className="btn"
            onClick={() =>
              addToBasket({
                id,
                displayName,
                price
              })
            }
          >
            Купить
          </button>
          <span className="right">{price.finalPrice}</span>
        </div>
      </div>
    </div>
  )
}

export default GoodsItem
