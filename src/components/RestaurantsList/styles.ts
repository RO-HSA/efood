import styled from 'styled-components'

export const RestaurantWrapper = styled.main`
  background-color: var(--bgColor);
  padding: 80px 0 120px 0;
`

export const RestaurantList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
`
