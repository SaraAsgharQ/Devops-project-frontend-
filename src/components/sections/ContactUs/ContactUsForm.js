import React, { Component } from "react";
import Breadcrumb from "./Breadcrumb";

class ContactUsForm extends Component {
  render() {
    return (
      <div className="ms-content-wrapper">
        <div className="row">
          <div className="col-md-12">
            <Breadcrumb />
          </div>
        </div>
        <div className="col-xl-6 col-md-12">
          <div className="ms-panel ms-panel-fh">
            <div className="ms-panel-header">
              <h6>Report Issuesue Form</h6>
            </div>
            <div className="ms-panel-body">
              <form className="needs-validation clearfix" noValidate>
                <div className="form-row">
                  <div className="col-xl-6 col-md-12 mb-3">
                    <label htmlFor="validationCustom10">Full Name</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        id="validationCustom10"
                        placeholder="Full Name"
                        required
                      />
                      <div className="invalid-feedback">
                        Please provide full name
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-md-12">
                    <label htmlFor="validationCustom11">Email Address</label>
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control"
                        id="validationCustom11"
                        placeholder="Email Address"
                        required
                      />
                      <div className="invalid-feedback">
                        Please provide a valid email.
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <label htmlFor="validationCustom12">Message</label>
                    <div className="input-group">
                      <textarea
                        rows={5}
                        id="validationCustom12"
                        className="form-control"
                        placeholder="Message"
                        required
                        defaultValue={""}
                      />
                      <div className="invalid-feedback">
                        Please provide a message.
                      </div>
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary float-right" type="submit">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ContactUsForm;
