import { Address, Cart, HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'

export const Header = () => {
  const { coffees } = useContext(CartContext)

  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <section>
        <Address>
          <MapPin size={22} weight="fill" />
          <p>Endereço aqui!!!</p>
        </Address>
        <Cart to={'/checkout'} title="Checkout" qty={coffees.length}>
          <ShoppingCart size={26} weight="fill" />
        </Cart>
      </section>
    </HeaderContainer>
  )
}
