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
        My experiences working in a semiconducter manufacturing, an IoT startup,
        a dataviz design studio and a newsroom led me to develop my interests
        and skills in data, design and development.
      </p>
    </Container>
  );
};

export default Story;
