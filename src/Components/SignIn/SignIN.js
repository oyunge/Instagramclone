import React, { Component } from 'react';
import './SignIn.css';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <input className="logipage__text" type="text" placeholder="phone number, username or email" />
                <input className="logipage__text" type="password" placeholder="password" />
                <button className="login__button">Login</button>
            </div>
        );
    }
}

export default SignIn;