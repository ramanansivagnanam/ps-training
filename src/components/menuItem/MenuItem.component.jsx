import React from "react";
import "./menuItem.styles.scss";

export default function MenuItem({ itemName, imageSrc }) {
  return (
    <>
      <div  style={{ background: `url(${imageSrc})` }} className="menu-item">
        <div  className="content">
          <h1 className="title">{itemName}</h1>
          <span className="subtitle">...</span>
        </div>
      </div>
    </>
  );
}
