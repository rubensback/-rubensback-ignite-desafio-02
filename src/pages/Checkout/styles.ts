import styled, { css } from 'styled-components'

export const CheckoutForm = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  > section {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    > div {
      background-color: ${(props) => props.theme['base-card']};
      padding: 2.5rem;
      border-radius: 6px;
    }
  }
`

export const SectionTitle = styled.p`
  font-size: 1.125rem;
  font-weight: 800;
  font-family: 'Baloo 2';
  color: ${(props) => props.theme['base-subtitle']};
`

export const PaymentContainer = styled.div``

export const PaymentTypesContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

interface PaymentTypeProps {
  selected: boolean
}

export const PaymentType = styled.div<PaymentTypeProps>`
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.75rem;
  flex: 1;
  justify-content: center;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  ${(props) =>
    props.selected &&
    css`
      background-color: ${(props) => props.theme['purple-light']};
      border: 1px solid ${(props) => props.theme.purple};
    `}

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const SelectedCoffeesContainer = styled.div`
  border-radius: 6px 44px !important;
`

export const Values = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  > div {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
  }
`

export const Total = styled.div`
  font-weight: bold;
  color: ${(props) => props.theme['base-subtitle']};
`

export const ConfirmButton = styled.button`
  padding: 0.75rem 0.5rem;
  background-color: ${(props) => props.theme.yellow};
  margin-top: 1.5rem;
  border: none;
  border-radius: 6px;
  color: ${(props) => props.theme.white};
  font-size: 0.875rem;
  font-weight: bold;
  width: 100%;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }
`
