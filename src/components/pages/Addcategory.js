import React, { Component } from 'react';
import Sidenavigation from '../layouts/Sidenavigation';
import Topnavigation from '../layouts/Topnavigation';
import AddCategoryContent from '../sections/AddCategory/AddCategoryContent';
// import Quickbar from '../layouts/Quickbar';

class AddCategory extends Component {
    render() {
        return (
            <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
                <Sidenavigation />
                <main className="body-content">
                    <Topnavigation />
                    <AddCategoryContent/>
                </main>
                {/* <Quickbar /> */}
            </div>
        );
    }
}

export default AddCategory;