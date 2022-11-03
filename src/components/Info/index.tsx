import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { cloneElement, useMemo } from 'react'
import { InfoContainer, IconColor } from './styles'

interface InfoProps {
  text: string
  icon: 'shoppingCart' | 'timer' | 'package' | 'coffee'
}

export const Info = ({ text, icon }: InfoProps) => {
  const [iconElement, iconColor]: [JSX.Element, IconColor] = useMemo(() => {
    switch (icon) {
      case 'shoppingCart':
        return [<ShoppingCart key={icon} />, 'yellowDark']

      case 'timer':
        return [<Timer key={icon} />, 'yellow']

      case 'package':
        return [<Package key={icon} />, 'baseText']

      case 'coffee':
        return [<Coffee key={icon} />, 'purple']
    }
  }, [icon])

  console.log('iconColor', iconColor)

  return (
    <InfoContainer iconColor={iconColor}>
      <div>
        {cloneElement(iconElement, {
          size: 16,
          weight: 'fill',
        })}
      </div>
      <p>{text}</p>
    </InfoContainer>
  )
}
