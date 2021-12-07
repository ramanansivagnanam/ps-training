import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectMenuItems } from "../../redux/home_reducer/home.selector";
import MenuItem from "../menuItem/MenuItem.component";

import "./menuList.styles.scss";

const MenuList = ({ menuItems}) => {
  return (
    <div className="menu-items">
      {menuItems.map(({ id, itemName, imageSrc }) => {
        return <MenuItem key={id} itemName={itemName} imageSrc={imageSrc} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  menuItems : selectMenuItems 
});

export default connect(mapStateToProps)(MenuList);
