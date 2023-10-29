import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { TagContainer } from '../Tag/styles'

export const CardWrapper = styled.li`
  max-height: 398px;
  height: 100%;
  max-width: 472px;
  background-color: #ffffff;
  position: relative;

  > img {
    max-width: 472px;
    max-height: 217px;
    width: 100%;
    margin-bottom: -5px;
  }
`

export const InformationWrapper = styled.div`
  color: var(--mainColor);
  padding: 8px 8px 12px;
  border: 1px solid var(--mainColor);

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  line-height: 22px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin-top: 16px;
  margin-bottom: 16px;
`

export const Rating = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: bold;

  span {
    margin-right: 8px;
  }

  img {
    width: 21px;
    height: 20px;
  }
`

export const Infos = styled.ul`
  position: absolute;
  top: 16px;
  right: 16px;

  ${TagContainer} {
    margin-left: 8px;
  }
`

export const Button = styled(Link)`
  background-color: var(--mainColor);
  color: var(--headerColor);
  padding: 4px 6px;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  line-height: 16px;
`
