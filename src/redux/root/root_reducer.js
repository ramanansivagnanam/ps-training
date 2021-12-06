import { combineReducers } from 'redux';
import userReducer from '../user_reducer/userReducer';
const rootReducer = combineReducers({
    user: userReducer
});

export default rootReducer;