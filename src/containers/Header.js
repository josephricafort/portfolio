import React from "react";

import styled from "@emotion/styled";

import logo from "../images/jricafort-logo/logo.png"

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  margin-top: 48px;
`;
const Title = styled.h3`
  margin: 0;
`;
const Navbar = styled.div`
  margin: 0;
`;
const Navlink = styled.span`
  margin: 0 0 0 36px;
  font-size: 1.25em;
`;
const Logo = styled.div`
  height: 50px;
  width: 60px;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${logo});
  background-size: 60px 50px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      {/* <Title>Joseph Ricafort</Title> */}
      <Navbar>
        {/* <Navlink>Blog</Navlink> */}
        {/* <Navlink>
          <a href={"https://blog.josericafort.com"}>Blog</a>
        </Navlink> */}
        <Navlink>
          <a href={"#about"}>About</a>
        </Navlink>
        <Navlink>
          <a href={"#contact"}>Contact</a>
        </Navlink>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
