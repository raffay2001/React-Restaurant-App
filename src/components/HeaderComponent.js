import React, { Component } from "react";
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';
import '../Header.css';


class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <div className="custom-jumbotron container-fluid">
                    <div className="row row-header">
                        <div className="col-12 col-sm-6 d-flex justify-content-center">
                            <div>
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and
                                    <br /> create a unique fusion experience. Our lipsmacking  <br /> creations wil tickle your culinary senses!</p>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6">
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;