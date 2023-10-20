import { Background, HeroTitle } from './styles'
import logo from '../../images/logo.png'

const Hero = () => (
  <Background>
    <div className="container">
      <img src={logo} alt="Logo" />
      <div>
        <HeroTitle>
          Viva experiências gastronômicas no conforto da sua casa
        </HeroTitle>
      </div>
    </div>
  </Background>
)

export default Hero
