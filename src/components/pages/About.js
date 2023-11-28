import React, { Component } from 'react';
import Sidenavigation from '../layouts/Sidenavigation';
import Topnavigation from '../layouts/Topnavigation';
import AboutContent from '../sections/About/AboutContent';
// import Quickbar from '../layouts/Quickbar';

class About extends Component {
    render() {
        return (
            <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
                <Sidenavigation />
                <main className="body-content">
                    <Topnavigation />
                    <AboutContent/>
                </main>
                {/* <Quickbar /> */}
            </div>
        );
    }
}

export default About;