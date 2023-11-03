import { useState } from 'react'
import { useDispatch } from 'react-redux'

import {
  Card,
  ProductTitle,
  ProductDescription,
  Button,
  ProductImage,
  Modal,
  ModalContent
} from './styles'
import { Menu } from '../../pages/Home'
import slicer from '../../utils/stringSlicer'
import formatPrice from '../../utils/currencyFormatter'

import closeButton from '../../assets/images/close.png'
import { add, open } from '../../store/reducers/cart'

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
  const dispatch = useDispatch()

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

  const addToCart = (
    id: number,
    nome: string,
    foto: string,
    descricao: string,
    porcao: string,
    preco: number
  ) => {
    dispatch(
      add({
        id,
        nome,
        foto,
        descricao,
        porcao,
        preco
      })
    )
    closeModal()
    dispatch(open())
  }

  return (
    <>
      <Card>
        <ProductImage src={image} alt={title} />
        <ProductTitle>{title}</ProductTitle>
        <ProductDescription>{slicer(description, 171)}</ProductDescription>
        <Button
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
        </Button>
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
            <Button
              type="button"
              onClick={() =>
                addToCart(id, title, image, description, portion, price)
              }
            >
              Adicionar ao carrinho - {formatPrice(price)}
            </Button>
          </div>
        </ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </Modal>
    </>
  )
}

export default ProductCard
