import React, { Component } from 'react';
import { Button, Table } from 'reactstrap';

export default class ProductList extends Component {
    render() {
        return (
            <div>
                <h3>
                    {this.props.info.title} - {this.props.currentCategory}
                    <Table>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Product Name</th>
                                <th>Init Price</th>
                                <th>Quantity Per Unit</th>
                                <th>Units In Stock</th>
                                <th>İşlemler</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.products.map((product) => (
                                <tr key={product.id}>
                                    <th scope="row">{product.id}</th>
                                    <td>{product.productName}</td>
                                    <td>{product.unitPrice}</td>
                                    <td>{product.quantityPerUnit}</td>
                                    <td>{product.unitsInStock}</td>
                                    <td>
                                        <Button
                                            onClick={() =>
                                                this.props.addToCart(product)
                                            }
                                            color="info"
                                        >
                                            Add to Cart
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </h3>
            </div>
        );
    }
}
