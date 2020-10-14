import React, {Component} from "react";
import api from '../../../../services/api';
import {Link} from 'react-router-dom';
import $, { param } from 'jquery';

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

class FormViewCategories extends Component {

    state = {
        categories: [],
        categoryInfo: {},
    };

    componentDidMount(){
        this.loadCategory();
    }

    loadCategory = async () => {
        const response = await api.get(`/categories/${this.props}`);
        console.log(this.props);

        const {docs, ...categoryInfo} = response.data;

        this.setState({categories: docs, categoryInfo});
    };

    deleteCategory = async (id) => {
        await api.delete(`/categories/${id}`);
    };

    prevPage = () => {
        const {page, categoryInfo} = this.state;

        if(page == 1) return;

        const pageNumber = page - 1;

        this.loadCategories(pageNumber);
    }

    nextPage = () => {
        const {page, categoryInfo} = this.state;

        if(page == categoryInfo.pages) return;

        const pageNumber = page + 1;

        this.loadCategories(pageNumber);
    }

    render(){
        return (
            <div>
                <form>
                    <div class="form-group">
                        <label for="inputNome">Nome</label>
                        <input type="text" class="form-control" id="inputNome" placeholder="Ex.: Alimentos" disabled="true"></input>
                    </div>
                </form>
            </div>
        );}

}

export default FormViewCategories;