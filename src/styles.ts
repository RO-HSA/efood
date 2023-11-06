import styled, { createGlobalStyle } from 'styled-components'

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalStyles = createGlobalStyle`
  :root {
    --headerColor: #FFEBD9;
    --bgColor: #FFF8F2;
    --mainColor: #E66767;
    --gray: #4B4B4B;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`

export const Logo = styled.img`
  width: 125px;
  height: 57px;
`
