import React from "react";

import styled from "@emotion/styled";
import ContainerUI from "@material-ui/core/Container";

import Story from "../components/About/Story";
import Experience from "../components/About/Experience";
import Skills from "../components/About/Skills/Skills";

const Container = styled.div`
  display: flex;
  margin: 120px 0;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 400px) {
    flex-basis: 100%;
  }
`;

const Column = styled.div`
  flex: 1 1 360px;
  max-width: 480px;
  padding-right: 60px;
`;

const About = () => {
  return (
    <ContainerUI>
      <Container id="about">
        <Column>
          <Story />
          <Skills />
        </Column>
        <Column>
          {/* <Recognitions /> */}
          <Experience />
        </Column>
      </Container>
    </ContainerUI>
  );
};

export default About;
