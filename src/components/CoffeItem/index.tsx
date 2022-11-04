import { ShoppingCart } from 'phosphor-react'
import { useCallback, useContext, useState } from 'react'
import { CartContext } from '../../contexts/CartContext'
import {
  CartButton,
  CoffiItemContainer,
  Description,
  Footer,
  Price,
  Qty,
  QtyButton,
  QtyContainer,
  Title,
  Type,
  TypesContainer,
} from './styles'

interface Coffee {
  id: number
  imagePath: string
  types: string[]
  name: string
  description: string
  price: number
}

interface CoffeeItemProps {
  data: Coffee
}

export const CoffeeItem = ({ data }: CoffeeItemProps) => {
  const { addCoffeeToCart } = useContext(CartContext)
  const [qty, setQty] = useState(0)
  const { description, imagePath, name, price, types } = data

  const handleAddCoffee = useCallback(() => {
    if (qty > 0) {
      addCoffeeToCart({ ...data, qty })
      setQty(0)
    } else alert('Favor inserir quantidade')
  }, [qty, data, addCoffeeToCart])

  const increaseDecreaseQty = useCallback((increase: boolean) => {
    if (increase) setQty((state) => state + 1)
    else setQty((state) => (state !== 0 ? state - 1 : state))
  }, [])

  return (
    <CoffiItemContainer>
      <img src={`images/${imagePath}`} alt="" />
      <TypesContainer>
        {types.map((type) => (
          <Type key={type}>{type}</Type>
        ))}
      </TypesContainer>
      <Title>{name}</Title>
      <Description>{description}</Description>
      <Footer>
        <Price>{price.toFixed(2)}</Price>
        <QtyContainer>
          <QtyButton onClick={() => increaseDecreaseQty(false)}>-</QtyButton>
          <Qty>{qty}</Qty>
          <QtyButton onClick={() => increaseDecreaseQty(true)}>+</QtyButton>
        </QtyContainer>
        <CartButton onClick={handleAddCoffee}>
          <ShoppingCart weight="fill" size={20} />
        </CartButton>
      </Footer>
    </CoffiItemContainer>
  )
}
