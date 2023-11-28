import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import $ from 'jquery';
import Scrollbar from 'react-perfect-scrollbar'
import 'react-perfect-scrollbar/dist/css/styles.css';

import logo from '../../assets/img/RMS/RMS-logos.png';

class Sidenavigation extends Component {

    removeoverlay = () => {
        $('.ms-body').toggleClass('ms-aside-left-open');
        $('#ms-side-nav').toggleClass('ms-aside-open');
        $(".ms-aside-overlay.ms-overlay-left").toggleClass('d-block');
    }
    componentDidMount() {
        function setActiveMenuItem() {
            $('.ms-main-aside .menu-item>a').on('click', function () {
                $(this).removeAttr('href');
                var element = $(this).parent('li');
                if (element.hasClass('active')) {
                    element.removeClass('active');
                    element.find('li').removeClass('active');
                    element.find('.collapse').slideUp();
                } else {
                    element.addClass('active');
                    element.children('.collapse').slideDown();
                    element.siblings('li').children('.collapse').slideUp();
                    element.siblings('li').removeClass('active');
                    element.siblings('li').find('li').removeClass('active');
                    element.siblings('li').find('.collapse').slideUp();
                }
            });
        }
        setActiveMenuItem();
    }
    render() {
        return (
            <div>
                <div className="ms-aside-overlay ms-overlay-left ms-toggler" onClick={this.removeoverlay}></div>
                <div className="ms-aside-overlay ms-overlay-right ms-toggler"></div>
                <Scrollbar id="ms-side-nav" className="side-nav fixed ms-aside-scrollable ms-aside-left">
                    <div className="logo-sn ms-d-block-lg">
                        <Link className="pl-0 ml-0 text-center" to="/">
                            <img src={logo} alt="logo" />
                        </Link>
                    </div>
                    <ul className="accordion ms-main-aside fs-14" id="side-nav-accordion">
                        {/* <li className="menu-item">
                            <Link to="#" className="has-chevron"> <span><i className="material-icons fs-16" >dashboard</i>Dashboard </span>
                            </Link>
                            <ul id="dashboard" className="collapse" aria-labelledby="dashboard" data-parent="#side-nav-accordion">
                                <li> <Link to="/">RMS</Link>
                                </li>
                            </ul>
                        </li> */}
                        <li className="menu-item">
                            <Link to="#" className="has-chevron"> <span><i className="fa fa-archive fs-16" />Menus </span>
                            </Link>
                            <ul id="product" className="collapse" aria-labelledby="product" data-parent="#side-nav-accordion">
                                <li> <Link to="/menu-grid" >Menu Grid</Link>
                                </li>
                                <li> <Link to="/add-product" >Add Product</Link>
                                </li >
                            </ul >
                        </li >
                        <li className="menu-item">
                            <Link to="#" className="has-chevron"> <span><i className="fa fa-th-large fs-16" />Category</span>
                            </Link>
                            <ul id="product" className="collapse" aria-labelledby="product" data-parent="#side-nav-accordion">
                                <li> <Link to="/view-categories" >View Categories</Link>
                                </li>
                                <li> <Link to="/add-category" >Add Category</Link>
                                </li>
                            </ul >
                        </li >
                        <li className="menu-item">
                            <Link to="#" className="has-chevron"> <span><i className="fas fa-user-tie fs-16" />Employee</span>
                            </Link>
                            <ul id="product" className="collapse" aria-labelledby="product" data-parent="#side-nav-accordion">
                                <li> <Link to="/view-employee" >View Employee</Link>
                                </li>
                                <li> <Link to="/add-employee" >Add Employee</Link>
                                </li>
                                <li> <Link to="/employee-salary" >Employee Salary</Link>
                                </li>
                            </ul >
                        </li >
                        <li className="menu-item">
                            <Link to="#" className="has-chevron"> <span><i className="fas fa-clipboard-list fs-16" />Orders</span>
                            </Link>
                            <ul id="product" className="collapse" aria-labelledby="product" data-parent="#side-nav-accordion">
                            <li className="menu-item">
                                <Link to="/orders">Order List
                                </Link>
                            </li >
                            <li className="menu-item">
                                <Link to="/add-order">Add Order
                                </Link>
                            </li >
                            </ul>
                        </li>
                        <li className="menu-item">
                            <Link to="/restaurant-list"> <span><i className="fa fa-tasks fs-16" />Restaurants List</span>
                            </Link>
                        </li >
                        <li className="menu-item">
                            <Link to="#" className="has-chevron"> <span><i className="fas fa-user-friends fs-16" />Customers </span>
                            </Link>
                            <ul id="customer" className="collapse" aria-labelledby="customer" data-parent="#side-nav-accordion">
                                <li> <Link to="/customer-feedback" >Customer Feedback</Link>
                                </li>
                            </ul >
                        </li >
                        <li className="menu-item">
                            <Link to="/manage-tables" > <span><i className="fa fa-bookmark" />Manage Tables</span>
                            </Link>
                        </li >
                        {/* sales */}
                        <li className="menu-item">
                            <Link to="/sales" > <span><i className="fa fa-briefcase fs-16" />Sales</span>
                            </Link>
                        </li >
                        <li className="menu-item">
                            <Link to="/about" > <span><i className="fa fa-info-circle" />About</span>
                            </Link>
                        </li >
                        <li className="menu-item">
                            <Link to="/report-issues" > <span><i className="fa fa-phone" />Report Issues</span>
                            </Link>
                        </li >
                    </ul >
                </Scrollbar >
            </div >
        );
    }
}

export default Sidenavigation;