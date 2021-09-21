import React, { Component } from 'react';

export default class FormDemo1 extends Component {
    state = {
        name: '',
        city: '',
    };

    onChangeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    onSubmitHandler = (event) => {
        alert(this.state.name);
        event.preventDefault();
    };
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmitHandler}>
                    <h4>Please Enter Your Name</h4>
                    <input
                        name="name"
                        type="text"
                        onChange={this.onChangeHandler}
                    ></input>
                    <h2>Your name is {this.state.name}</h2>

                    <h4>Please Enter Your City</h4>
                    <input
                        name="city"
                        type="text"
                        onChange={this.onChangeHandler}
                    ></input>
                    <h2>Your city is {this.state.city}</h2>

                    <input type="submit" value="Save"></input>
                </form>
            </div>
        );
    }
}
