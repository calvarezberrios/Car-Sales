import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import './styles.scss';

import App from './App';

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

import { BrowserRouter as Router } from "react-router-dom";

const store = createStore(reducer);




const rootElement = document.getElementById('root');
ReactDOM.render(
    <Router>
        <Provider store = {store}>
            <App />
        </Provider>
    </Router>, 
    rootElement
);
