import React from "react";

import Box from "@material-ui/core/Box";
import styled from "@emotion/styled";

const IntroContainer = styled.div`
  max-width: 800px;
  margin: 92px 0;
`;

const Intro = () => {
  return (
    <IntroContainer className="IntroContainer">
      <Box>
        <h2>
          Stories are more insightful and meaningful when supported with the
          right data and the right visuals
        </h2>
      </Box>
      <Box>
        <h3>
          Hi! I'm Joseph Ricafort and I design and develop data visualizations.
          Below are some of the projects and experiments I did in the past.
        </h3>
      </Box>
    </IntroContainer>
  );
};

export default Intro;
