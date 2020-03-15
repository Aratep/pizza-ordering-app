import React from 'react';
import {Route, Switch} from 'react-router-dom';

import PizzaListPage from './pages/pizza-list/PizzaList';
import PizzaPage from './pages/pizza/Pizza';

const AppRoutes = () => (
    <Switch>
        <Route exact path="/" component={PizzaListPage}/>
        <Route exact path="/pizza-list" component={PizzaListPage}/>
        <Route exact path="/pizza/:id" component={PizzaPage}/>
    </Switch>
);

export default AppRoutes