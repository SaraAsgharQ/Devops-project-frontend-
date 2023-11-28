import React, { Component } from 'react';
import Sidenavigation from '../layouts/Sidenavigation';
import Topnavigation from '../layouts/Topnavigation';
import AddEmployeeContent from '../sections/Addemployee/AddEmployeeContent';
// import Quickbar from '../layouts/Quickbar';

class AddEmployee extends Component {
    render() {
        return (
            <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
                <Sidenavigation />
                <main className="body-content">
                    <Topnavigation />
                    <AddEmployeeContent/>
                </main>
                {/* <Quickbar /> */}
            </div>
        );
    }
}

export default AddEmployee;