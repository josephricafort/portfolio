import React from "react";

import Box from "@material-ui/core/Box";
import styled from "@emotion/styled";

import ContainerUI from "@material-ui/core/Container";

const Container = styled.div`
  max-width: 1000px;
  margin: 120px auto;
  text-align: center;
`;

const SpecializationsList = styled.ul`
  text-align: center;
  padding: 0;
  opacity: 0.6;

  li {
    display: inline-block;
    padding: 5px 10px;
    text-transform: uppercase;
  }
`;

const Intro = () => {
  return (
    <ContainerUI maxWidth="lg">
      <Container className="IntroContainer">
        {/* <Box>
          <h1>
            Convey meaning and purpose, using the right data and the right visuals
          </h1>
        </Box> */}
        <Box>
          <h1>
            Hi! I'm <strong>Joseph Ricafort</strong>.
          </h1>
          <h3>
            I'm a <strong>data / interactive designer and engineer</strong>{" "}
            based in Singapore.
            <br /> I craft <strong>data-driven explorations</strong>,
            <strong> explorations</strong> and <strong>products</strong> to
            spark curiosity, bring wisdom, and relive peoples' imaginations.
          </h3>
          <SpecializationsList>
            <li>Data-driven Stories & Explorations</li>&#8226;
            <li>Interactive Web Development</li>&#8226;
            <li>Physical & Digital Interactions</li>
          </SpecializationsList>
        </Box>
      </Container>
    </ContainerUI>
  );
};

export default Intro;
