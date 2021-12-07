import { combineReducers } from "redux";
import { cartReducer } from "../cart_reducer/cartReducer";
import userReducer from "../user_reducer/userReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { homeReducer } from "../home_reducer/home.reducer";
import { shopReducer } from "../shop_reducer/shop.reducer";
const reducerConfig = {
  key: "root",
  storage,
  whitelist: ["cart", "home", "shop"],
};

const rootReducer = combineReducers({
  user: userReducer,
  cart: cartReducer,
  home: homeReducer,
  shop: shopReducer,
});

export default persistReducer(reducerConfig, rootReducer);
