import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'
import { useGetMenuQuery } from '../../services/api'

const Profile = () => {
  const { id } = useParams()
  const { data: menu } = useGetMenuQuery(id!)

  if (!menu) {
    return <h4>Carregando...</h4>
  }

  return (
    <>
      <Header />
      <Banner />
      <ProductsList products={menu.cardapio} />
      <Footer />
    </>
  )
}

export default Profile
