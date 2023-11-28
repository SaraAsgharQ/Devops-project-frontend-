import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import $ from 'jquery';

import tpfdimg1 from '../../../assets/img/RMS/pizza.jpg';
import tpfdimg2 from '../../../assets/img/RMS/french-fries.jpg';
import tpfdimg3 from '../../../assets/img/RMS/cereals.jpg';
import tpfdimg4 from '../../../assets/img/RMS/egg-sandwich.jpg';


const restaurentlisttable = [
    {
        id: "15451",
        name: "Delizus",
        location: "New York",
        jndate: "12/10/19",
        rssale: "90",
    },
    {
        id: "15452",
        name: "Lumina",
        location: "New York",
        jndate: "20/9/19",
        rssale: "99",
    },
    {
        id: "45263",
        name: "Food Loung",
        location: "New York",
        jndate: "15/10/19",
        rssale: "95",
    },
    {
        id: "45865",
        name: "Hungry House",
        location: "New York",
        jndate: "21/11/19",
        rssale: "88",
    },
    {
        id: "56652",
        name: "Luncheon",
        location: "New York",
        jndate: "12/11/19",
        rssale: "81",
    },
    {
        id: "65845",
        name: "Spice 'n' Steam",
        location: "New York",
        jndate: "20/10/19",
        rssale: "91",
    },
    {
        id: "65425",
        name: "Tomato",
        location: "New York",
        jndate: "12/10/19",
        rssale: "77",
    },
    {
        id: "54556",
        name: "Bardojo",
        location: "New York",
        jndate: "12/11/19",
        rssale: "78",
    },
    {
        id: "45556",
        name: "Deliceiux",
        location: "New York",
        jndate: "22/10/19",
        rssale: "88",
    },
    {
        id: "55856",
        name: "Food Forest",
        location: "New York",
        jndate: "12/10/19",
        rssale: "75",
    },
    {
        id: "36456",
        name: "Food Bella",
        location: "New York",
        jndate: "18/11/19",
        rssale: "90",
    },
    {
        id: "78456",
        name: "Red Chilly",
        location: "New York",
        jndate: "12/10/19",
        rssale: "85",
    },
]
class Restaurantcontent extends Component {
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-md-12">
                        <Breadcrumb />
                        {/* Active Orders Graph */}
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="ms-panel">
                                    <div className="ms-panel-header">
                                        <h6>Restaurant List</h6>
                                    </div>
                                    <div className="ms-panel-body">
                                        <div className="table-responsive">
                                            <table className="table table-hover thead-primary">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">Restaurant ID</th>
                                                        <th scope="col">Restaurant Name</th>
                                                        <th scope="col">Location</th>
                                                        <th scope="col">Joining Date</th>
                                                        <th scope="col">Restaurant Sale(%)</th>
                                                        <th scope="col">Edit / Delete</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {restaurentlisttable.map((item, i) => (
                                                        <tr key={i}>
                                                            <th scope="row">{item.id}</th>
                                                            <td>{item.name}</td>
                                                            <td>{item.location}</td>
                                                            <td>{item.jndate}</td>
                                                            <td>{item.rssale}</td>
                                                            <td>
                                                                <Link to="#"><i className="fas fa-pencil-alt text-secondary" /></Link>
                                                                <Link to="#"><i className="far fa-trash-alt ms-text-danger" /></Link></td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Restaurantcontent;