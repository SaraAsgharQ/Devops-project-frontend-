import React, { Component } from "react";
import { Breadcrumb } from "react-bootstrap";

import logo from "../../../assets/img/RMS/RMS-logos.jpg";

class AboutContent extends Component {
  state = {
    display: true,
    content:
      "We believe in the commitment to our community and in fostering long term relationships with local farmers and fishermen. Our menus reflect these connections, featuring local, seasonal produce and sustainably sourced seafood and meats",
  };
  OnEdit = () => {
    this.setState({ display: false });
  };
  OnSave = (event) => {
    event.preventDefault();
    let editedinfo = document.getElementById("validationCustom12").value;
    this.setState({ content: editedinfo });
    this.setState({ display: true });
  };
  render() {
    return (
      <div className="ms-content-wrapper">
        <Breadcrumb />
        <div className="ms-profile-overview">
          <div className="ms-profile-cover">
            <img className="ms-profile-img" src={logo} />
            <div className="ms-profile-user-info">
              <h4 className="ms-profile-username text-white">
                Restaurant Management System
              </h4>
            </div>
            <div className="ms-profile-user-buttons">
              <button
                type="button"
                className="btn btn-primary has-icon"
                onClick={this.OnEdit}
              >
                <i className="flaticon-pencil" /> Edit
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-md-12">
            <div className="ms-panel ms-panel-fh">
              <div className="ms-panel-body">
                <h2 className="section-title">About RMS</h2>
                <p>{this.state.content}</p>
              </div>
            </div>
          </div>
          <div
            id="edit"
            className="col-xl-5 col-md-12"
            hidden={this.state.display}
          >
            <div className="ms-panel ms-panel-fh">
              <div className="ms-panel-header">
                <h6>Edit About</h6>
              </div>
              <div className="ms-panel-body">
                <form className="needs-validation clearfix" noValidate>
                  <div className="form-row">
                    <div className="col-md-12">
                      <label htmlFor="validationCustom12">
                        New about Information
                      </label>
                      <div className="input-group">
                        <textarea
                          rows={5}
                          id="validationCustom12"
                          className="form-control"
                          placeholder="Information...."
                          required
                          defaultValue={""}
                        />
                        <div className="invalid-feedback">
                          Pleas correct Information.
                        </div>
                      </div>
                    </div>
                  </div>
                  <button
                    className="btn btn-primary float-right"
                    onClick={this.OnSave}
                  >
                    Save
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-md-12">
            <div className="ms-panel ms-btn-display">
              <div className="ms-panel-header">
                <h6>Socials</h6>
              </div>
              <div className="ms-panel-body">
                <button
                  type="button"
                  className="btn btn-square bg-facebook has-icon"
                >
                  <i className="fab fa-facebook-f" /> Facebook
                </button>
                <button
                  type="button"
                  className="btn btn-square bg-twitter has-icon"
                >
                  <i className="fab fa-twitter" /> Twitter
                </button>
                <button
                  type="button"
                  className="btn btn-square bg-instagram has-icon"
                >
                  <i className="fab fa-instagram" /> Instagram
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutContent;
