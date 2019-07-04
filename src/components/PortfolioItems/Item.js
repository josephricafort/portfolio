import React from "react";

import styled from "@emotion/styled";

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  height: 260px;
  margin: 12px 0;
  padding: 82px;
  background-color: magenta;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const TextContainer = styled.div`
  max-width: 800px;
`;

const Item = ({ title, description, imageSource }) => {
  return (
    <ItemContainer
      style={{
        backgroundImage: `url(${imageSource})`
      }}
    >
      <TextContainer>
        <h3>{title}</h3>
        <p>{description}</p>
      </TextContainer>
    </ItemContainer>
  );
};

export default Item;
