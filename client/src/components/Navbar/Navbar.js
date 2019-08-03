import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Navbar/Navbar.css';
import Jumbotron from '../Jumbotron/Jumbotron';


class Navbar extends Component {
    render() {
        return (
            <div>
                <nav id="navigation" className="navbar navbar-expand-lg">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><FontAwesomeIcon icon="bars" size="lg" id="menu-toggler" /></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto" id="navbar-right">
                            <button className="btn">LOGIN</button>
                        </ul>
                    </div>
                </nav>
                <Jumbotron />
            </div>
        )
    }
}


export default Navbar;