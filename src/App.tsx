import { BrowserRouter } from 'react-router-dom'
import PageRoutes from './routes'
import { GlobalStyles } from './styles'
import { Provider } from 'react-redux'
import { store } from './store'

export type Product = {
  restaurant: string
  nationality: string
  title: string
  description: string
  image: string
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <PageRoutes />
      </BrowserRouter>
    </Provider>
  )
}

export default App
