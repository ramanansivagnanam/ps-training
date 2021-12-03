import React, { Component } from "react";
import { SHOP_DATA } from "../../data/SHOP_DATA";
import ShopingPreview from "../shoping-preview/shoping-preview.component";

import './shopinglist.styles.scss'

export default class shopinglist extends Component {
  constructor() {
    super();
    this.state = {
      shop_data: SHOP_DATA,
    };
  }
  render() {
    const { shop_data } = this.state;
    return (
      <div className="shop-list-container">
        {shop_data.map(({ id, ...remaining }) => {
          return <ShopingPreview key={id} {...remaining} />;
        })}
      </div>
    );
  }
}
