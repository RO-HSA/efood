import { useParams } from 'react-router-dom'

import { BannerSubtitle, BannerTitle, BannerWrapper } from './styles'
import { useGetMenuQuery } from '../../services/api'

const Banner = () => {
  const { id } = useParams()
  const { data: products } = useGetMenuQuery(id!)

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
