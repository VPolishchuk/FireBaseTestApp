import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
/////////////////////////////////////////////////////////////
export const history = createBrowserHistory()
let initialState = {};
export default function configureStore(preloadedState) {
  console.log('preloadedState_____', preloadedState)
  const store = createStore(
    createRootReducer(history),
    initialState,
    preloadedState,
    composeWithDevTools(
      compose(
        applyMiddleware(
          routerMiddleware(history),
        ),
      ),
    )
  )

  // if (module.hot) {
  //   module.hot.accept('./reducers', () => {
  //     console.log('reloadReduser')
  //     store.replaceReducer(createRootReducer(history))
  //   })
  // }

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createRootReducer(store.injectedReducers));
    });
  }
  return store;
}
