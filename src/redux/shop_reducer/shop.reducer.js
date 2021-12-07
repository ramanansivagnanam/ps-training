import { SHOP_DATA } from '../../static_data/SHOP_DATA';
const INITIAL_STATE = { 
    shopData: SHOP_DATA,
}

const shopReducer = (state = INITIAL_STATE, { type , payload}) => {
   switch(type) {
       default:
           return state;
   }
};

export { shopReducer }; 
