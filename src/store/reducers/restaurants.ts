import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { Restaurant } from '../../pages/Home'
type RestaurantState = {
  items: Restaurant[]
}

const initialState: RestaurantState = {
  items: []
}

const restaurantSlice = createSlice({
  name: 'restaurants',
  initialState,
  reducers: {
    select: (state, action: PayloadAction<Restaurant>) => {
      state.items.push(action.payload)
    }
  }
})

export const { select } = restaurantSlice.actions
export default restaurantSlice.reducer
