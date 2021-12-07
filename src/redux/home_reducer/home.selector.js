import { createSelector  } from 'reselect';

const homeSelector = state => state.home;

const selectMenuItems = createSelector([homeSelector],(home)=> home.menuitems);

export { selectMenuItems };