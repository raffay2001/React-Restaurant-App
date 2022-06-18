import React, { Component } from "react";
import { Navbar, NavbarBrand, Jumbotron, Nav, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../Header.css';


class Header extends Component {

    constructor(props){
        super(props)
        this.state = {
            isNavOpen: false
        }
        this.toggleNav = this.toggleNav.bind(this); 
    }

    toggleNav(){
        this.setState(
            {
                isNavOpen: !this.state.isNavOpen
            }
        );
    }

    render() {
        return (
            <React.Fragment>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" alt="Ristorante Con Fusion" height="30" width="41" />
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar> 
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"> Home</span>
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"> About Us</span>
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"> Menu</span>
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"> Contact Us</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
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