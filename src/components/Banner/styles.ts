import styled from 'styled-components'

export const BannerSubtitle = styled.h3`
  font-size: 32px;
  line-height: 38px;
  font-weight: 100;
  position: relative;
  color: rgba(255, 255, 255, 0.7);
`

export const BannerTitle = styled.h2`
  font-size: 32px;
  line-height: 38px;
  font-weight: 900;
  position: relative;
  color: #ffffff;
`

export const BannerWrapper = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  height: 280px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
  }

  ${BannerTitle} {
    margin-top: 180px;
  }

  ${BannerSubtitle} {
    top: 24px;
  }
`
