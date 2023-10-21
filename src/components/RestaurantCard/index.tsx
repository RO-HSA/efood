import {
  Button,
  CardWrapper,
  Description,
  InformationWrapper,
  Infos,
  Rating,
  Title
} from './styles'

import star from '../../images/star.png'
import Tag from '../Tag'

type Props = {
  cover: string
  tags: string[]
  title: string
  rating: number
  description: string
}

const RestaurantCard = ({ cover, tags, title, rating, description }: Props) => (
  <CardWrapper>
    <img src={cover} alt="Hioki Sushi Cover" />
    <Infos>
      {tags.map((tag) => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </Infos>
    <InformationWrapper>
      <div>
        <Title>{title}</Title>
        <Rating>
          <span>{rating}</span>
          <img src={star} alt="Star" />
        </Rating>
      </div>
      <Description>{description}</Description>
      <Button to={'/profile'} type="button">
        Saiba mais
      </Button>
    </InformationWrapper>
  </CardWrapper>
)

export default RestaurantCard
