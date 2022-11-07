import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import {
  CheckoutForm,
  ConfirmButton,
  PaymentContainer,
  PaymentType,
  PaymentTypesContainer,
  SectionTitle,
  SelectedCoffeesContainer,
  Total,
  Values,
} from './styles'
import { Form } from '../../components/Form'
import { useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { CardHeader } from './components/CardHeader'
import { Bank, CreditCard, Money } from 'phosphor-react'
import { SelectedCoffee } from '../../components/SelectedCoffee'
import { CartContext } from '../../contexts/CartContext'

const checkoutSchema = zod.object({
  cep: zod
    .string()
    .regex(/^[0-9]{5}-[0-9]{3}$/, 'Insira um código postal valido'),
  street: zod.string(),
  number: zod.number(),
  complement: zod.string().optional(),
  neighborhood: zod.string(),
  city: zod.string(),
  uf: zod.string().length(2, 'Insira um UF valido'),
})

export type checkoutFormData = zod.infer<typeof checkoutSchema>

const paymentTypes = [
  {
    icon: <CreditCard />,
    name: 'Cartão de credito',
    id: 1,
  },
  {
    icon: <Bank />,
    name: 'Cartão de débito',
    id: 2,
  },
  {
    icon: <Money />,
    name: 'dinheiro',
    id: 3,
  },
]

const deliveryValue = 3.5

export const Checkout = () => {
  const { coffees } = useContext(CartContext)
  const [selectedPaymentId, setSelectedPaymentId] = useState<number | null>(
    null,
  )
  const methods = useForm<checkoutFormData>({
    resolver: zodResolver(checkoutSchema),
  })
  const {
    handleSubmit,
    formState: { errors },
  } = methods

  const handleCheckout = useCallback((formData: checkoutFormData) => {
    console.log('formData', formData)
  }, [])

  const { subTotal, total } = useMemo(() => {
    const subTotal = coffees.reduce(
      (acc, current) => acc + current.price * current.qty,
      0,
    )
    return { subTotal, total: subTotal + deliveryValue }
  }, [coffees])

  useEffect(() => {
    if (Object.keys(errors).length) {
      const [input, error] = Object.entries(errors)[0]
      alert(`${input} - ${error.message}`)
    }
  }, [errors])

  return (
    <CheckoutForm onSubmit={handleSubmit(handleCheckout)}>
      <section>
        <SectionTitle>Complete seu pedido</SectionTitle>
        <FormProvider {...methods}>
          <Form />
        </FormProvider>
        <PaymentContainer>
          <CardHeader
            icon="dolar"
            title="Pagamento"
            subTitle="O pagamento é feito na entrega. Exolha a forma que deseja pagar"
          />
          <PaymentTypesContainer>
            {paymentTypes.map((item) => (
              <PaymentType
                key={item.id}
                selected={item.id === selectedPaymentId}
                onClick={() => setSelectedPaymentId(item.id)}
              >
                {item.icon}
                <p>{item.name}</p>
              </PaymentType>
            ))}
          </PaymentTypesContainer>
        </PaymentContainer>
      </section>
      <section>
        <SectionTitle>Cafés selecionados</SectionTitle>
        <SelectedCoffeesContainer>
          {coffees.map((coffee) => (
            <SelectedCoffee key={coffee.id} data={coffee} />
          ))}
          <Values>
            <div>
              <p>Total de itens</p>
              <p>R$ {subTotal.toFixed(2)}</p>
            </div>
            <div>
              <p>Entrega</p>
              <p>R$ {deliveryValue.toFixed(2)}</p>
            </div>
            <Total>
              <p>Total</p>
              <p>R$ {total.toFixed(2)}</p>
            </Total>
          </Values>
          <ConfirmButton>Confirmar Pedido</ConfirmButton>
        </SelectedCoffeesContainer>
      </section>
    </CheckoutForm>
  )
}
