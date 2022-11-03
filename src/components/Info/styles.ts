import styled from 'styled-components'

const ICON_COLOR = {
  yellowDark: 'yellow-dark',
  yellow: 'yellow',
  baseText: 'base-text',
  purple: 'purple',
} as const

export type IconColor = keyof typeof ICON_COLOR

interface InfoContainerProps {
  iconColor: IconColor
}

export const InfoContainer = styled.div<InfoContainerProps>`
  display: flex;
  gap: 1.25rem;
  align-items: center;
  width: 50%;

  > div {
    height: 2rem;
    width: 2rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme[ICON_COLOR[props.iconColor]]};
    color: ${(props) => props.theme.white};
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
