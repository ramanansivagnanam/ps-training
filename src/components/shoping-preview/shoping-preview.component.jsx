import React from "react";
import ShopingPreviewItem from "./shoping-preview-item/shoping-preview-item.component";
import "./shoping-preview.styles.scss";
export default function ShopingPreview({ title, items }) {
  return (
    <div className="shoping-preview">
      <h1 className="title">{title}</h1>
      {items.map(({ id, ...remaining }) => {
        return <ShopingPreviewItem key={id} {...remaining} />;
      })}
    </div>
  );
}
