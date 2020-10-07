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

export default class Products extends Component{
    render(){
        return(
            <div id="divProducts">
                <h1>Produtos</h1>
            </div>
        );
    }
}