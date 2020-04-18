import React from "react";

import Box from "@material-ui/core/Box";
import styled from "@emotion/styled";

import ContainerUI from "@material-ui/core/Container";

const Container = styled.div`
  max-width: 640px;
  margin: 120px auto;
  text-align: center;
`;

const Intro = () => {
  return (
    <ContainerUI maxWidth="lg" >
      <Container className="IntroContainer">
        {/* <Box>
          <h1>
            Convey meaning and purpose, using the right data and the right visuals
          </h1>
        </Box> */}
        <Box>
          <h1>Hi! I'm Joseph Ricafort.</h1>{" "}
          <h3>I craft <em>visual narratives</em> and <em>explorations</em> through <strong>data</strong> and <strong>design</strong>.</h3>
          <p>
            I believe that design and data-driven stories has the power to shape
            our way of thinking, our lens to better understand our complex
            society, and our guide to make better, well-informed decisions.
          </p>
        </Box>
      </Container>
    </ContainerUI>
  );
};

export default Intro;
