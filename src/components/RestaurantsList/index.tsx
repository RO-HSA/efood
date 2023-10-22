import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import RestaurantCard from '../RestaurantCard'

import { RestaurantList, RestaurantWrapper } from './styles'

const RestaurantsList = () => {
  const { items } = useSelector((state: RootReducer) => state.restaurant)

  return (
    <RestaurantWrapper>
      <div className="container">
        <RestaurantList>
          {items.map((item) => (
            <RestaurantCard
              key={item.id}
              cover={item.cover}
              title={item.title}
              rating={item.rating}
              tags={item.tags}
              description={item.description}
            />
          ))}
        </RestaurantList>
      </div>
    </RestaurantWrapper>
  )
}

export default RestaurantsList
