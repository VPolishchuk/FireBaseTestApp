import { Provider } from 'react-redux';
import React, { Component } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import { createBrowserHistory as createHistory } from 'history';
import {
  Route,
  Switch, 
  Router} from 'react-router-dom';
import {
  ConnectedRouter,
  routerMiddleware } from 'react-router-redux';
// component
import AuthComponent from './component/auth/index';
import ListComponent from './component/list/index';
// root
import createStore from './store';
//////////////////////////////////////////////

export const history = createHistory();

const routeConfig = [
  {
    path: '/sing-in',
    component: AuthComponent,
  },
  {
    path: '/list',
    component: ListComponent
  }
]

const store = createStore(
  routerMiddleware(history)
);


//TODO: after add here redux-store and create auth-component  structure in this file will be changed
export class AppRouter extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            {
              routeConfig.map(
                (route, i) => (
                  <Route key={i} {...route} />
                )
              )
            }
          </Switch>
          <ToastContainer
            autoClose={4000}
          />
        </ConnectedRouter>
      </Provider>
    )
  }
};

export default AppRouter;
