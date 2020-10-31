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
        I used to work with large datasets as a test development engineer in the
        Philippines. I also do creative work as a hobby, playing around with
        presentations and infographics. I got fascinated with the idea of
        combining data, design and code together which led me to discover and
        brought me to the field of data visualizations and data stories.
      </p>
    </Container>
  );
};

export default Story;
