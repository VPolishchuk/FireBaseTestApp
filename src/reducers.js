import { combineReducers } from 'redux';
// import { routerReducer as router } from 'react-router-redux';
import { connectRouter } from 'connected-react-router'
// features
import list from './features/list/reducer';
// import { history } from './store';
///////////////////////////////////////////////////////////////////////////////////////////////////


const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  list,
});

const rootReducer = (history) => (state, action) => {
  console.log('createRootReducer___', createRootReducer(history))
  return createRootReducer(history)(state, action)
};

export default rootReducer;
