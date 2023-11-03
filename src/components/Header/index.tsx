import { useDispatch, useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import { HeaderWrapper, PageTitle } from './styles'
import logo from '../../assets/images/logo.png'
import { Logo } from '../../styles'
import { open } from '../../store/reducers/cart'

const Header = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  return (
    <HeaderWrapper>
      <div className="container">
        <PageTitle to={'/'}>Restaurantes</PageTitle>
        <Logo src={logo} alt="logo" />
        <h4 onClick={() => dispatch(open())}>
          {items.length} produto(s) no carrinho
        </h4>
      </div>
    </HeaderWrapper>
  )
}

export default Header
