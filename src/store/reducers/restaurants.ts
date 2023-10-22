import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Restaurant } from '../../App'

import hiokiCover from '../../images/hioki-cover.png'
import trattoriaCover from '../../images/trattoria-cover.png'

const hiokiDescription =
  'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!'

const trattoriaDescription =
  'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'

type RestaurantState = {
  items: Restaurant[]
  selectedRestaurant: string
}

const initialState: RestaurantState = {
  items: [
    {
      id: 1,
      cover: hiokiCover,
      title: 'Hioki Sushi',
      rating: 4.9,
      tags: ['Destaque da semana', 'Japonesa'],
      description: hiokiDescription
    },
    {
      id: 2,
      cover: trattoriaCover,
      title: 'La Dolce Vita Trattoria',
      rating: 4.6,
      tags: ['Italiana'],
      description: trattoriaDescription
    },
    {
      id: 3,
      cover: trattoriaCover,
      title: 'La Dolce Vita Trattoria',
      rating: 4.6,
      tags: ['Italiana'],
      description: trattoriaDescription
    },
    {
      id: 4,
      cover: trattoriaCover,
      title: 'La Dolce Vita Trattoria',
      rating: 4.6,
      tags: ['Italiana'],
      description: trattoriaDescription
    },
    {
      id: 5,
      cover: trattoriaCover,
      title: 'La Dolce Vita Trattoria',
      rating: 4.6,
      tags: ['Italiana'],
      description: trattoriaDescription
    },
    {
      id: 6,
      cover: trattoriaCover,
      title: 'La Dolce Vita Trattoria',
      rating: 4.6,
      tags: ['Italiana'],
      description: trattoriaDescription
    }
  ],
  selectedRestaurant: ''
}

const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    select: (state, action: PayloadAction<string>) => {
      const restaurantPayload = action.payload
      state.selectedRestaurant = restaurantPayload
    }
  }
})

export const { select } = restaurantSlice.actions
export default restaurantSlice.reducer
