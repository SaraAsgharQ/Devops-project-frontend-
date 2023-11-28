import React, { Component } from "react";
import { Link, useHistory,withRouter } from "react-router-dom";
import { Modal } from "react-bootstrap";
import Axios from "axios";
import Recentorder from "../Dashboard/Recentorder";

class Content extends Component {
  state = {
    emailaddress: "",
    password: "",
    LoginStatus: "",
  };
  constructor(props, context) {
    super(props, context);
    this.handleShow1 = this.handleShow1.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
    };
    this.errormessage = React.createRef();
  }
  handleShow1() {
    this.setState({ show1: true });
  }
  handleClose() {
    this.setState({ show1: false });
  }
  handleSignin = () => {
    
        Axios.post("http://localhost:3001/login", {
          emailaddress: this.state.emailaddress,
          password: this.state.password,
        }).then((err) => {
          if(err.data.message){
            console.log("failed");
            this.errormessage.current.style.display = "block";
            this.errormessage.current.innerHTML = '<strong>Warning!</strong> Incorrect info.';
          }else{
            console.log("Success");
            this.props.history.push("/about");
          }
        });
    
  }
  render() {
    return (
      <div className="ms-content-wrapper ms-auth" >
            <div className="alert alert-danger" role="alert"  id="error" ref={this.errormessage} style = {{display: 'none'}}>
            </div>
        <div className="ms-auth-container">
          <div className="ms-auth-col">
            <div className="ms-auth-bg" />
          </div>
          <div className="ms-auth-col">
            <div className="ms-auth-form">
              <form className="needs-validation" noValidate>
                <h3>Login to Account</h3>
                <p>Please enter your email and password to continue</p>
                <div className="mb-3">
                  <label htmlFor="validationCustom08">Email Address</label>
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      id="validationCustom08"
                      placeholder="Email Address"
                      required
                      onChange={(event) =>
                        this.setState({ emailaddress: event.target.value })
                      }
                    />
                    <div className="invalid-feedback">
                      Please provide a valid email.
                    </div>
                  </div>
                </div>
                <div className="mb-2">
                  <label htmlFor="validationCustom09">Password</label>
                  <div className="input-group">
                    <input
                      type="password"
                      className="form-control"
                      id="validationCustom09"
                      placeholder="Password"
                      required
                      onChange={(event) =>
                        this.setState({ password: event.target.value })
                      }
                    />
                    <div className="invalid-feedback">
                      Please provide a password.
                    </div>
                  </div>
                </div>
                <button
                  className="btn btn-primary mt-4 d-block w-100"
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    this.handleSignin();
                  }}
                >
                  Sign In
                </button>
                <p className="mb-0 mt-3 text-center">
                  <Link className="btn-link" to="/dashboard"></Link>
                </p>
                <p className="mb-0 mt-3 text-center">
                  Don't have an account?{" "}
                  <Link className="btn-link" to="/register">
                    Create Account
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
        <Modal
          className="modal-min"
          show={this.state.show1}
          onHide={this.handleClose}
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body className="text-center">
            <button type="button" className="close" onClick={this.handleClose}>
              <span aria-hidden="true">×</span>
            </button>
            <i className="flaticon-secure-shield d-block" />
            <h1>Forgot Password?</h1>
            <p>Enter your email to recover your password</p>
            <form method="post">
              <div className="ms-form-group has-icon">
                <input
                  type="text"
                  placeholder="Email Address"
                  className="form-control"
                  name="forgot-password"
                />{" "}
                <i class="material-icons">email</i>
              </div>
              
              <button type="submit" className="btn btn-primary shadow-none">
                Reset Password
              </button>
            </form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default withRouter(Content);
