import styled from 'styled-components'

import backgroundImage from '../../images/header-vector.svg'

export const Background = styled.header`
  height: 384px;
  background-color: var(--headerColor);
  background-image: url(${backgroundImage});

  img {
    width: 125px;
    height: 57px;
    margin-top: 64px;
    margin-bottom: 138px;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
      text-align: center;
      max-width: 539px;
    }
  }
`

export const HeroTitle = styled.h1`
  color: var(--mainColor);
  font-size: 36px;
  font-weight: 900;
  line-height: 42px;
`
