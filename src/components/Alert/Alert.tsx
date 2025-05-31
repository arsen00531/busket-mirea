import { useEffect } from "react"

type Props = {
  name: string
  closeAlert: () => void
}

function Alert({ name = "", closeAlert }: Props) {

  useEffect(() => {
    const timerId = setTimeout(closeAlert, 3000)

    return () => {
      clearTimeout(timerId)
    }
  }, [name])

  return (
    <div id="toast-container">
      <div className="toast">
        {name} добавлен в корзину
      </div>
    </div>
  )
}

export default Alert