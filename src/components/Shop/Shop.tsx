import { useEffect, useState } from "react"
import busketService from "../../services/busket.service"
import Preloader from "../Preloader/Preloader"
import GoodsList from "../GoodsList/GoodsList"
import Cart from "../Cart/Cart"
import type { TOrder } from "../../types/busket.type"
import BasketList from "../BasketList/BasketList"
import Alert from "../Alert/Alert"

function Shop() {
  const [goods, setGoods] = useState<TOrder[]>([])
  const [loading, setLoading] = useState(true)
  const [order, setOrder] = useState<TOrder[]>([])
  const [isBasketShow, setIsBasketShow] = useState(false)
  const [alertName, setAlertName] = useState("")

  useEffect(() => {
    getGoods()
  }, [])

  const closeAlert = () => {
    setAlertName("")
  }

  const getGoods = async () => {
    const goodsResponse = await busketService.getGoods()
    setLoading(false)
    setGoods(goodsResponse)
  }

  const addToBasket = (item: TOrder) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id)

    if (itemIndex < 0) {
      const newItem = {
        ...item,
        quantity: 1
      }
      setOrder([...order, newItem])
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            quantity: orderItem.quantity + 1
          }
        } else {
          return orderItem
        }
      })

      setOrder(newOrder)
    }
    setAlertName(item.displayName)
  }

  const incQuantity = (itemId: string) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId) {
        const newQuantity = el.quantity + 1
        return {
          ...el,
          quantity: newQuantity
        }
      } else {
        return el
      }
    })

    setOrder(newOrder)
  }

  const decQuantity = (itemId: string) => {
    const newOrder = order.map((el) => {
      if (el.id === itemId) {
        const newQuantity = el.quantity - 1
        return {
          ...el,
          quantity: newQuantity >= 0 ? newQuantity : 0
        }
      } else {
        return el
      }
    })

    setOrder(newOrder)
  }

  const removeFromBasket = (itemId: string) => {
    const newOrder = order.filter((el) => el.id !== itemId)
    setOrder(newOrder)
  }

  const handleBasketShow = () => {
    setIsBasketShow(!isBasketShow)
  }

  return (
    <main className="container content">
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {
        loading ? <Preloader /> : <GoodsList goods={goods} addToBasket={addToBasket} />
      }
      {
        isBasketShow &&
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
          incQuantity={incQuantity}
          decQuantity={decQuantity}
        />
      }
      {alertName && <Alert name={alertName} closeAlert={closeAlert} />}
    </main>
  )
}

export default Shop
