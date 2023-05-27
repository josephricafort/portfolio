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
  borderRadius: "20px",
  backgroundColor: "#29b6f6",
  color: "#ffffff",
  border: "none",
  padding: "10px 20px",
});

const Blog = () => {
  return (
    <Container>
      <MyContainerUI>
        <Title>Experiments and Though Process</Title>
        <p>
          A stash of fleeting visual ideas and explorations in this open
          notebook/blog.
        </p>
        <a href="https://thelostkite.com/category/work/">
          <MyButton variant="outlined" color="primary" disabled={false}>
            Go to TheLostKite blog
          </MyButton>
        </a>
      </MyContainerUI>
    </Container>
  );
};

export default Blog;
