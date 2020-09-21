import React from "react";

import styled from "@emotion/styled";

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  height: 260px;
  padding: 80px;
  border-radius: 3px;
  background-color: ${(props) => props.overlayColor};
  background-image: url(${(props) => props.imageSource});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: darken;
  &:hover {
    opacity: 0.75;
    filter: alpha(opacity=75); /* For IE8 and earlier */

    // background: black;
    // background: rgba(0, 0, 0, 0.8);

    // filter: blur(4px);
    // -o-filter: blur(4px);
    // -ms-filter: blur(4px);
    // -moz-filter: blur(4px);
    // -webkit-filter: blur(4px);
  }

  @media (max-width: 800px) {
    padding: 48px;
  }
`;

const LinkWrapper = styled.a`
  text-decoration: none;
`;

const TextContainer = styled.div`
  margin: auto;
  max-width: 640px;
  color: ${(props) => props.fontColor};
  text-align: center;
  text-shadow: ${(props) =>
    props.fontColor == "white" || props.fontColor == "#FFFFFF"
      ? "0px 0px 3px #333333"
      : "none"};
`;

const Title = styled.h3`
  margin: 0;
`;

const Item = ({ title, description, imageSource, link, styles }) => {
  console.log("." + imageSource);
  return (
    <LinkWrapper
      className="linkWrapper"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <ItemContainer
        className="itemContainer"
        imageSource={imageSource}
        overlayColor={styles.overlayColor}
      >
        <TextContainer className="textContainer" fontColor={styles.fontColor}>
          <Title>{title}</Title>
          <p>{description}</p>
        </TextContainer>
      </ItemContainer>
    </LinkWrapper>
  );
};

export default Item;
