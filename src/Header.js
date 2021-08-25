/* eslint-disable react/prop-types */
import React, { useState } from "react";
import styled from "styled-components";
import { BsHouseFill, BsJustify, BsCircleHalf } from "react-icons/bs";
import { Link } from "react-router-dom";

function Header({ handleSwitchTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <HeaderContainer>
        <Navbar>
          <HomeIcon>
            <NavLink to="/personal-portfolio">
              <BsHouseFill />
            </NavLink>
          </HomeIcon>
          <MenuIcon onClick={toggle}>
            <BsJustify />
          </MenuIcon>
          <NavOL>
            <NavList>
              <NavLink to="/personal-portfolio/about">About</NavLink>
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

          <MobileMenu isOpen={isOpen} onClick={toggle}>
            <MobileMenuOL>
              <MobileList>
                <MobileSwitchThemeIcon onClick={handleSwitchTheme}>
                  <BsCircleHalf />
                </MobileSwitchThemeIcon>
              </MobileList>
              <MobileList>
                <NavLink to="/personal-portfolio/about">About</NavLink>
              </MobileList>
              <MobileList>
                <NavLink to="project">Project</NavLink>
              </MobileList>
              <MobileList>
                <NavLink to="resume">Resume</NavLink>
              </MobileList>
              <MobileList>
                <NavLink to="contact">Contact</NavLink>
              </MobileList>
            </MobileMenuOL>
          </MobileMenu>
        </Navbar>
      </HeaderContainer>
    </div>
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
  transition: 0.3s all ease;
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

const MobileMenu = styled.div`
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  position: fixed;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  z-index: 999;
  height: 190vh;
  width: 100%;
  background: ${(props) => props.theme.bgc};
  right: 1px;
  transition: 0.3s all ease;
`;

const MobileMenuOL = styled.ul`
  z-index: 999;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  width: 100%;
  margin: auto;
  height: 190vh;
`;

const MobileList = styled.li`
  z-index: 999;
  position: relative;
  list-style: none;
  top: 25rem;
  margin: 2rem 0;
`;

const MobileSwitchThemeIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
