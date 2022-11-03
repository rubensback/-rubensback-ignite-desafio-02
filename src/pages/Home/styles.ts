import styled from 'styled-components'

export const HomeContainer = styled.main``

export const IntroContainer = styled.section`
  display: flex;
  justify-content: space-between;
`

export const DescriptionContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Title = styled.div`
  font-size: 3rem;
  font-family: 'Baloo 2';
  line-height: 4rem;
  font-weight: 800;
  margin-block: 1rem;
  color: ${(props) => props.theme['base-title']};
`

export const SubTitle = styled.div`
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-subtitle']};
  flex: 1;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 1.25rem;
`

export const CoffeListContainer = styled.section`
  margin-top: 7rem;

  > p {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-weight: 800;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const CoffeList = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2rem 2.5rem;
`
