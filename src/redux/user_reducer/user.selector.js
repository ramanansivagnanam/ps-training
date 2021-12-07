import { createSelector } from "reselect";
const userSelector = (state) => state.user;

const selectCurrentUser = createSelector(
  [userSelector],
  (user) => user.currentUser
);

export { selectCurrentUser };