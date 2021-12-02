import React, { Component } from "react";
import { SHOP_DATA } from "../../data/SHOP_DATA";
import ShopingPreview from "../shoping-preview/shoping-preview.component";

export default class shopinglist extends Component {
  constructor() {
    super();
    this.state = {
      shop_data: SHOP_DATA,
    };
  }
  render() {
    const { shop_data } = this.state;
    return (<div>
        {shop_data.map(({ id, ...remaining })=> {
            return <ShopingPreview key={id} {...remaining } />
        })
        }
        </div>);
  }
}
