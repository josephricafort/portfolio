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
  margin: 0 0 0 24px;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Title>Joseph Ricafort</Title>
      <Navbar>
        <Navlink>About</Navlink>
        <Navlink>Contact</Navlink>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
