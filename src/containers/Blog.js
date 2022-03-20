import React from "react";

import styles from "@emotion/styled";
import { styled } from "@material-ui/styles";
import ContainerUI from "@material-ui/core/Container";
import { Button } from "@material-ui/core";

import blogCover from "../images/blog-cover/blog_cover.jpg";
import blogCoverMobile from "../images/blog-cover/blog_cover_mobile.jpg";

const Container = styles.div`
    width: 100%;
    padding: 90px 0 120px 0;
    background-color: #f5f5f5;
    background-image: url(${blogCover});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    @media (max-width: 700px){
        background-image: url(${blogCoverMobile});
    }

    // inner shadows
    -moz-box-shadow:    inset 0 0 20px #00000034;
    -webkit-box-shadow: inset 0 0 20px #00000034;
    box-shadow:         inset 0 0 20px #00000034;
`;

const Title = styles.h2`

`;

const MyContainerUI = styled(ContainerUI)({
  maxWidth: "400px",
  textAlign: "center",
});

const MyButton = styled(Button)({
  marginTop: "48px",
});

const Blog = () => {
  return (
    <Container>
      <MyContainerUI>
        <Title>How I Do It (Blog)</Title>
        <p>
          Inside look at my projects, thought processes, sketches, dummy
          projects and out of this world ideas.
        </p>
        {/* <a href="https://thelostkite.com/category/work/"> */}
        <a>
          <MyButton variant="outlined" color="primary" disabled={true}>
            Go to blog (Work in Progress)
          </MyButton>
        </a>
      </MyContainerUI>
    </Container>
  );
};

export default Blog;
