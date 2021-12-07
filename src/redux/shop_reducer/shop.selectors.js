import { createSelector } from 'reselect';

const selectShop = state => state.shop;

const selectShopItems = createSelector([selectShop],(shop) => shop.shopData);

export { selectShopItems };