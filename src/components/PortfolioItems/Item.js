import React from "react";

import styled from "@emotion/styled";

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  height: 260px;
  margin: 12px 0;
  padding: 82px;
  background-color: ${props => props.color};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: darken;
`;

const TextContainer = styled.div`
  max-width: 800px;
  color: white;
`;

const Item = ({ title, description, imageSource, color }) => {
  return (
    <ItemContainer
      style={{
        backgroundImage: `url(${imageSource})`
      }}
      imageSource={imageSource}
      color={color}
    >
      <TextContainer>
        <h2>{title}</h2>
        <p>{description}</p>
      </TextContainer>
    </ItemContainer>
  );
};

export default Item;
