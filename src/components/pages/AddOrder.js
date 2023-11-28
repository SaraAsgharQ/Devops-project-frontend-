import React, { Component } from 'react';
import Sidenavigation from '../layouts/Sidenavigation';
import Topnavigation from '../layouts/Topnavigation';
import AddOrderForm from '../sections/AddOrder/AddOrderForm';

class AddOrder extends Component {
    render() {
        return (
            <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
                <Sidenavigation />
                <main className="body-content">
                    <Topnavigation />
                    <AddOrderForm/>
                </main>
            </div>
        );
    }
}

export default AddOrder;