import React, { Component } from 'react';
import Sidenavigation from '../layouts/Sidenavigation';
import Topnavigation from '../layouts/Topnavigation';
import ViewCategoriesContent from '../sections/ViewCategories.js/ViewCategoriesContent';
// import Quickbar from '../layouts/Quickbar';

class ViewCategories extends Component {
    render() {
        return (
            <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
                <Sidenavigation />
                <main className="body-content">
                    <Topnavigation />
                    <ViewCategoriesContent/>
                </main>
                {/* <Quickbar /> */}
            </div>
        );
    }
}

export default ViewCategories;