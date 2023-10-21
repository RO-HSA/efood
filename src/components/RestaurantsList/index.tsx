import RestaurantCard from '../RestaurantCard'
import { MainWrapper, ListWrapper } from './styles'

import hiokiCover from '../../images/hioki-cover.png'
import trattoriaCover from '../../images/tarttoria.png'

const hiokiDescription =
  'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!'

const trattoriaDescription =
  'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
const RestaurantsList = () => (
  <MainWrapper>
    <div className="container">
      <ListWrapper>
        <RestaurantCard
          cover={hiokiCover}
          title="Hioki Sushi"
          rating={4.9}
          tags={['Destaque da semana', 'Japonesa']}
          description={hiokiDescription}
        />
        <RestaurantCard
          cover={trattoriaCover}
          title="La Dolce Vita Trattoria"
          rating={4.6}
          tags={['Italiana']}
          description={trattoriaDescription}
        />
        <RestaurantCard
          cover={trattoriaCover}
          title="La Dolce Vita Trattoria"
          rating={4.6}
          tags={['Italiana']}
          description={trattoriaDescription}
        />
        <RestaurantCard
          cover={trattoriaCover}
          title="La Dolce Vita Trattoria"
          rating={4.6}
          tags={['Italiana']}
          description={trattoriaDescription}
        />
        <RestaurantCard
          cover={trattoriaCover}
          title="La Dolce Vita Trattoria"
          rating={4.6}
          tags={['Italiana']}
          description={trattoriaDescription}
        />
        <RestaurantCard
          cover={trattoriaCover}
          title="La Dolce Vita Trattoria"
          rating={4.6}
          tags={['Italiana']}
          description={trattoriaDescription}
        />
      </ListWrapper>
    </div>
  </MainWrapper>
)

export default RestaurantsList
