import React from "react";

export default function ShopingPreview({ title, items }) {
  return (
    <div className="shoping-preview">
      <h1 className="title">{title}</h1>
      {items.map(({ name }) => {return <p>{name}</p>})}
    </div>
  );
}
