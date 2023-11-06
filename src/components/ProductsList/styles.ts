import styled from 'styled-components'
import { breakpoints } from '../../styles'

export const ProductWrapper = styled.main`
  background-color: var(--bgColor);
  padding: 56px 0 120px 0;
`

export const ProductList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr;
  }
`
