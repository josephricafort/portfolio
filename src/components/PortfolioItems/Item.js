import React from "react";

import styled from "@emotion/styled";

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  height: 260px;
  margin: 12px 0;
  padding: 82px;
  background-color: magenta;
`;

const TextContainer = styled.div`
  max-width: 800px;
`;

const Item = ({ title, description, imageSource }) => {
  return (
    // <a href={imageSource}>
    <ItemContainer>
      <TextContainer>
        <h3>{title}</h3>
        <p>{description}</p>
      </TextContainer>
    </ItemContainer>
    // </a>
  );
};

export default Item;
