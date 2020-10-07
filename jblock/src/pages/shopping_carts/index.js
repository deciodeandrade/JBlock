import React, {Component} from "react";
import api from '../../services/api';
import {Link} from 'react-router-dom';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';

import "./styles.css";

export default class ShoppingCarts extends Component{
    render(){
        return(
            <div id="divShoppingCarts">
                <h1>Carrinhos de Compras</h1>
            </div>
        );
    }
}