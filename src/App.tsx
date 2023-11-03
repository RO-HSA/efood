import { BrowserRouter } from 'react-router-dom'
import PageRoutes from './routes'
import { GlobalStyles } from './styles'
import Cart from './components/Cart'
import { Provider } from 'react-redux'
import { store } from './store'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyles />
        <PageRoutes />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
