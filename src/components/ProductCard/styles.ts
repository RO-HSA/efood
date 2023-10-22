import styled from 'styled-components'

export const Card = styled.li`
  background-color: var(--mainColor);
  height: 338px;
  width: 320px;
  padding: 8px;
  color: var(--headerColor);
`

export const ProductImage = styled.img`
  width: 304px;
  height: 167px;
`

export const ProductTitle = styled.h5`
  font-size: 16px;
  font-weight: 900;
  line-height: 18px;
  margin: 8px 0;
`

export const ProductDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  padding-bottom: 8px;
`

export const ProductBtn = styled.button`
  background-color: var(--headerColor);
  color: var(--mainColor);
  font-size: 14px;
  line-height: 16px;
  font-weight: 700;
  width: 100%;
  padding: 4px;
  cursor: pointer;
  border: none;
`
