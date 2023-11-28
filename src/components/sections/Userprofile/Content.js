import React, { Component } from "react";
import Axios from "axios";

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiledata: [],
      name: "",
      designation: "",
    };
    this.displayinfo = React.createRef();
    this.displaydesignation = React.createRef();
  }
  getprofile = () => {
    Axios.get("http://localhost:3001/profile").then((response) => {
      console.log(response.data);
      this.setState({ profiledata: response.data });
      this.setState({
        name: response.data[0].firstname + " " + response.data[0].lastname,
      });
      this.setState({ designation: response.data[0].designation });
      this.displayinfo.current.style.display = "block";
      this.displaydesignation.current.style.display = "block";
      console.log(this.state.name);
      this.displayinfo.current.innerHTML = `<div>${this.state.name}</div>`;
      this.displaydesignation.current.innerHTML = `<div>${this.state.designation}</div>`;
    });
  };
  render() {
    return (
      <div className="ms-content-wrapper">
        <div className="ms-profile-overview">
          <div className="ms-profile-cover">
            {/* <img className="ms-profile-img" src={customerimg} alt="people" /> */}
            <div className="ms-profile-user-info">
              <h4
                className="ms-profile-username text-white"
                ref={this.displayinfo}
                style={{ display: "none" }}
              ></h4>
              <h2
                className="ms-profile-role"
                ref={this.displaydesignation}
                style={{ display: "none" }}
              ></h2>
              <button
                type="button"
                className="btn btn-primary"
                onClick={(e) => {
                  e.preventDefault();
                  this.getprofile();
                }}
              >
                {" "}
                view profile
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="ms-panel ms-panel-fh">
              <div className="ms-panel-body">
                <h2 className="section-title">Basic Information</h2>
                <table className="table ms-profile-information">
                  <tbody>
                    {this.state.profiledata.map((p, i) => (
                      <tr key={i}>
                        <th scope="row">Full Name</th>
                        <td>
                          {p.firstname}
                          {p.lastname}
                        </td>
                      </tr>
                    ))}
                    {this.state.profiledata.map((p, i) => (
                    <tr key={i}>
                      <th scope="row">Phone Number</th>
                      <td>{p.phone}</td>
                    </tr>
                    ))}
                    {this.state.profiledata.map((p, i) => (
                    <tr key={i}>
                      <th scope="row">Email Address</th>
                      <td>{p.emailaddress}</td>
                    </tr>
                    ))}
                    {this.state.profiledata.map((p, i) => (
                    <tr key={i}>
                      <th scope="row">Location</th>
                      <td>{p.location}</td>
                    </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
