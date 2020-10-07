import React, {Component} from "react";
import api from '../../../../services/api';
import {Link} from 'react-router-dom';
import $ from 'jquery';

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
    NavbarText,
    Form
} from 'reactstrap';

import './styles.css';

const FormCategories = () => {
    return (
        <div>
            <form>
                <div class="form-group">
                    <label for="inputNome">Nome</label>
                    <input type="text" class="form-control" id="inputNome" placeholder="Ex.: Alimentos"></input>
                </div>
            </form>
        </div>
    );
}

export default FormCategories;