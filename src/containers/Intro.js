import React from "react";

import Box from "@material-ui/core/Box";
import styled from "@emotion/styled";

const IntroContainer = styled.div`
  max-width: 640px;
  margin: 92px 0 118px 0;
`;

const Intro = () => {
  return (
    <IntroContainer className="IntroContainer">
      {/* <Box>
        <h1>
          Convey meaning and purpose, using the right data and the right visuals
        </h1>
      </Box> */}
      <Box>
        <h1>Hi! I'm Joseph Ricafort.</h1>{" "}
        <h3>
          I believe that design and data-driven stories has the power to shape
          our way of thinking, our lens to better understand our complex
          society, and our guide to make better, well-informed decisions.
        </h3>
      </Box>
    </IntroContainer>
  );
};

export default Intro;
