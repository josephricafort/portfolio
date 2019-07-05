import React from "react";

import portfolioItemsData from "../data/PortfolioItemsData.json";
import Item from "../components/PortfolioItems/Item";

/* Need to import images individually for create-react-app */
/* Using url("./") directly doesn't work */
import circleOfNations from "../images/circle-of-nations.png";
import outOfReach from "../images/out-of-reach.png";
import jeepneyMap from "../images/jeepney-map.png";
import eurovision from "../images/eurovision.png";

const images = [
  { name: circleOfNations, color: null },
  { name: outOfReach, color: null },
  { name: jeepneyMap, color: "#432F005C" },
  { name: eurovision, color: null }
];

const PortfolioItems = () => {
  return portfolioItemsData.map((item, index) => (
    <Item
      title={item.title}
      description={item.description}
      imageSource={images[index].name}
      color={images[index].color}
    />
  ));
};

export default PortfolioItems;
