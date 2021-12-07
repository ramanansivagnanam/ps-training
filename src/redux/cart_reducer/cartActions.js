import { cartActionTypes } from "./cartActionTypes";

const toggleDropdown = () => ({
    type : cartActionTypes.TOGGLE_DROPDOWN, 
});
const addItem = item => ({
    type : cartActionTypes.ADD_ITEM,
    payload : item
});

export { toggleDropdown, addItem };


