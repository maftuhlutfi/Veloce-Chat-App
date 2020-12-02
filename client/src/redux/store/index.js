import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import socketMiddleware from '../socketMiddleware';

import SocketClient from '../socketClient';
import reducers from '../reducers';

const socketClient = new SocketClient();

const middleware = [thunk, socketMiddleware(socketClient)];

export const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(...middleware)
))