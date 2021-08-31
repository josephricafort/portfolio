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

const PortfolioTypeList = styled.ul`
 text-align; left;
 padding: 0;
 margin: 0;
  li {
    display: inline-block;
    padding: 2px 6px;
    text-transform: uppercase;
    background-color: #eee;
    margin: 2px 5px;
    margin-left: 0;
    border-radius: 3px;
    font-size: 12px;
  }
`;

const AwardsList = styled(PortfolioTypeList)`
  margin-top: 5px;
  li {
    display: inline;
    background-color: #ffd60022;
  }
`;

const Role = styled.p`
  font-size: 0.8em;
  opacity: 0.7;
`;

const Item = ({
  title,
  description,
  imageSource,
  link,
  styles,
  type,
  awards,
  role,
}) => {
  return (
    <LinkWrapper
      className="linkWrapper"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <ItemContainer
        className="item-container"
        overlayColor={styles.overlayColor}
        link={link}
      >
        <Image
          src={require(`./../../images/cover-images/${imageSource}`)}
          link={link}
        ></Image>
      </ItemContainer>
      <TextContainer className="text-container" fontColor={styles.fontColor}>
        <PortfolioTypeList className="portfolio-type-list">
          {type && type.map((t) => <li>{t}</li>)}
        </PortfolioTypeList>
        <Title>{title}</Title>
        <AwardsList>{awards && awards.map((a) => <li>{a}</li>)}</AwardsList>
        <p>{description}</p>
        <Role>{role}</Role>
      </TextContainer>
    </LinkWrapper>
  );
};

export default Item;
