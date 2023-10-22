import { BannerSubtitle, BannerTitle, BannerWrapper } from './styles'

export type Props = {
  title: string | undefined
  subtitle: string | undefined
  coverImage: string
}

const Banner = ({ title, subtitle, coverImage }: Props) => (
  <BannerWrapper coverImage={coverImage}>
    <div className="container">
      <BannerSubtitle>{subtitle}</BannerSubtitle>
      <BannerTitle>{title}</BannerTitle>
    </div>
  </BannerWrapper>
)

export default Banner
