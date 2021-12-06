import React from "react";
import { menuitems } from '../../static_data/menuiitems';
import MenuItem from "../menuItem/MenuItem.component";

import './menuList.styles.scss';

export default function MenuList() {
  return (
    <div className="menu-items">
     { menuitems.map(({ id, itemName, imageSrc }) => { 
         return <MenuItem key={id} itemName={itemName} imageSrc={imageSrc}/>
     }) }
    </div>
  );
}
