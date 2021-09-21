import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import alertify from 'alertifyjs';

export default class FormDemo2 extends Component {
    state = {
        email: '',
        password: '',
        city: '',
        description: '',
    };

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        alertify.success(this.state.email + 'added to db.!', 2);
    };
    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Please enter your email"
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Please enter your password"
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="description">Description</Label>
                    <Input
                        type="textarea"
                        name="description"
                        id="description"
                        placeholder="Please enter some description"
                        onChange={this.handleChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="city">City</Label>
                    <Input
                        type="select"
                        name="city"
                        id="city"
                        onChange={this.handleChange}
                    >
                        <option value="Ankara">Ankara</option>
                        <option value="İstanbul">İstanbul</option>
                        <option value="İzmir">İzmir</option>
                        <option value="Adana">Adana</option>
                        <option value="Mersin">Mersin</option>
                    </Input>
                </FormGroup>
                <Button type="submit">Submit</Button>
            </Form>
        );
    }
}
