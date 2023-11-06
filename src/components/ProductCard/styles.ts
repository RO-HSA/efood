import styled from 'styled-components'

export const Card = styled.li`
  background-color: var(--mainColor);
  max-height: 338px;
  height: 100%;
  max-width: 320px;
  width: 100%;
  padding: 8px;
`

export const ProductImage = styled.img`
  width: 304px;
  height: 166px;
`

export const ProductTitle = styled.h5`
  font-size: 16px;
  font-weight: 900;
  line-height: 17px;
  margin: 8px 0;
  color: var(--headerColor);
`

export const ProductDescription = styled.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 8px;
  color: var(--headerColor);
`

export const Button = styled.button`
  background-color: var(--headerColor);
  color: var(--mainColor);
  font-size: 14px;
  line-height: 16px;
  font-weight: bold;
  width: 100%;
  padding: 4px;
  cursor: pointer;
  border: none;
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  background-color: var(--mainColor);
  padding: 32px;
  height: 344px;
  width: 100%;
  z-index: 1;
  position: relative;
  display: flex;

  header {
    position: absolute;
    top: 8px;
    right: 8px;
    height: 16px;
    width: 16px;

    img {
      height: 16px;
      width: 16px;
      cursor: pointer;
    }
  }

  > img {
    height: 280px;
    width: 280px;
    object-fit: cover;
    margin-right: 24px;
  }

  div {
    max-width: 656px;
    flex-direction: column;

    ${ProductTitle} {
      font-size: 18px;
      line-height: 21px;
      margin-top: 0;
      margin-bottom: 16px;
      color: #ffffff;
    }

    ${ProductDescription} {
      color: #ffffff;
      margin-bottom: 16px;
    }

    ${Button} {
      width: 218px;
      justify-self: end;
    }
  }
`
