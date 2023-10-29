import { useParams } from 'react-router-dom'
import { BannerSubtitle, BannerTitle, BannerWrapper } from './styles'
import { useEffect, useState } from 'react'
import { Restaurant } from '../../pages/Home'

const Banner = () => {
  const { id } = useParams()
  const [products, setProducts] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setProducts(res))
  }, [id])

  const capitalizeType = (type: string) => {
    const capitalizedType = type.charAt(0).toUpperCase() + type.slice(1)
    return capitalizedType
  }

  if (!products) {
    return <h3>Carregando...</h3>
  }

  return (
    <BannerWrapper style={{ backgroundImage: `url(${products?.capa})` }}>
      <div className="container">
        <BannerSubtitle>{capitalizeType(products.tipo)}</BannerSubtitle>
        <BannerTitle>{products.titulo}</BannerTitle>
      </div>
    </BannerWrapper>
  )
}

export default Banner
