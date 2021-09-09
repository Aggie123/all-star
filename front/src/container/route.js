import React from 'react';
import { Router, Route } from 'react-router';
import { createHashHistory } from 'history';

import HomePage from './HomePage';
import FormPage from './FormPage';

const hashHistory = createHashHistory();

const MyRoute = ()=><Router history={hashHistory}>
<Route path="/" component={HomePage}/>
<Route path="/form" component={FormPage}/>
</Router>

export default MyRoute