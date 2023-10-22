import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import { Product } from '../../App'
import { MainWrapper } from '../../styles'
import ProductCard from '../ProductCard'
import { ProductListWrapper } from './styles'

import Banner from '../Banner'
import pizzaImage from '../../images/pizza-margerita.png'
import uramakiImage from '../../images/uramaki.jpg'
import hioki from '../../images/banner-hioki.jpg'
import trattoria from '../../images/banner-trattoria.png'

const products: Product[] = [
  {
    restaurant: 'Hioki Sushi',
    nationality: 'Japonesa',
    title: 'Uramaki',
    description:
      'Delicie-se com o Uramaki Especial do Chef, uma obra-prima da culinária japonesa que combina os sabores frescos e requintados do oceano em cada mordida.',
    image: uramakiImage
  },
  {
    restaurant: 'Hioki Sushi',
    nationality: 'Japonesa',
    title: 'Uramaki',
    description:
      'Delicie-se com o Uramaki Especial do Chef, uma obra-prima da culinária japonesa que combina os sabores frescos e requintados do oceano em cada mordida.',
    image: uramakiImage
  },
  {
    restaurant: 'Hioki Sushi',
    nationality: 'Japonesa',
    title: 'Uramaki',
    description:
      'Delicie-se com o Uramaki Especial do Chef, uma obra-prima da culinária japonesa que combina os sabores frescos e requintados do oceano em cada mordida.',
    image: uramakiImage
  },
  {
    restaurant: 'Hioki Sushi',
    nationality: 'Japonesa',
    title: 'Uramaki',
    description:
      'Delicie-se com o Uramaki Especial do Chef, uma obra-prima da culinária japonesa que combina os sabores frescos e requintados do oceano em cada mordida.',
    image: uramakiImage
  },
  {
    restaurant: 'Hioki Sushi',
    nationality: 'Japonesa',
    title: 'Uramaki',
    description:
      'Delicie-se com o Uramaki Especial do Chef, uma obra-prima da culinária japonesa que combina os sabores frescos e requintados do oceano em cada mordida.',
    image: uramakiImage
  },
  {
    restaurant: 'Hioki Sushi',
    nationality: 'Japonesa',
    title: 'Uramaki',
    description:
      'Delicie-se com o Uramaki Especial do Chef, uma obra-prima da culinária japonesa que combina os sabores frescos e requintados do oceano em cada mordida.',
    image: uramakiImage
  },
  {
    restaurant: 'La Dolce Vita Trattoria',
    nationality: 'Italiana',
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaImage
  },
  {
    restaurant: 'La Dolce Vita Trattoria',
    nationality: 'Italiana',
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaImage
  },
  {
    restaurant: 'La Dolce Vita Trattoria',
    nationality: 'Italiana',
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaImage
  },
  {
    restaurant: 'La Dolce Vita Trattoria',
    nationality: 'Italiana',
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaImage
  },
  {
    restaurant: 'La Dolce Vita Trattoria',
    nationality: 'Italiana',
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaImage
  },
  {
    restaurant: 'La Dolce Vita Trattoria',
    nationality: 'Italiana',
    title: 'Pizza Marguerita',
    description:
      'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
    image: pizzaImage
  }
]

const ProductsList = () => {
  const restaurant = useSelector(
    (state: RootReducer) => state.restaurant.selectedRestaurant
  )

  const matchedRestaurant = products.find((p) => p.restaurant === restaurant)
  const filteredRestaurant = products.filter((p) => p.restaurant === restaurant)

  return (
    <>
      <Banner
        title={matchedRestaurant?.restaurant}
        subtitle={matchedRestaurant?.nationality}
        coverImage={
          matchedRestaurant?.restaurant === 'La Dolce Vita Trattoria'
            ? trattoria
            : hioki
        }
      />
      <MainWrapper>
        <div className="container">
          <ProductListWrapper>
            {filteredRestaurant.map(({ title, description, image }) => (
              <ProductCard
                key={title}
                title={title}
                description={description}
                image={image}
              />
            ))}
          </ProductListWrapper>
        </div>
      </MainWrapper>
    </>
  )
}

export default ProductsList
