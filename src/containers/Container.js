import React from "react";

import ContainerUI from "@material-ui/core/Container";

const Container = ({ children }) => {
  return <ContainerUI maxWidth="xl">{children}</ContainerUI>;
};

export default Container;
