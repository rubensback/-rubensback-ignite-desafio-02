import { CurrencyDollar, MapPin } from 'phosphor-react'
import { cloneElement, useMemo } from 'react'
import { CardHeaderContainer, IconColor, SubTitle, Title } from './styles'

interface CardHeaderProps {
  icon: 'mapPin' | 'dolar'
  title: string
  subTitle: string
}

export const CardHeader = ({ icon, title, subTitle }: CardHeaderProps) => {
  const [iconElement, iconColor]: [JSX.Element, IconColor] = useMemo(() => {
    switch (icon) {
      case 'mapPin':
        return [<MapPin key={icon} />, 'yellowDark']

      case 'dolar':
        return [<CurrencyDollar key={icon} />, 'purple']
    }
  }, [icon])

  return (
    <CardHeaderContainer iconColor={iconColor}>
      {cloneElement(iconElement, {
        size: 22,
      })}
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </CardHeaderContainer>
  )
}
