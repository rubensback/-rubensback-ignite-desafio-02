import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AddressContext } from '../../contexts/AddressContext'
import {
  Icon,
  InfoContainer,
  InfoSubtitle,
  InfoTitle,
  PurchaseSuccessContainer,
  ResultContainer,
  Subtitle,
  Title,
} from './styles'
import Illustration from '../../assets/illustration.svg'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export const PurchaseSuccess = () => {
  const location = useLocation()
  const { address } = useContext(AddressContext)
  const { street, number, neighborhood, city, uf } = address

  return !location.state?.selectedPayment ? (
    <Navigate to={'/'} replace />
  ) : (
    <PurchaseSuccessContainer>
      <Title>Uhu! Pedido confirmado</Title>
      <Subtitle>Agora é só aguardar que logo o café chegará até você</Subtitle>
      <ResultContainer>
        <div>
          <InfoContainer>
            <Icon color="purple">
              <MapPin size={16} weight="fill" />
            </Icon>
            <div>
              <InfoTitle>
                Entrega em{' '}
                <strong>
                  {street}, {number}
                </strong>
              </InfoTitle>
              <InfoSubtitle>
                {neighborhood} - {city}, {uf}
              </InfoSubtitle>
            </div>
          </InfoContainer>
          <InfoContainer>
            <Icon color="yellow">
              <Timer size={16} weight="fill" />
            </Icon>
            <div>
              <InfoTitle>Previsão de entrega</InfoTitle>
              <InfoSubtitle>
                <strong>20 min - 30 min</strong>
              </InfoSubtitle>
            </div>
          </InfoContainer>
          <InfoContainer>
            <Icon color="yellow-dark">
              <CurrencyDollar size={16} />
            </Icon>
            <div>
              <InfoTitle>Pagamento na entrega</InfoTitle>
              <InfoSubtitle>
                <strong>{location.state.selectedPayment}</strong>
              </InfoSubtitle>
            </div>
          </InfoContainer>
        </div>
        <img src={Illustration} alt="" />
      </ResultContainer>
    </PurchaseSuccessContainer>
  )
}
