import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import Pricing from './components/Pricing';
import Demo_Specific from './components/Demo_Specific';
import Demo from './components/Demo';
import Data from './components/Data';
import Data_Detail from './components/Data_Detail';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom'

render((
    <Router>
        <div>
            <Route path='/' component={App} />
            <Route path='/pricing' component={Pricing} />
            <Route path='/demo' component={Demo} />
            <Route path='/demo_specific' component={Demo_Specific} />
            <Route path='/data' component={Data} />
            <Route path='/data_detail' component={Data_Detail} />
        </div>
    </Router>
), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
