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
`;

const LinkWrapper = styled.a`
  text-decoration: none;
`;

const TextContainer = styled.div`
  max-width: 800px;
  color: white;
`;

const Item = ({ title, description, imageSource, overlayColor, link }) => {
  return (
    <LinkWrapper href={link} target="_blank" rel="noopener noreferrer">
      <ItemContainer
        style={{
          backgroundImage: `url(${imageSource})`
        }}
        imageSource={imageSource}
        overlayColor={overlayColor}
      >
        <TextContainer>
          <h2>{title}</h2>
          <p>{description}</p>
        </TextContainer>
      </ItemContainer>
    </LinkWrapper>
  );
};

export default Item;
