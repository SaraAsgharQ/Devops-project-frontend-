import React, { Component } from 'react';
import Sidenavigation from '../layouts/Sidenavigation';
import Topnavigation from '../layouts/Topnavigation';
import EmployeeSalaryContent from '../sections/EmployeeSalary/EmployeeSalaryContent';
// import Quickbar from '../layouts/Quickbar';

class EmployeeSalary extends Component {
    render() {
        return (
            <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
                <Sidenavigation />
                <main className="body-content">
                    <Topnavigation />
                    <EmployeeSalaryContent/>
                </main>
                {/* <Quickbar /> */}
            </div>
        );
    }
}

export default EmployeeSalary;