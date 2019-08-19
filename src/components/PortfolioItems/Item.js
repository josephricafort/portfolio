import React from "react";

import styled from "@emotion/styled";

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  height: 260px;
  margin: 12px 0;
  padding: 82px;
  background-color: ${props => props.overlayColor};
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
  margin: 180px auto;
  max-width: 640px;
  color: ${props => props.fontColor};
`;

const Item = ({
  title,
  description,
  imageSource,
  overlayColor,
  fontColor,
  link
}) => {
  return (
    <LinkWrapper href={link} target="_blank" rel="noopener noreferrer">
      <ItemContainer
        style={{
          backgroundImage: `url(${imageSource})`
        }}
        imageSource={imageSource}
        overlayColor={overlayColor}
      >
        <TextContainer fontColor={fontColor}>
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
