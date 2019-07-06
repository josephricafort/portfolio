import React from "react";

import styled from "@emotion/styled";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 28px;
`;
const Title = styled.h3``;
const Navbar = styled.h3``;
const Navlink = styled.span`
  margin: 0 0 0 36px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Joseph Ricafort</Title>
      <Navbar>
        {/* <Navlink>Blog</Navlink> */}
        <Navlink>
          <a href={"#about"}>About</a>
        </Navlink>
        <Navlink>
          <a href={"#about"}>Contact</a>
        </Navlink>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
