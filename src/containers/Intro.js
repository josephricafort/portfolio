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
        <h2>
          Hi! I'm Joseph Ricafort and I design and develop data-driven stories,
          experiences and explorations.
        </h2>
        <p>Below are some of the projects and experiments I did in the past.</p>
      </Box>
    </IntroContainer>
  );
};

export default Intro;
