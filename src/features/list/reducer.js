import { createReducer } from 'redux-act';
import * as P from 'plow-js';

import * as A from './actions';

const initialState = {
    list: ['test']
};

const test = (state, data) => state.list.push(data);

export default createReducer({
    [A.testActions]: test,
}, initialState);