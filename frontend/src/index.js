import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from "react-redux"
import thunk from "redux-thunk"
import {applyMiddleware, createStore} from 'redux'
import rootReducer from "./redux/reducers/rootReducer"

const miStore = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={miStore}>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);


