import { BrowserRouter } from 'react-router-dom'
import PageRoutes from './routes'
import { GlobalStyles } from './styles'

export type Product = {
  restaurant: string
  nationality: string
  title: string
  description: string
  image: string
}

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <PageRoutes />
    </BrowserRouter>
  )
}

export default App
