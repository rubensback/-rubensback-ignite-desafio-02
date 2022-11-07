import styled, { css } from 'styled-components'

interface InputProps {
  opcional?: boolean
  width?: string
  flex?: number
}

export const InputContainer = styled.div<InputProps>`
  background-color: ${(props) => props.theme['base-input']};
  border: 1px solid ${(props) => props.theme['base-button']};
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem;
  font-size: 0.875rem;
  width: ${(props) => props.width || '100%'};
  ${(props) =>
    props.flex &&
    css`
      flex: ${props.flex || '100%'};
    `}

  &:focus-within {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }

  & input {
    font-size: inherit;
    border: none;
    background-color: inherit;
    width: 100%;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }

  ${(props) =>
    props.opcional &&
    css`
      &::after {
        content: 'Opcional';
        color: ${(props) => props.theme['base-label']};
        font-style: italic;
      }
    `}
`
