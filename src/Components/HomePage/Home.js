import React, { Component } from 'react';
import MainContent from '../MainContent2/MainContent';
import NavBar from '../NavBar/NavBar';
import './Home.css'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <NavBar />
                <MainContent />
            </div>
        );
    }
}

export default Home;