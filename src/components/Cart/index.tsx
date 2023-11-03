import { useDispatch, useSelector } from 'react-redux'

import {
  CartContainer,
  CartItem,
  Overlay,
  Sidebar,
  TotalContainer
} from './styles'
import { Button } from '../ProductCard/styles'
import { RootReducer } from '../../store'
import formatPrice from '../../utils/currencyFormatter'
import { close, remove } from '../../store/reducers/cart'

const Cart = () => {
  const isOpen = useSelector((state: RootReducer) => state.cart.isOpen)
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const getTotalPrice = () => {
    return items.reduce((accum, currentValue) => {
      return (accum += currentValue.preco!)
    }, 0)
  }

  return (
    <CartContainer className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={() => dispatch(close())} />
      <Sidebar>
        <ul>
          {items.map((item) => (
            <CartItem key={item.id}>
              <img src={item.foto} />
              <div>
                <h3>{item.nome}</h3>
                <span>{formatPrice(item.preco)}</span>
              </div>
              <button type="button" onClick={() => dispatch(remove(item.id))} />
            </CartItem>
          ))}
        </ul>
        <TotalContainer>
          <p>Valor total</p>
          <span>{formatPrice(getTotalPrice())}</span>
        </TotalContainer>
        <Button type="button">Continuar com a entrega</Button>
      </Sidebar>
    </CartContainer>
  )
}

export default Cart
