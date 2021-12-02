import React from 'react';
import MenuList from '../menuList/MenuList.component';
import './pageMenuContainer.styles.scss';

export default function PageMenuContainer() {
    return (
        <div className="page-content-container">
           <MenuList />
        </div>
    )
}
