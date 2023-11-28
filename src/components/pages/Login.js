import React, { Component } from 'react';
import Sidenavigation from '../layouts/Sidenavigation';
import Topnavigation from '../layouts/Topnavigation';
import Content from '../sections/Login/Content';

class Login extends Component {
    render() {
        return (
            <div className="ms-body ms-primary-theme ms-logged-out">
                <main className="body-content">
                    <Content/>
                </main>
            </div>
        );
    }
}

export default Login;