import { useGetRestaurantsQuery } from '../../services/api'
import RestaurantCard from '../RestaurantCard'
import { RestaurantList, RestaurantWrapper } from './styles'
import { Restaurant } from '../../pages/Home'

const RestaurantsList = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  const getRestaurantTags = (restaurant: Restaurant) => {
    const tags = []

    if (restaurant.destacado) {
      tags.push('Destaque da semana')
    }

    if (restaurant.tipo) {
      const capitalizedString =
        restaurant.tipo.charAt(0).toUpperCase() + restaurant.tipo.slice(1)
      tags.push(capitalizedString)
    }

    return tags
  }

  return (
    <RestaurantWrapper>
      <div className="container">
        <RestaurantList>
          {restaurants?.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              id={restaurant.id}
              cover={restaurant.capa}
              title={restaurant.titulo}
              rating={restaurant.avaliacao}
              tags={getRestaurantTags(restaurant)}
              description={restaurant.descricao}
            />
          ))}
        </RestaurantList>
      </div>
    </RestaurantWrapper>
  )
}

export default RestaurantsList
