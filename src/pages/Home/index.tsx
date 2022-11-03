import imgCoffeDelivery from '../../assets/img-coffe-delivery.svg'
import { CoffeeItem } from '../../components/CoffeItem'
import { Info } from '../../components/Info'
import {
  CoffeList,
  CoffeListContainer,
  DescriptionContainer,
  HomeContainer,
  InfoContainer,
  IntroContainer,
  SubTitle,
  Title,
} from './styles'
import coffeeData from '../../service/coffeeData.json'

export const Home = () => {
  console.log('coffeeData', coffeeData)
  return (
    <HomeContainer>
      <IntroContainer>
        <DescriptionContainer>
          <Title>Encontre o café perfeito para qualquer hora do dia</Title>
          <SubTitle>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </SubTitle>
          <InfoContainer>
            <Info text="Compra simples e segura" icon="shoppingCart" />
            <Info text="Embalagem mantém o café intacto" icon="package" />
            <Info text="Entrega rápida e rastreada" icon="timer" />
            <Info text="O café chega fresquinho até você" icon="coffee" />
          </InfoContainer>
        </DescriptionContainer>
        <img src={imgCoffeDelivery} alt="" />
      </IntroContainer>
      <CoffeListContainer>
        <p>Nossos cafés</p>
        <CoffeList>
          {coffeeData.map((item) => (
            <CoffeeItem key={item.id} data={item} />
          ))}
        </CoffeList>
      </CoffeListContainer>
    </HomeContainer>
  )
}
