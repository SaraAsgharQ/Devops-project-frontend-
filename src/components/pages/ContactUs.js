import React, { Component } from 'react';
import Sidenavigation from '../layouts/Sidenavigation';
import Topnavigation from '../layouts/Topnavigation';
import ContactUsForm from '../sections/ContactUs/ContactUsForm';


class ContactUs extends Component {
    render() {
        return (
            <div className="ms-body ms-primary-theme ms-logged-out">
                <Sidenavigation />
                <main className="body-content">
                    <Topnavigation />
                    <ContactUsForm/>
                </main>
            </div>
        );
    }
}

export default ContactUs;