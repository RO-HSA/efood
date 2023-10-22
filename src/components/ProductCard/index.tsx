import {
  Card,
  ProductTitle,
  ProductDescription,
  ProductBtn,
  ProductImage
} from './styles'

type Props = {
  title: string
  description: string
  image: string
}

const ProductCard = ({ title, description, image }: Props) => (
  <>
    <Card>
      <ProductImage src={image} alt={title} />
      <ProductTitle>{title}</ProductTitle>
      <ProductDescription>{description}</ProductDescription>
      <ProductBtn>Adicionar ao carrinho</ProductBtn>
    </Card>
  </>
)

export default ProductCard
