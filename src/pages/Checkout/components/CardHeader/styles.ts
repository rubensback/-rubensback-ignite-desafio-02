import styled from 'styled-components'

const ICON_COLOR = {
  yellowDark: 'yellow-dark',
  purple: 'purple',
} as const

export type IconColor = keyof typeof ICON_COLOR

interface CardHeaderContainerProps {
  iconColor: IconColor
}

export const CardHeaderContainer = styled.div<CardHeaderContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.125rem 0.5rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;

  > svg {
    color: ${(props) => props.theme[ICON_COLOR[props.iconColor]]};
  }
`

export const Title = styled.p`
  color: ${(props) => props.theme['base-subtitle']};
`

export const SubTitle = styled.p`
  width: 100%;
  padding-left: 2rem;
  font-size: 0.875rem;
`
