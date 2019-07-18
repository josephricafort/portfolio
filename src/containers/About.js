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
        I have worked with large datasets as a test development engineer in the
        Philippines which helped me realize my love-hate relationship with data.
        I also used to do creative work as a hobby, playing around with
        presentations and infographics. I got fascinated with the idea of
        combining data, design and code together which led me into this field.
      </p>
      {/* <p>
        Recently, I completed my internship at a{" "}
        <a href={"http://interactivethings.com"} target={"_blank"}>
          Swiss design studio
        </a>{" "}
        in Zürich, Switzerland that specializes in data visualization and user
        experience design.
      </p> */}
      <h3>Recognitions</h3>
      <p>
        <a href="http://hdr.undp.org/en/content/2019-human-development-data-visualization-challenge-winner-gender-inequality-visual-story">
          <strong>
            Out of Reach - 2nd place, 2019 Human Development Data Visualization
            Challenge
          </strong>
        </a>
        <br />
        Visualizing income inequality within and between countries
      </p>
      <h3>Work Experience</h3>
      <p>
        <strong>
          <a href="https://interactivethings.com">
            Interaction Design Intern - <italic>Interactive Things</italic>
          </a>
        </strong>
        <br />
        Zürich, Switzerland
      </p>
      <p>
        <strong>Test Development Engineer - Analog Devices</strong>
        <br />
        General Trias, Cavite, Philippines
      </p>
    </AboutContainer>
  );
};

export default About;
