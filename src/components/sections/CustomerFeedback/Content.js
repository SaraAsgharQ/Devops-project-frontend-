import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Breadcrumb from './Breadcrumb';
import $ from 'jquery';

// Images
import customerimg1 from '../../../assets/img/RMS/customer-1.jpg';
import customerimg2 from '../../../assets/img/RMS/customer-2.jpg';
import customerimg3 from '../../../assets/img/RMS/customer-3.jpg';
import customerimg4 from '../../../assets/img/RMS/customer-4.jpg';
import customerimg5 from '../../../assets/img/RMS/customer-5.jpg';

// Array
const reviewdata = [
    {
        name: "John Doe",
        tag: "Grilled Sandwich",
        date: "February 24, 2022",
        para: "Great food, great service, great atmosphere. I would recommend this restaurant to anyone who wants a great dining experience.",
    },
    
]

class Content extends Component {
    // Ratings
    render() {
        return (
            <div className="ms-content-wrapper">
                <div className="row">
                    <div className="col-12">
                        <Breadcrumb />
                    </div>
                </div>
                <div className="ms-content-wrapper">
                    <div className="row">
                        {/* Recent Support Tickets */}
                        <div className="col-xl-12 col-md-12">
                            <div className="ms-panel ms-panel-fh">
                                <div className="ms-panel-body p-0">
                                    <ul className="ms-list ms-feed ms-twitter-feed ms-recent-support-tickets">
                                        {reviewdata.map((item, i) => (
                                            <li key={i} className="ms-list-item">
                                                <Link to="/customer-review" className="media clearfix">
                                                    <div className="media-body">
                                                        <div className="d-flex justify-content-between">
                                                            <div className="new">
                                                                <h5 className="ms-feed-user mb-0">{item.name}</h5>
                                                                <h6 className="ml-4 mb-0 text-red">{item.tag}</h6>
                                                            </div>
                                                        </div> <span className="my-2 d-block"> <i className="material-icons">date_range</i> {item.date}</span>
                                                        <p className="d-block">{item.para}</p>
                                                    </div>
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Content;