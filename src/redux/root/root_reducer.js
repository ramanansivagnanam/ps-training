import { combineReducers } from 'redux';
import { cartReducer } from '../cart_reducer/cartReducer';
import userReducer from '../user_reducer/userReducer';
const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
});

export default rootReducer;