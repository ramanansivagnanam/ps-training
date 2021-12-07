import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectShopItems } from "../../redux/shop_reducer/shop.selectors";
import ShopingPreview from "../shoping-preview/shoping-preview.component";

import "./shopinglist.styles.scss";

const Shopinglist = ({ shopData }) => {
  return (
    <div className="shop-list-container">
      {shopData.map(({ id, ...remaining }) => {
        return <ShopingPreview key={id} {...remaining} />;
      })}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  shopData: selectShopItems,
});
export default connect(mapStateToProps)(Shopinglist);
