import styled, { css } from 'styled-components'
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

interface CartProps {
  qty: number
}

export const Cart = styled(NavLink)<CartProps>`
  color: ${(props) => props.theme['yellow-dark']};
  background-color: ${(props) => props.theme['yellow-light']};
  padding: 0.5rem;
  border-radius: 8px;
  position: relative;

  ${(props) =>
    props.qty &&
    css`
      &::after {
        height: 1.25rem;
        width: 1.25rem;
        position: absolute;
        top: -0.5rem;
        right: -0.5rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 0.875rem;
        font-weight: bold;
        line-height: 1.2rem;
        content: '${props.qty}';
        color: ${props.theme.white};
        background-color: ${props.theme['yellow-dark']};
      }
    `}
`
