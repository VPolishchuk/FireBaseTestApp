import { Provider } from 'react-redux';
import React, { Component } from 'react';
import "react-toastify/dist/ReactToastify.css";
import { ConnectedRouter } from 'connected-react-router'
import {
  Route,
  Switch, 
  Router,
  Link } from 'react-router-dom';
// component
import AuthComponent from './features/auth/index';
import ListComponent from './features/list/index';
// root
import configureStore, { history } from './store';
//////////////////////////////////////////////

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

const store = configureStore();


export class AppRouter extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <nav>
            <ul>
              <li>
                <Link to="/list">Home</Link>
              </li>
              <li>
                <Link to="/sing-in">sing-in</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            {
              routeConfig.map(
                (route, i) => (
                  <Route key={i} {...route} />
                )
              )
            }
          </Switch>
        </ConnectedRouter>
      </Provider>
    )
  }
};

export default AppRouter;
