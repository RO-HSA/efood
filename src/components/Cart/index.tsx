import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'

import {
  CartContainer,
  CartItem,
  CheckoutContainer,
  InputGroup,
  Overlay,
  ShortInputGroup,
  Sidebar,
  TotalContainer,
  EmptyCart
} from './styles'
import { Button } from '../ProductCard/styles'
import { RootReducer } from '../../store'
import formatPrice from '../../utils/currencyFormatter'
import { clear, close, remove } from '../../store/reducers/cart'
import { usePurchaseMutation } from '../../services/api'

const Cart = () => {
  const isOpen = useSelector((state: RootReducer) => state.cart.isOpen)
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [purchase, { data, isLoading, isSuccess }] = usePurchaseMutation()
  const [stage, setStage] = useState('cart')

  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      recipient: '',
      address: '',
      city: '',
      cep: '',
      streetNumber: '',
      complement: '',
      cardDisplayName: '',
      cardNumber: '',
      cardCode: '',
      expireMonth: '',
      expireYear: ''
    },
    validationSchema: Yup.object({
      recipient: Yup.string()
        .min(5, 'Mínimo de 5 caracteres')
        .required('Campo obrigatório'),
      address: Yup.string().required('Campo obrigatório'),
      city: Yup.string().required('Campo obrigatório'),
      cep: Yup.string()
        .min(9, 'CEP deve ter 8 dígitos')
        .max(9, 'CEP deve ter 8 dígitos')
        .required('Campo obrigatório'),
      streetNumber: Yup.number()
        .positive('Deve ser número')
        .integer('Deve ser número')
        .required('Campo obrigatório'),
      complement: Yup.string(),
      cardDisplayName: Yup.string().when((values, schema) =>
        stage === 'payment' ? schema.required('Campo obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        stage === 'payment' ? schema.required('Campo obrigatório') : schema
      ),
      cardCode: Yup.string().when((values, schema) =>
        stage === 'payment' ? schema.required('Campo obrigatório') : schema
      ),
      expireMonth: Yup.string().when((values, schema) =>
        stage === 'payment' ? schema.required('Campo obrigatório') : schema
      ),
      expireYear: Yup.string().when((values, schema) =>
        stage === 'payment' ? schema.required('Campo obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        products: items.map((item) => ({
          id: item.id,
          price: item.preco
        })),
        delivery: {
          receiver: values.recipient,
          address: {
            description: values.address,
            city: values.city,
            zipCode: values.cep,
            number: Number(values.streetNumber),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardDisplayName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expireMonth),
              year: Number(values.expireYear)
            }
          }
        }
      })
    }
  })

  const getTotalPrice = () => {
    return items.reduce((accum, currentValue) => {
      return (accum += currentValue.preco!)
    }, 0)
  }

  const goToDelivery = () => {
    if (items.length > 0) {
      setStage('delivery')
    }
  }

  const finishOrder = () => {
    setStage('cart')
    dispatch(close())
    dispatch(clear())
  }

  const closeModal = () => {
    if (isSuccess) {
      dispatch(close())
      dispatch(clear())
    }

    dispatch(close())
  }

  const goToPayment = () => {
    if (
      'recipient' in form.touched &&
      'address' in form.touched &&
      'city' in form.touched &&
      'cep' in form.touched &&
      'streetNumber' in form.touched
    ) {
      setStage('payment')
    }
  }

  useEffect(() => {
    setStage('cart')
  }, [items.length])

  useEffect(() => {
    setStage('finished')
  }, [isSuccess])

  if (items.length > 0) {
    return (
      <CartContainer className={isOpen ? 'is-open' : ''}>
        <Overlay onClick={closeModal} />
        <Sidebar>
          {stage === 'cart' && (
            <>
              <ul>
                {items.map((item) => (
                  <CartItem key={item.id}>
                    <img src={item.foto} />
                    <div>
                      <h3>{item.nome}</h3>
                      <span>{formatPrice(item.preco)}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => dispatch(remove(item.id))}
                    />
                  </CartItem>
                ))}
              </ul>
              <TotalContainer>
                <p>Valor total</p>
                <span>{formatPrice(getTotalPrice())}</span>
              </TotalContainer>
              <Button type="button" onClick={goToDelivery}>
                Continuar com a entrega
              </Button>
            </>
          )}
          <form onSubmit={form.handleSubmit}>
            {stage === 'delivery' && (
              <CheckoutContainer>
                <h3>Entrega</h3>
                <InputGroup width="100%">
                  <label htmlFor="recipient">Quem irá receber</label>
                  <input
                    type="text"
                    id="recipient"
                    name="recipient"
                    value={form.values.recipient}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{form.errors.recipient}</small>
                </InputGroup>
                <InputGroup width="100%">
                  <label htmlFor="address">Endereço</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={form.values.address}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{form.errors.address}</small>
                </InputGroup>
                <InputGroup width="100%">
                  <label htmlFor="city">Cidade</label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={form.values.city}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{form.errors.city}</small>
                </InputGroup>
                <ShortInputGroup gap="34px">
                  <InputGroup width="155px">
                    <label htmlFor="cep">CEP</label>
                    <InputMask
                      type="text"
                      id="cep"
                      name="cep"
                      mask="99999-999"
                      value={form.values.cep}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>{form.errors.cep}</small>
                  </InputGroup>
                  <InputGroup width="155px">
                    <label htmlFor="streetNumber">Número</label>
                    <input
                      type="number"
                      id="streetNumber"
                      name="streetNumber"
                      value={form.values.streetNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                    />
                    <small>{form.errors.streetNumber}</small>
                  </InputGroup>
                </ShortInputGroup>
                <InputGroup width="100%">
                  <label htmlFor="complement">Complemento (opcional)</label>
                  <input
                    type="text"
                    id="complement"
                    name="complement"
                    value={form.values.complement}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{form.errors.complement}</small>
                </InputGroup>
                <div className="margin-top">
                  <Button type="button" onClick={goToPayment}>
                    Continuar com o pagamento
                  </Button>
                  <Button type="button" onClick={() => setStage('cart')}>
                    Voltar para o carrinho
                  </Button>
                </div>
              </CheckoutContainer>
            )}
            {stage === 'payment' && (
              <CheckoutContainer>
                <h3>
                  Pagamento - Valor a pagar {formatPrice(getTotalPrice())}
                </h3>
                <InputGroup width="100%">
                  <label htmlFor="cardDisplayName">Nome no cartão</label>
                  <input
                    type="text"
                    id="cardDisplayName"
                    name="cardDisplayName"
                    value={form.values.cardDisplayName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>{form.errors.cardDisplayName}</small>
                </InputGroup>
                <ShortInputGroup gap="30px">
                  <InputGroup width="228px">
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <InputMask
                      type="text"
                      id="cardNumber"
                      name="cardNumber"
                      value={form.values.cardNumber}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="9999 9999 9999 9999"
                    />
                    <small>{form.errors.cardNumber}</small>
                  </InputGroup>
                  <InputGroup width="87px">
                    <label htmlFor="cardCode">CVV</label>
                    <InputMask
                      type="text"
                      id="cardCode"
                      name="cardCode"
                      value={form.values.cardCode}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="999"
                    />
                    <small>{form.errors.cardCode}</small>
                  </InputGroup>
                </ShortInputGroup>
                <ShortInputGroup gap="34px">
                  <InputGroup width="155px">
                    <label htmlFor="expireMonth">Mês de vencimento</label>
                    <InputMask
                      type="text"
                      id="expireMonth"
                      name="expireMonth"
                      value={form.values.expireMonth}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="99"
                    />
                    <small>{form.errors.expireMonth}</small>
                  </InputGroup>
                  <InputGroup width="155px">
                    <label htmlFor="expireYear">Ano de vencimento</label>
                    <InputMask
                      type="text"
                      id="expireYear"
                      name="expireYear"
                      value={form.values.expireYear}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
                      mask="99"
                    />
                    <small>{form.errors.expireYear}</small>
                  </InputGroup>
                </ShortInputGroup>
                <div className="margin-top">
                  <Button
                    disabled={isLoading}
                    type="submit"
                    title="Clique aqui para finalizar a compra"
                  >
                    {isLoading ? 'Finalizando...' : 'Finalizar pagamento'}
                  </Button>
                  <Button type="button" onClick={() => setStage('delivery')}>
                    Voltar para a edição de endereço
                  </Button>
                </div>
              </CheckoutContainer>
            )}
            {stage === 'finished' && (
              <CheckoutContainer>
                <h3>Pedido realizado - {isSuccess && data.orderId}</h3>
                <p>
                  Estamos felizes em informar que seu pedido já está em processo
                  de preparação e, em breve, será entregue no endereço
                  fornecido.
                </p>
                <p>
                  Gostaríamos de ressaltar que nossos entregadores não estão
                  autorizados a realizar cobranças extras.
                </p>
                <p>
                  Lembre-se da importância de higienizar as mãos após o
                  recebimento do pedido, garantindo assim sua segurança e
                  bem-estar durante a refeição.
                </p>
                <p>
                  Esperamos que desfrute de uma deliciosa e agradável
                  experiência gastronômica. Bom apetite!
                </p>
                <div className="margin-top">
                  <Button type="button" onClick={finishOrder}>
                    Concluir
                  </Button>
                </div>
              </CheckoutContainer>
            )}
          </form>
        </Sidebar>
      </CartContainer>
    )
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={() => dispatch(close())} />
      <Sidebar>
        <EmptyCart>
          O carrinho está vazio, adicione um produto para continuar.
        </EmptyCart>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
