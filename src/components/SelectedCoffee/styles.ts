import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  display: flex;
  gap: 1.25rem;

  > img {
    height: 4rem;
    width: 4rem;
  }

  > div {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
`

export const Name = styled.p`
  flex: 1;
`

export const Price = styled.p`
  font-weight: 700;
`

export const Buttons = styled.div`
  display: flex;
  width: 100%;
  gap: 0.5rem;

  > div {
    display: flex;
    background-color: ${(props) => props.theme['base-button']};
    padding: 0.5rem 0.875rem;
    gap: 0.5rem;
    border-radius: 6px;
    align-items: center;
  }
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

export const RemoveButton = styled.div`
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  > svg {
    color: ${(props) => props.theme.purple};
  }

  > p {
    text-transform: uppercase;
    font-size: 0.75rem;
  }
`

export const Divider = styled.hr`
  margin: 1.5rem 0;
  border: 1px solid ${(props) => props.theme['base-button']};
`
