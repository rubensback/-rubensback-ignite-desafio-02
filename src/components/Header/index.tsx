import { Address, Cart, HeaderContainer } from './styles'
import logo from '../../assets/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import { AddressContext } from '../../contexts/AddressContext'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  const { coffees } = useContext(CartContext)
  const { address } = useContext(AddressContext)

  const addressLabel = address.city ? `${address.city}, ${address.uf}` : ''

  return (
    <HeaderContainer>
      <NavLink to={'/'}>
        <img src={logo} alt="" />
      </NavLink>
      <section>
        <Address>
          <MapPin size={22} weight="fill" />
          <p>{addressLabel}</p>
        </Address>
        <Cart to={'/checkout'} title="Checkout" qty={coffees.length}>
          <ShoppingCart size={26} weight="fill" />
        </Cart>
      </section>
    </HeaderContainer>
  )
}
