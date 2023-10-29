import { configureStore } from '@reduxjs/toolkit'

import restaurantReducer from './reducers/restaurants'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    restaurant: restaurantReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
