import React from "react";

import portfolioItemsData from "../data/PortfolioItemsData.json";
import Item from "../components/PortfolioItems/Item";

/* Need to import images individually for create-react-app */
/* Using url("./") directly doesn't work */
import phExclusiveGrowth from "../images/ph-exclusive-growth-cover.png";
import circleOfNations from "../images/circle-of-nations.png";
import touristArrivalPhilippines from "../images/tourist-arrival-philippines.png";
import datavizCommunitySurvey from "../images/dataviz-survey-diversity.png";
import outOfReach from "../images/out-of-reach.png";
import jeepneyMap from "../images/jeepney-map.png";
import eurovision from "../images/eurovision.png";

const images = [
  { name: circleOfNations, overlayColor: null, fontColor: "white" },
  { name: phExclusiveGrowth, overlayColor: "#432F000C", fontColor: "black" },
  {
    name: touristArrivalPhilippines,
    overlayColor: "#432F000C",
    fontColor: "black"
  },
  {
    name: datavizCommunitySurvey,
    overlayColor: "#432F000C",
    fontColor: "black"
  },
  { name: outOfReach, overlayColor: null, fontColor: "white" },
  { name: jeepneyMap, overlayColor: "#432F005C", fontColor: "white" },
  { name: eurovision, overlayColor: "null", fontColor: "white" }
];

const PortfolioItems = () => {
  return portfolioItemsData.map((item, index) => (
    <Item
      title={item.title}
      description={item.description}
      imageSource={images[index].name}
      overlayColor={images[index].overlayColor}
      fontColor={images[index].fontColor}
      link={item.link}
    />
  ));
};

export default PortfolioItems;
