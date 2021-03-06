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
            I'm a <strong>creative visual techie</strong> based in Singapore. I
            craft <strong>data-driven stories</strong>,
            <strong> explorations</strong> and <strong>products</strong> to
            spark <em>curiosity</em>, bring <em>wisdom</em>, and relive peoples'{" "}
            <em>imaginations</em>.
          </h3>
          <SpecializationsList>
            <li>Data-driven Stories</li>&#8226;
            <li>Interactive Web</li>&#8226;
            <li>Physical and Digital Interactions</li>
          </SpecializationsList>
        </Box>
      </Container>
    </ContainerUI>
  );
};

export default Intro;
