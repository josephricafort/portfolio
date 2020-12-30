import React from "react";

import styled from "@emotion/styled";

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  align-content: center;
  &:hover {
    ${({ link }) => link && `opacity: 0.75;`}
    filter: alpha(opacity=75); /* For IE8 and earlier */
  }
`;

const LinkWrapper = styled.a`
  text-decoration: none;
`;

const TextContainer = styled.div`
  position: relative;
  max-width: 640px;
  color: black;
  text-align: left;
  padding: 10px 20px 20px 0px;
  margin-bottom: 20px;

  @media (min-width: 500px) {
    padding: 10px 120px 20px 0px;
  }
`;

const Title = styled.h3`
  margin: 0;
`;

const Image = styled.img`
  display: block;
  height: 300px;
  width: 100%;
  object-fit: cover;
`;

const Item = ({ title, description, imageSource, link, styles }) => {
  return (
    <LinkWrapper
      className="linkWrapper"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <ItemContainer
        className="itemContainer"
        overlayColor={styles.overlayColor}
        link={link}
      >
        <Image
          src={require(`./../../images/cover-images/${imageSource}`)}
          link={link}
        ></Image>
      </ItemContainer>
      <TextContainer className="textContainer" fontColor={styles.fontColor}>
        <Title>{title}</Title>
        <p>{description}</p>
      </TextContainer>
    </LinkWrapper>
  );
};

export default Item;
