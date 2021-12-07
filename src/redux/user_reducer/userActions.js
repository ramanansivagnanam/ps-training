import { userActionTypes } from './userActionTypes'
const setUser = user => ({
    type: userActionTypes.SET_USER,
    payload: user,
});

export { setUser };
