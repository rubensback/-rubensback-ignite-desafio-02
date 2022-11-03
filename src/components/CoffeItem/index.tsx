import { ShoppingCart } from 'phosphor-react'
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
  const { description, imagePath, name, price, types } = data

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
          <QtyButton>-</QtyButton>
          <Qty>0</Qty>
          <QtyButton>+</QtyButton>
        </QtyContainer>
        <CartButton>
          <ShoppingCart weight="fill" size={20} />
        </CartButton>
      </Footer>
    </CoffiItemContainer>
  )
}
