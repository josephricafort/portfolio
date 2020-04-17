import React from "react";

import styled from "@emotion/styled";
import Story from "../components/About/Story";
import Recognitions from "../components/About/Recognitions";
import Experience from "../components/About/Experience";

const Container = styled.div`
  display: flex;
  margin: 120px 0;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 400px) {
    flex-basis: 100%;
  }
`;

const About = () => {
  return (
    <Container>
        <Story />
        {/* <Recognitions /> */}
        <Experience />
    </Container>
  );
};

export default About;