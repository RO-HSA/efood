import { HeaderWrapper, PageTitle } from './styles'

import logo from '../../assets/images/logo.png'
import { Logo } from '../../styles'

const Header = () => (
  <HeaderWrapper>
    <div className="container">
      <PageTitle>Restaurantes</PageTitle>
      <Logo src={logo} alt="logo" />
      <PageTitle>0 produtos no carrinho</PageTitle>
    </div>
  </HeaderWrapper>
)

export default Header
