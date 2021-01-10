import styled from "styled-components"
import heroImage from "../../images/background2.jpg"

export const Wrapper = styled.div`
  background: url(${heroImage}) center center/cover no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
  object-fit: contain;
  margin-top: -80px;
`

export const HeroTitle = styled.h1`
  color: #fff;
  font-size: 100px;
  margin-top: 0;

  @media screen and (max-width: 960px) {
    font-size: 70px;
  }

  @media screen and (max-width: 768px) {
    font-size: 60px;
  }
`

export const HeroDescription = styled.p`
  margin-top: 8px;
  color: white;
  font-size: 32px;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`

export const HeroButton = styled.button`
  margin-top: 32px;
`
