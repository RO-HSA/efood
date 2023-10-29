import ProductCard from '../ProductCard'
import { ProductList, ProductWrapper } from './styles'
import { Menu } from '../../pages/Home'

type Props = {
  products: Menu[]
}

const ProductsList = ({ products }: Props) => {
  return (
    <>
      <ProductWrapper>
        <div className="container">
          <ProductList>
            {products.map((product) => (
              <li key={product.id}>
                <ProductCard
                  id={product.id}
                  portion={product.porcao}
                  price={product.preco}
                  title={product.nome}
                  description={product.descricao}
                  image={product.foto}
                />
              </li>
            ))}
          </ProductList>
        </div>
      </ProductWrapper>
    </>
  )
}

export default ProductsList
