import React from "react";

import styled from "@emotion/styled";

const Container = styled.div`
  // flex: 1 1 360px;
  // max-width: 480px;
  // padding-right: 60px;
`;

const Story = () => {
  return (
    <Container>
      <h2>About Me</h2>
      <p>
        My experiences working in a semiconducter manufacturing, IoT startup and
        a dataviz design studio led me to develop my interests in data, design
        and development.
      </p>
      <p>
        At the moment, I am crafting interactive stories for The Straits Times
        in Singapore.
      </p>
    </Container>
  );
};

export default Story;
