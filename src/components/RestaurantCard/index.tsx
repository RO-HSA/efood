import {
  Button,
  CardWrapper,
  Description,
  InformationWrapper,
  Infos,
  Rating,
  Title
} from './styles'

import star from '../../assets/images/star.png'
import Tag from '../Tag'
import slicer from '../../utils/stringSlicer'

type Props = {
  id: number
  cover: string
  tags: string[]
  title: string
  rating: number
  description: string
}

const RestaurantCard = ({
  id,
  cover,
  tags,
  title,
  rating,
  description
}: Props) => {
  return (
    <CardWrapper>
      <img src={cover} alt={title} />
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
        <Description>{slicer(description, 248)}</Description>
        <Button to={`/profile/${id}`} type="button">
          Saiba mais
        </Button>
      </InformationWrapper>
    </CardWrapper>
  )
}

export default RestaurantCard
