import { useSelector } from 'react-redux'

import { RootReducer } from '../../store'
import RestaurantCard from '../RestaurantCard'

import { MainWrapper } from '../../styles'
import { RestaurantListWrapper } from './styles'

const RestaurantsList = () => {
  const { items } = useSelector((state: RootReducer) => state.restaurant)

  return (
    <MainWrapper>
      <div className="container">
        <RestaurantListWrapper>
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
        </RestaurantListWrapper>
      </div>
    </MainWrapper>
  )
}

export default RestaurantsList
