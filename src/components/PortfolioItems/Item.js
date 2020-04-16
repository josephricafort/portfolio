import React from "react";

import styled from "@emotion/styled";

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  height: 260px;
  padding: 82px;
  background-color: ${props => props.overlayColor};
  background-image: url(${props => props.imageSource});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: darken;
  &:hover {
    opacity: 0.75;
    filter: alpha(opacity=75); /* For IE8 and earlier */
  }
`;

const LinkWrapper = styled.a`
  text-decoration: none;
`;

const TextContainer = styled.div`
  margin: auto;
  max-width: 640px;
  color: ${props => props.fontColor};
`;

const Item = ({
  title,
  description,
  imageSource,
  link,
  styles
}) => {
  console.log("." + imageSource);
  return (
    <LinkWrapper className="linkWrapper" href={link} target="_blank" rel="noopener noreferrer">
      <ItemContainer
        className="itemContainer"
        imageSource={imageSource}
        overlayColor={styles.overlayColor}
      >
        <TextContainer 
          className="textContainer"
          fontColor={styles.fontColor}>
          <h3>
            <strong>{title}</strong>
          </h3>
          <p>{description}</p>
        </TextContainer>
      </ItemContainer>
    </LinkWrapper>
  );
};

export default Item;
