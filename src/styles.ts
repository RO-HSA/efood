import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --headerColor: #FFEBD9;
    --bgColor: #FFF8F2;
    --mainColor: #E66767;
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

export const MainWrapper = styled.main`
  background-color: var(--bgColor);
  padding: 80px 0 120px 0;
`
