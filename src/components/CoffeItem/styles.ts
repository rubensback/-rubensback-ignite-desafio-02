import styled from 'styled-components'

export const CoffiItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme['base-card']};
  padding: 0 1.5rem 1.25rem;
  border-radius: 6px 36px;
  flex: 1 0 calc(25% - 2rem); //4 items per row(25%) subtracted by gap(2rem)

  > img {
    margin-top: -1.5rem;
  }
`

export const TypesContainer = styled.div`
  display: flex;
  gap: 0.25rem;
`

export const Type = styled.p`
  background-color: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
  font-weight: bold;
  font-size: 0.625rem;
  padding: 0.25rem 0.5rem;
  border-radius: 100px;
  text-transform: uppercase;
  margin-top: 0.75rem;
`

export const Title = styled.p`
  margin-top: 1rem;
  color: ${(props) => props.theme['base-subtitle']};
  font-family: 'Baloo 2';
  font-weight: bold;
  font-size: 1.25rem;
`

export const Description = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-label']};
  text-align: center;
`

export const Footer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  width: 100%;
`

export const Price = styled.p`
  flex: 1;
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 1.5rem;
  display: flex;
  align-items: center;

  &::before {
    content: 'R$';
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 0.875rem;
    margin-right: 2px;
  }
`

export const QtyContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme['base-button']};
  padding: 0.5rem 0.875rem;
  gap: 0.5rem;
  border-radius: 6px;
  margin-right: 10%;
  align-items: center;
`

export const QtyButton = styled.span`
  color: ${(props) => props.theme.purple};
  cursor: default;

  &:hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const Qty = styled.span`
  color: ${(props) => props.theme['base-title']};
`

export const CartButton = styled.div`
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['purple-dark']};
  width: 2.125rem;
  height: 2.125rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.purple};
  }
`
