import { Background, HeroTitle } from './styles'
import logo from '../../assets/images/logo.png'
import { Logo } from '../../styles'

const Hero = () => (
  <Background>
    <div className="container">
      <Logo src={logo} alt="Logo" />
      <div>
        <HeroTitle>
          Viva experiências gastronômicas no conforto da sua casa
        </HeroTitle>
      </div>
    </div>
  </Background>
)

export default Hero
