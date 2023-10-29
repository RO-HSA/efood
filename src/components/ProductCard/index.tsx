import {
  Card,
  ProductTitle,
  ProductDescription,
  ProductBtn,
  ProductImage,
  Modal,
  ModalContent
} from './styles'

import slicer from '../../utils/stringSlicer'
import formatPrice from '../../utils/currencyFormatter'

import closeButton from '../../assets/images/close.png'
import { useState } from 'react'
import { Menu } from '../../pages/Home'

type Props = {
  title: string
  description: string
  image: string
  portion: string
  price: number
  id: number
}

interface ModalState extends Menu {
  isVisible: boolean
}

const ProductCard = ({
  title,
  description,
  image,
  portion,
  price,
  id
}: Props) => {
  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    nome: '',
    descricao: '',
    foto: '',
    porcao: '',
    preco: 0,
    id: 1
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      nome: '',
      descricao: '',
      foto: '',
      porcao: '',
      preco: 0,
      id: 1
    })
  }

  return (
    <>
      <Card>
        <ProductImage src={image} alt={title} />
        <ProductTitle>{title}</ProductTitle>
        <ProductDescription>{slicer(description, 171)}</ProductDescription>
        <ProductBtn
          onClick={() => {
            setModal({
              isVisible: true,
              nome: title,
              descricao: description,
              foto: image,
              porcao: portion,
              preco: price,
              id: id
            })
          }}
        >
          Mais detalhes
        </ProductBtn>
      </Card>
      <Modal className={modal.isVisible ? 'visible' : ''}>
        <ModalContent className="container">
          <header>
            <img src={closeButton} alt="Fechar" onClick={() => closeModal()} />
          </header>
          <img src={image} />
          <div>
            <ProductTitle>{title}</ProductTitle>
            <ProductDescription>{description}</ProductDescription>
            <ProductDescription>Serve: de {portion}</ProductDescription>
            <ProductBtn>
              Adicionar ao carrinho - {formatPrice(price)}
            </ProductBtn>
          </div>
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default ProductCard
