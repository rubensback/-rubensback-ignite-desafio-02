import {
  Buttons,
  Name,
  Price,
  Qty,
  QtyButton,
  RemoveButton,
  CoffeeContainer,
  Divider,
} from './styles'
import { Trash } from 'phosphor-react'
import { Coffee } from '../../reducers/cart/reducer'
import { useCallback, useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

interface SelectedCoffeeProps {
  data: Coffee
}

export const SelectedCoffee = ({ data }: SelectedCoffeeProps) => {
  const { imagePath, name, price, qty, id } = data
  const { removeCoffee, increaseCurrentCoffee, decreaseCurrentCoffee } =
    useContext(CartContext)

  const handleIncrease = useCallback(() => {
    increaseCurrentCoffee(id, 1)
  }, [increaseCurrentCoffee, id])

  const handleDecrease = useCallback(() => {
    if (qty === 0) return
    decreaseCurrentCoffee(id, 1)
  }, [decreaseCurrentCoffee, qty, id])

  return (
    <>
      <CoffeeContainer>
        <img src={`images/${imagePath}`} alt="" />
        <div>
          <Name>{name}</Name>
          <Price>R$ {price.toFixed(2)}</Price>
          <Buttons>
            <div>
              <QtyButton onClick={handleDecrease}>-</QtyButton>
              <Qty>{qty}</Qty>
              <QtyButton onClick={handleIncrease}>+</QtyButton>
            </div>
            <RemoveButton onClick={() => removeCoffee(id)}>
              <Trash size={16} />
              <p>remover</p>
            </RemoveButton>
          </Buttons>
        </div>
      </CoffeeContainer>
      <Divider />
    </>
  )
}
