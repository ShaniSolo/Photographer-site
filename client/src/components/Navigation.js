import React from 'react';
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavbarToggler, MDBCollapse, MDBNavItem, MDBNavLink, MDBIcon, MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem } from 'mdbreact';
import logo from '../pictures/michal_logo.jpg'
import adminStore from './isAdmin';
import { observer } from 'mobx-react'
import '../App.css'
import './navigation.css'

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse,
    });
  }



  render() {
    return (
      <div className="formpage">
        <header className="header">
          <MDBNavbar color="#696969" dark expand="xs" >            ‏
            <MDBNavbarToggler onClick={this.onClick} />
            <MDBCollapse className="collaps" isOpen={this.state.collapse} navbar>
              <MDBNavbarNav left className="collaps">
                <MDBNavbarBrand className="nav-logo" href="/">
                  <img className="logo1" src={logo} height="100" alt=" " />
                </MDBNavbarBrand>
                <MDBNavItem className="nav-first-item nav-item">
                  <MDBNavLink to="/">HOME</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="nav-item">
                  <MDBNavLink className="navLink" to="/about">ABOUT</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem className="nav-item">
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <span className="mr-2">GALLERY</span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className="dropdown">
                      <MDBDropdownItem href="/gallery/newborn">Newborn</MDBDropdownItem>
                      <MDBDropdownItem href="/gallery/halake">Halake</MDBDropdownItem>
                      <MDBDropdownItem href="/gallery/batmitzva">Bat Mitzva</MDBDropdownItem>
                      <MDBDropdownItem href="/gallery/children">Children</MDBDropdownItem>
                      <MDBDropdownItem href="/gallery/product">Product</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
                <MDBNavItem className="nav-item">
                  <MDBNavLink to="/packages">PACKAGES</MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink to="/contact">CONTACT</MDBNavLink>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right className="nav-right collaps">
                
                <MDBNavItem className="nav-admin" >
                  <MDBNavLink className="admin-link" to={adminStore.isAdminMode ? "/login" : "/Admin"}>  ADMIN</MDBNavLink>
                </MDBNavItem>
                {adminStore.isAdminMode &&
                  <MDBNavItem className="nav-admin" onClick={() => adminStore.exitAdminMode()}>
                    <MDBNavLink className="admin-link" to="/"><MDBIcon className="admin-icon" icon="sign-out-alt" />  LOGOUT</MDBNavLink>
                  </MDBNavItem>}
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </header>

      </div >

    );
  }
}

export default observer(Navbar);
