import React from "react";

import styled from "@emotion/styled";
import ContainerUI from "@material-ui/core/Container";

import portfolioItemsData from "../../data/PortfolioItemsData.json";
import Item from "../../components/PortfolioItems/Item";
import { coverImages } from "../../images/index";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  @media (max-width: 800px) {
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

const Child = styled.div`
  margin: 5px;
  flex: 1 1 48%;
`;

/* Need to import images individually for create-react-app */
/* Using url("./") directly doesn't work */

const PortfolioItems = () => 
<ContainerUI>
  <Container className="portfolioItemsContainer">
    { portfolioItemsData.map((item, index) => {
      return (
        <Child className="portfolioItemsChild">
          <Item
            title={item.title}
            description={item.description}
            imageSource={coverImages[index]}
            link={item.link}
            styles={item.styles}
          />
        </Child>
      )
  })}
  </Container>
  </ContainerUI>

export default PortfolioItems;