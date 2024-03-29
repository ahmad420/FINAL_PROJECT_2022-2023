import React from "react";
import Card from "./Card";

function CardList(props) {
  const survises = [
    {
      id: "1",
      Name: "Render data quickly",
      descrbtion: "Insurance",
      img: "https://img.icons8.com/ios/250/000000/pie-chart.png",
    },
    {
      id: "2",
      Name: "Perform basic querying",
      descrbtion: "exampel@besmart.com",
      img: "https://www.iconpacks.net/icons/1/free-mail-icon-142-thumb.png",
    },
    {
      id: "3",
      Name: "Produce simple maps",
      descrbtion: "+972 665667",
      img: "https://cdn-icons-png.flaticon.com/512/181/181374.png",
    },
    {
      id: "4",
      Name: "Maintain styles when published",
      descrbtion: "+972 665667",
      img: "https://cdn-icons-png.flaticon.com/512/1250/1250689.png",
    },
    {
      id: "5",
      Name: "Retail Networks",
      descrbtion: "+972 665667",
      img: "https://cdn-icons-png.flaticon.com/512/2857/2857433.png",
    },
  ];
  return survises.map((e) => (
    <Card key={e.id} Name={e.Name} descrbtion={e.descrbtion} img={e.img} />
  ));
}

export default CardList;
