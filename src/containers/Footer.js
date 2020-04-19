import React from "react";

import styled from "@emotion/styled";

const Container = styled.div`
  background-color: #f5f5f5;
`;

const Footer = ({ children }) => {
  return <Container>{children}</Container>;
};

export default Footer;
