import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Badge,
    NavItem,
    NavLink,
} from 'reactstrap';

export default class CartSummary extends Component {
    renderSummary = () => (
        <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
                Your Cart - {this.props.cart.length}
            </DropdownToggle>
            <DropdownMenu right>
                {this.props.cart.map((cartItem) => (
                    <DropdownItem key={cartItem.id}>
                        <Badge
                            color="danger"
                            onClick={() =>
                                this.props.removeFromCart(cartItem.product)
                            }
                        >
                            X
                        </Badge>
                        {cartItem.product.productName}&nbsp;
                        <Badge color="success">{cartItem.quantity}</Badge>
                    </DropdownItem>
                ))}
                <DropdownItem divider />
                <DropdownItem>
                    <Link to="cart">Go to Cart</Link>
                </DropdownItem>
            </DropdownMenu>
        </UncontrolledDropdown>
    );

    renderEmptyCart = () => (
        <NavItem>
            <NavLink>Your Cart is Empty..!</NavLink>
        </NavItem>
    );

    render() {
        return (
            <div>
                {this.props.cart.length > 0
                    ? this.renderSummary()
                    : this.renderEmptyCart()}
            </div>
        );
    }
}
