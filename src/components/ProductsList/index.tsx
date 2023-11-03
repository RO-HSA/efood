import ProductCard from '../ProductCard'
import { ProductList, ProductWrapper } from './styles'
import { Menu } from '../../pages/Home'

type Props = {
  products: Menu[]
}

const ProductsList = ({ products }: Props) => {
  if (!products) {
    return <h4>Carregando...</h4>
  }

  return (
    <>
      <ProductWrapper>
        <div className="container">
          <ProductList>
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                portion={product.porcao}
                price={product.preco}
                title={product.nome}
                description={product.descricao}
                image={product.foto}
              />
            ))}
          </ProductList>
        </div>
      </ProductWrapper>
    </>
  )
}

export default ProductsList
