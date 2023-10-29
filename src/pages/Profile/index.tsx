import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import ProductsList from '../../components/ProductsList'
import { Menu } from '../Home'

const Profile = () => {
  const { id } = useParams()
  const [cardapio, setCardapio] = useState<Menu[]>([])

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setCardapio(res.cardapio))
  }, [id])

  return (
    <>
      <Header />
      <Banner />
      <ProductsList products={cardapio} />
      <Footer />
    </>
  )
}

export default Profile
