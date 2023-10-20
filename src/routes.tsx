import { Route, Routes } from 'react-router-dom'

import Home from './pages/Home'

const PageRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
)

export default PageRoutes
