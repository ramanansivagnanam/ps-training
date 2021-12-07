import { createSelector } from "reselect";

const cartSelector = (state) => state.cart;

const cartItemsSelector = createSelector(
  [cartSelector],
  (cart) => cart.cartItems
);

const selectVisible = createSelector(
    [cartSelector],
    (cart) => cart.visible,
)

const cartItemTotalCount = createSelector([cartItemsSelector], (cartItems) =>
  cartItems.reduce((acc, { quantity }) => acc + quantity, 0)
);

export { cartItemsSelector, cartItemTotalCount, selectVisible };
