import { MapPin } from 'phosphor-react'
import { useFormContext } from 'react-hook-form'
import { Input } from '../../components/Input'
import { CardHeader } from '../../pages/Checkout/components/CardHeader'
import { FormularyContainer, InputGroup } from './styles'

export const Form = () => {
  const { register, watch } = useFormContext()

  console.log(watch())

  return (
    <FormularyContainer>
      <CardHeader
        title={'Endereço de entrega'}
        subTitle={'Informe o endereço onde deseja receber seu pedido'}
        icon={'mapPin'}
      />
      <InputGroup>
        <Input
          styles={{ width: '35%' }}
          placeholder="CEP"
          {...register('cep')}
        />
      </InputGroup>
      <InputGroup>
        <Input placeholder="Rua" {...register('street')} />
      </InputGroup>
      <InputGroup>
        <Input
          styles={{ width: '35%' }}
          placeholder="Número"
          {...register('number')}
        />
        <Input
          styles={{ flex: 1 }}
          opcional
          placeholder="Complemento"
          {...register('complement')}
        />
      </InputGroup>
      <InputGroup>
        <Input
          styles={{ width: '35%' }}
          placeholder="Bairro"
          {...register('neighborhood')}
        />
        <Input
          styles={{ flex: 4 }}
          placeholder="Cidade"
          {...register('city')}
        />
        <Input styles={{ flex: 1 }} placeholder="UF" {...register('uf')} />
      </InputGroup>
    </FormularyContainer>
  )
}
