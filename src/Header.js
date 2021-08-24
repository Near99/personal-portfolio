import React from "react";
import styled from "styled-components";
import { BsHouseFill, BsJustify, BsCircleHalf } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header({ handleSwitchTheme }) {
  return (
    <HeaderContainer>
      <Navbar>
        <HomeIcon>
          <NavLink to="/">
            <BsHouseFill />
          </NavLink>
        </HomeIcon>
        <MenuIcon>
          <BsJustify />
        </MenuIcon>
        <NavOL>
          <NavList>
            <NavLink to="about">About</NavLink>
          </NavList>
          <NavList>
            <NavLink to="project">Project</NavLink>
          </NavList>
          <NavList>
            <NavLink to="resume">Resume</NavLink>
          </NavList>
          <NavList>
            <NavLink to="contact">Contact</NavLink>
          </NavList>
          <SwitchThemeIcon onClick={handleSwitchTheme}>
            <BsCircleHalf />
          </SwitchThemeIcon>
        </NavOL>
      </Navbar>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  position: sticky;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 100%;
  z-index: 3;
  background-color: ${(props) => props.theme.bgc};
  color: ${(props) => props.theme.textc};
  transition: all 0.2s ease;
`;

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 70%;
`;

const HomeIcon = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
`;

const MenuIcon = styled.div`
  visibility: hidden;

  @media screen and (max-width: 768px) {
    visibility: visible;
    font-size: 1.5rem;
    color: #0ba180;
  }
`;

const SwitchThemeIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 2rem;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavOL = styled.ol`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const NavList = styled.li`
  list-style: none;
  padding: 0 1rem;
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.textc};

  &:active {
    border-bottom: 2px solid green;
  }
`;
