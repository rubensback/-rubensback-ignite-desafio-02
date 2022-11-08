import styled from 'styled-components'

export const PurchaseSuccessContainer = styled.div`
  margin-top: 6rem;
`

export const Title = styled.p`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 2rem;
  color: ${(props) => props.theme['yellow-dark']};
`

export const Subtitle = styled.p`
  margin-top: 0.25rem;
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.25rem;
`

export const ResultContainer = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: space-between;
  align-items: center;
  > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2.5rem;
    padding: 2.5rem;
    border-radius: 6px 36px;
    border: 1px solid ${(props) => props.theme.purple};
  }
`

export const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

interface IconProps {
  color: 'purple' | 'yellow' | 'yellow-dark'
}

export const Icon = styled.div<IconProps>`
  width: 2rem;
  height: 2rem;
  background-color: ${(props) => props.theme[props.color]};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    color: ${(props) => props.theme.white};
  }
`

export const InfoTitle = styled.p`
  margin-bottom: 0.125rem;
`
export const InfoSubtitle = styled.p``
