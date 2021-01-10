import { DiScala } from "react-icons/Di"
import styled from "styled-components"
import { Link } from "gatsby"

export const Nav = styled.nav`
  background: ${({ active }) =>
    active
      ? "#fff"
      : "linear-gradient(to bottom, rgba(255,255,255,.9) 0%, rgba(255,255,255,0)100%)"};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 1000;

  @media screen and (max-width: 960px) {
    background: ${({ click }) => (click ? "#fff" : "transparent")};
    transition: 0.8s all ease;
  }
`

export const NavbarContainer = styled.div`
  width: 100%;
  max-width: 1000;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
`

export const NavLogo = styled(Link)`
  color: #141414;
  display: flex;
  justify-self: flex-start;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
`

export const NavIcon = styled(DiScala)`
  margin: 0 0.5rem 0 2rem;
`

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`
