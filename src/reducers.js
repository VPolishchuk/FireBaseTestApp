import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
// features

///////////////////////////////////////////////////////////////////////////////////////////////////

const appReducer = combineReducers({

});

const rootReducer = (state, action) => {
  return appReducer(state, action)
};

export default rootReducer;
