import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import $ from 'jquery';
import { Dropdown, NavLink } from 'react-bootstrap';
import 'react-perfect-scrollbar/dist/css/styles.css';

import RMSlogo from '../../assets/img/RMS/RMS-logos.png'

class Topnavigation extends Component {
    addsidenavigation = () => {
        $('.ms-body').toggleClass('ms-aside-left-open');
        $('#ms-side-nav').toggleClass('ms-aside-open');
        $(".ms-aside-overlay.ms-overlay-left").toggleClass('d-block');
    }
    topbaropen = () => {
        $('#ms-nav-options').toggleClass('ms-slide-down');
    }

    render() {
        return (
            <nav className="navbar ms-navbar full-width">
                <div className="ms-aside-toggler ms-toggler pl-0" onClick={this.addsidenavigation}>
                    <span className="ms-toggler-bar bg-primary" />
                    <span className="ms-toggler-bar bg-primary" />
                    <span className="ms-toggler-bar bg-primary" />
                </div>
                <div className="logo-sn logo-sm ms-d-block-sm">
                    <Link className="pl-0 ml-0 text-center navbar-brand mr-0" to="/"><img src={RMSlogo} alt="logo" /> </Link>
                </div>
                <ul className="ms-nav-list ms-inline mb-0" id="ms-nav-options">
                    <li className="ms-nav-item ms-nav-user dropdown">
                        <Dropdown className="custom-dropdown">
                            <Dropdown.Toggle as={NavLink} id="userDropdown" className="p-0">
                            <div className="col-sm-6 col-md-4 col-lg-3"> <i className="flaticon-user" /></div>
                            </Dropdown.Toggle>
                            <Dropdown.Menu className="dropdown-menu dropdown-menu-right user-dropdown" aria-labelledby="userDropdown">
                                <div className="dropdown-divider" />
                                <div className="ms-dropdown-list">
                                    <Link className="media fs-14 p-2" to="/user-profile"> <span><i className="flaticon-user mr-2" /> Profile</span>
                                    </Link>
                                </div>
                                <div className="dropdown-divider" />
                                <div className="dropdown-menu-footer">
                                    <Link className="media fs-14 p-2" to="/login"> <span><i className="flaticon-shut-down mr-2" /> Logout</span>
                                    </Link>
                                </div>
                            </Dropdown.Menu>
                        </Dropdown>
                    </li>
                </ul>
                <div className="ms-toggler ms-d-block-sm pr-0 ms-nav-toggler" onClick={this.topbaropen}>
                    <span className="ms-toggler-bar bg-primary" />
                    <span className="ms-toggler-bar bg-primary" />
                    <span className="ms-toggler-bar bg-primary" />
                </div>
            </nav >
        );
    }
}

export default Topnavigation;