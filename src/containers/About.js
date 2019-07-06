import React from "react";

import styled from "@emotion/styled";

const AboutContainer = styled.div`
  margin: 180px auto;
  max-width: 640px;
`;

const About = () => {
  return (
    <AboutContainer id={"about"}>
      <h2>About Joseph</h2>
      <p>
        I used to work with large datasets as a test development engineer which
        helped me realize my love-hate relationship with data. I also used to do
        creative work as a hobby, playing around with presentations and
        infographics. I got fascinated with the idea of marrying data, design
        and development together which led me into this field
      </p>
      <p>
        Recently, I completed my internship at a{" "}
        <a href={"http://interactivethings.com"} target={"_blank"}>
          Swiss design studio
        </a>{" "}
        in Zürich, Switzerland that specializes in data visualization and user
        experience design.
      </p>
    </AboutContainer>
  );
};

export default About;
