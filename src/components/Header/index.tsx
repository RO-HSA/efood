import { HeaderWrapper, PageTitle } from './styles'

import logo from '../../assets/images/logo.png'
import { Logo } from '../../styles'

const Header = () => (
  <HeaderWrapper>
    <div className="container">
      <PageTitle to={'/'}>Restaurantes</PageTitle>
      <Logo src={logo} alt="logo" />
      <h4>0 produtos no carrinho</h4>
    </div>
  </HeaderWrapper>
)

export default Header
