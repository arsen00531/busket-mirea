function Cart({ quantity = 0, handleBasketShow }: { quantity: number, handleBasketShow: () => void }) {
  return (
    <div className="cart teal white-text lighten-2" onClick={handleBasketShow}>
      <i className="matetial-icons">shopping_basket</i>
      {quantity ? <span className="card-quantity">{quantity}</span> : null}
    </div>
  )
}

export default Cart
