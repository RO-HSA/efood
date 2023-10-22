import { configureStore } from '@reduxjs/toolkit'

import restaurantReducer from './reducers/restaurants'

export const store = configureStore({
  reducer: {
    restaurant: restaurantReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
