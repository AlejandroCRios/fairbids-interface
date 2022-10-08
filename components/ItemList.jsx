import React from "react";
import Item from "./Item";

const items = [
  {
    name: "Devcon VI Ticket",
    image: "/image_0.png",
    event: "Devcon VI - Oct. 11th – 14th, 2022",
    orderCode: "Z5A3D",
    details: "1x LatAm Builder Discount",
    contact: "Devcon - support@devcon.org",
  },
];

const ItemList = () => {
  return (
    <>
      {" "}
      {items.map((item) => (
        <Item key={item.name} data={item} />
      ))}
    </>
  );
};

export default ItemList;
