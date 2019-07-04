import React from "react";

import styled from "@emotion/styled";

const FooterContainer = styled.div`
  background-color: #f5f5f5;
`;

const Footer = ({ children }) => {
  return <FooterContainer>{children}</FooterContainer>;
};

export default Footer;
