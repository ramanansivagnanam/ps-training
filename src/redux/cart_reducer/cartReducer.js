import { cartActionTypes } from './cartActionTypes'
const INITIAL_STATE = {
    visible: false,
    cartItems: [],
}

export const cartReducer = (state = INITIAL_STATE, { type, payload}) => {
   switch (type) {
       case cartActionTypes.TOGGLE_DROPDOWN:
            return {
                ...state,
                visible: !state.visible,
            }
       case cartActionTypes.ADD_ITEM:
           return {
               ...state,
               cartItems: [...state.cartItems, payload]
           }   
       default:
           return state;
   }
}; 