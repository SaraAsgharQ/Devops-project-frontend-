import React, { Component } from 'react';
import Sidenavigation from '../layouts/Sidenavigation';
import Topnavigation from '../layouts/Topnavigation';
import ViewEmployeeContent from '../sections/Viewemployee/ViewEmployeeContent';

// import Quickbar from '../layouts/Quickbar';

class ViewEmployee extends Component {
    render() {
        return (
            <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
                <Sidenavigation />
                <main className="body-content">
                    <Topnavigation />
                    <ViewEmployeeContent/>
                </main>
                {/* <Quickbar /> */}
            </div>
        );
    }
}

export default ViewEmployee;