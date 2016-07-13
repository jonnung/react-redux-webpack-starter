import React from 'react';
import ReactDom from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from './container/App';
import greetingApp from './reducers/greetingApp';

let store = createStore(greetingApp);

let rootElement = document.getElementById('greeting-div');

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);