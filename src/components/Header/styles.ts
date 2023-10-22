import styled from 'styled-components'

import backgroundImage from '../../images/header-vector.svg'

export const HeaderWrapper = styled.header`
  display: flex;
  background-color: var(--headerColor);
  background-image: url(${backgroundImage});
  background-size: cover;
  height: 128px;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

export const PageTitle = styled.h4`
  color: var(--mainColor);
  font-size: 18px;
  font-weight: 900;
  line-height: 21px;
`
