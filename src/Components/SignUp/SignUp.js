import React, { Component } from 'react';
import './SignUp.css';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <input className="logipage__text" type="text" placeholder="mobile number or email" />
                <input className="logipage__text" type="text" placeholder="full Name" />
                <input className="logipage__text" type="text" placeholder="user Name" />

                <input className="logipage__text" type="password" placeholder="password" />
                <button className="login__button">sign up</button>
            </div>
        );
    }
}

export default SignUp;