import 'babel-polyfill';
import React from 'react';
import ReactDOM from "react-dom";
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import App from './components/App';


const store = createStore(allReducers);
console.log('store', store.getState());

ReactDOM.render(
    <Provider store={store}> 
        <App />
    </Provider>,
    document.getElementById('root')
);
