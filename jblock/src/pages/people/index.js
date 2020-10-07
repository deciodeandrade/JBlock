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

export default class People extends Component{
    render(){
        return(
            <div id="divPeople">
                <h1>Pessoas</h1>
            </div>
        );
    }
}