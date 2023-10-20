import { BrowserRouter } from 'react-router-dom'
import PageRoutes from './routes'
import { GlobalStyles } from './styles'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <PageRoutes />
    </BrowserRouter>
  )
}

export default App
