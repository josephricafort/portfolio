import React from "react";

import portfolioItemsData from "../data/PortfolioItemsData.json";
import Item from "../components/PortfolioItems/Item";

const PortfolioItems = () => {
  return portfolioItemsData.map(item => (
    <Item
      title={item.title}
      description={item.description}
      imageSource={item.imageSource}
    />
  ));
};

export default PortfolioItems;
