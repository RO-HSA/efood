import styled from 'styled-components'
import { Logo } from '../../styles'

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: var(--mainColor);
  background-color: var(--headerColor);
  max-height: 298px;
  height: 100%;

  ${Logo} {
    margin-top: 40px;
    margin-bottom: 32px;
  }

  .disclaimer-wrapper {
    max-width: 480px;
  }
`

export const SocialMedia = styled.img`
  margin-right: 8px;
`

export const DisclaimerText = styled.p`
  font-size: 10px;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 40px;
`
