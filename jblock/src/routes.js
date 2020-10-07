import React from 'react';

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Inicial from './pages/inicial';
import Categories from './pages/categories/index';
import CategoriesNew from './pages/categories/new';
import CategoriesEdit from './pages/categories/edit';
import CategoriesView from './pages/categories/view_';
import Products from './pages/products';
import ShoppingCarts from './pages/shopping_carts';
import Orders from './pages/orders';
import Stores from './pages/stores';
import People from './pages/people';
import Reports from './pages/reports';
import Main from './pages/main';
import Product from './pages/product';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Inicial} />
            <Route path="/inicio" component={Inicial} />
            <Route exact path="/categorias" component={Categories} />
            <Route path="/categorias/novo" component={CategoriesNew} />
            <Route path="/categorias/editar/:id" component={CategoriesEdit} />
            <Route path="/categorias/mostrar/:id" component={CategoriesView} />
            <Route path="/produtos" component={Products} />
            <Route path="/carrinhos" component={ShoppingCarts} />
            <Route path="/compras" component={Orders} />
            <Route path="/lojas" component={Stores} />
            <Route path="/pessoas" component={People} />
            <Route path="/relatorios" component={Reports} />
            <Route path="/rocketseat" component={Main} />
            <Route path="/products/:id" component={Product} />
        </Switch>
    </BrowserRouter>
);

export default Routes;