import React from "react";
import { connect } from "react-redux";
import { addItem } from "../../../redux/cart_reducer/cartActions";

import "./shoping-preview-item.styles.scss";

function ShopingPreviewItem({ id, name, imageUrl, price, quantity, addItem }) {
  return (
    <div className="shoping-preview-item">
      <div
        className="shoping-preview-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="shoping-preview-footer">
        <span className="shoping-preview-item-name">{name}</span>
        <span className="shoping-preview-item-price">{price}</span>
        <div className="add-to-cart-button">
          <button
            onClick={() =>  addItem({ id, name, imageUrl, price , quantity})}
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ShopingPreviewItem);
