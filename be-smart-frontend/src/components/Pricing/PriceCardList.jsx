import React from "react";
import PriceCard from "./PriceCard";
import "./PriceCardsList.css";
import "./PriceCard.css";

export default function PriceCardList() {
  const cards = [
    {
      id: "1",
      Name: "Basic",
      Price: 150,
      descrbtion: "1234324234",
      logo: "fa fa-paper-plane",
      space: "10 GB Space",
      admins: "1 Admins",
    },
    {
      id: "2",
      Name: "Standart",
      Price: 200,
      descrbtion: "1234324234",
      logo: "fa fa-plane",
      space: "20 GB Space",
      admins: "2 Admins",
    },
    {
      id: "3",
      Name: "Premium",
      Price: 300,
      descrbtion: "1234324234",
      logo: "fa fa-rocket",
      space: "Unlimted Space",
      admins: "2+ Admins",
    },
  ];
  return (
    <div className="list">
      {cards.map((e) => (
        <PriceCard
          className="prices"
          key={e.id}
          Name={e.Name}
          Price={e.Price}
          descrbtion={e.descrbtion}
          logo={e.logo}
          space={e.space}
          admin={e.admins}
        />
      ))}
    </div>
  );
}
