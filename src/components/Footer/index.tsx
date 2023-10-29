import { FooterWrapper, SocialMedia, DisclaimerText } from './styles'

import { Logo } from '../../styles'

import logo from '../../assets/images/logo.png'
import instagram from '../../assets/images/instagram.png'
import facebook from '../../assets/images/facebook.png'
import twitter from '../../assets/images/twitter.png'

const Footer = () => (
  <FooterWrapper>
    <Logo src={logo} alt="Logo" />
    <div>
      <SocialMedia src={instagram} alt="Instragram" />
      <SocialMedia src={facebook} alt="Facebook" />
      <SocialMedia src={twitter} alt="Twitter" />
    </div>
    <div className="disclaimer-wrapper">
      <DisclaimerText>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </DisclaimerText>
    </div>
  </FooterWrapper>
)

export default Footer
