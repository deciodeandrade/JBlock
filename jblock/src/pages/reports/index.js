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

export default class Reports extends Component{
    render(){
        return(
            <div id="divReports">
                <h1>Relatórios</h1>
            </div>
        );
    }
}