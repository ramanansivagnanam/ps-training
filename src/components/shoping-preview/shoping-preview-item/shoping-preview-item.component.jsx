import React from "react";

import "./shoping-preview-item.styles.scss";

export default function ShopingPreviewItem({ name, imageUrl, price }) {
  return (
    <div className="shoping-preview-item">
      <div
        className="shoping-preview-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="shoping-preview-footer">
        <span className="shoping-preview-item-name">{name}</span>
        <span className="shoping-preview-item-price">{price}</span>
      </div>
    </div>
  );
}
