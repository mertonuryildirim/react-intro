import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavLink,
} from 'reactstrap';
import CartSummary from './CartSummary';

export default class Navi extends Component {
    state = {
        isOpen: false,
    };

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    };

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Northwind App</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <NavLink>
                        <Link to="/form1">Form1</Link>
                    </NavLink>
                    <NavLink>
                        <Link to="/form2">Form2</Link>
                    </NavLink>
                    <Collapse
                        style={{ justifyContent: 'flex-end' }}
                        isOpen={this.state.isOpen}
                        navbar
                    >
                        <Nav navbar>
                            <CartSummary
                                cart={this.props.cart}
                                removeFromCart={this.props.removeFromCart}
                            />
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
