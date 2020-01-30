import { createSelector } from 'reselect';
///////////////////////////////////////////////////////////////////////////////////////////////////

const selectListStore = (state) => state.list;

const makeSelectList = () => createSelector(
  selectListStore,
  (store) => store.list,
);


export {
  makeSelectList
};
