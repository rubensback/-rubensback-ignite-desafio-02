import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-bottom: 2rem;

  > section {
    display: flex;
    gap: 12px;
    align-items: center;
  }
`

export const Address = styled.div`
  display: flex;
  gap: 4px;
  align-items: center;
  color: ${(props) => props.theme['purple-dark']};
  background-color: ${(props) => props.theme['purple-light']};
  padding: 0.5rem;
  border-radius: 8px;
  align-self: stretch;

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const Cart = styled(NavLink)`
  color: ${(props) => props.theme['yellow-dark']};
  background-color: ${(props) => props.theme['yellow-light']};
  padding: 0.5rem;
  border-radius: 8px;
`
