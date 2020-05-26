import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import './styles.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import App from './App';

import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";

import { BrowserRouter as Router } from "react-router-dom";

library.add(fab, fas);

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
