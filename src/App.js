import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import CategoryList from './CategoryList';
import Navi from './Navi';
import ProductList from './ProductList';
import alertify from 'alertifyjs';
import { Route, Switch } from 'react-router-dom';
import NotFound from './NotFound';
import CartList from './CartList';
import FormDemo1 from './FormDemo1';
import FormDemo2 from './FormDemo2';
export default class App extends Component {
    state = {
        categoryInfo: { title: 'Category List' },
        productInfo: { title: 'Product List' },
        currentCategory: '',
        products: [],
        cart: [],
    };

    addToCart = (product) => {
        let newCart = this.state.cart;
        var addedItem = newCart.find((item) => item.product.id === product.id);
        if (addedItem) {
            addedItem.quantity += 1;
        } else {
            newCart.push({ product: product, quantity: 1 });
        }
        this.setState({ cart: newCart });
        alertify.success(product.productName + ' added to cart.!', 2);
    };

    removeFromCart = (product) => {
        let newCart = this.state.cart.filter(
            (cartItem) => cartItem.product.id !== product.id,
        );
        this.setState({ cart: newCart });
        alertify.error(product.productName + ' removed from cart.!', 2);
    };

    changeCategory = (category) => {
        this.setState({
            currentCategory: category.categoryName,
        });
        this.getProducts(category.id);
    };

    getProducts = (categoryId) => {
        let url = 'http://localhost:3005/products';
        if (categoryId) {
            url += '?categoryId=' + categoryId;
        }
        fetch(url)
            .then((response) => response.json())
            .then((data) => this.setState({ products: data }));
    };

    componentDidMount() {
        this.getProducts();
    }
    render() {
        return (
            <div>
                <Container>
                    <Navi
                        removeFromCart={this.removeFromCart}
                        cart={this.state.cart}
                    />
                    <Row>
                        <Col xs="3">
                            <CategoryList
                                currentCategory={this.state.currentCategory}
                                changeCategory={this.changeCategory}
                                info={this.state.categoryInfo}
                            />
                        </Col>
                        <Col xs="9">
                            <Switch>
                                <Route
                                    exact
                                    path="/"
                                    render={(props) => (
                                        <ProductList
                                            {...props}
                                            currentCategory={
                                                this.state.currentCategory
                                            }
                                            info={this.state.productInfo}
                                            products={this.state.products}
                                            addToCart={this.addToCart}
                                        />
                                    )}
                                />
                                <Route
                                    exact
                                    path="/form1"
                                    component={FormDemo1}
                                />
                                <Route
                                    exact
                                    path="/form2"
                                    component={FormDemo2}
                                />
                                <Route
                                    exact
                                    path="/cart"
                                    render={(props) => (
                                        <CartList
                                            {...props}
                                            cart={this.state.cart}
                                            removeFromCart={this.removeFromCart}
                                        />
                                    )}
                                />
                                <Route component={NotFound} />
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}
