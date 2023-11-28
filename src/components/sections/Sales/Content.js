import React, { Component } from "react";
import Breadcrumb from "./Breadcrumb";
import Axios from "axios";
// Table data

class Content extends Component {
    state = {
        SalesContent: [],
    };
    getemployeesalarylist = () => {
        Axios.get("http://localhost:3001/api/getsales", {
        }).then((response) => {
          this.setState({SalesContent: response.data});
        });
    };
  render() {
    return (
      <div className="ms-content-wrapper">
        <div className="row">
          <div className="col-md-12">
            <Breadcrumb />
            <div className="ms-panel">
              <div className="ms-panel-header">
                <h6> Sales List</h6>
              </div>
              <div className="col-md-12">
                <button
                  className="btn btn-primary w-100"
                  onClick = {(e)=>{e.preventDefault();this.getemployeesalarylist();}}
                >
                  Show list
                </button>
                <div className="ms-panel-body">
                  <div className="table-responsive">
                    <table className="table table-hover thead-primary">
                      <thead>
                        <tr>
                          <th scope="col">Sale ID</th>
                          <th scope="col"> Sale Name</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Price</th>
                        </tr>
                      </thead>

                      <tbody>
                        {this.state.SalesContent.map((s, i) => (
                          <tr key={i}>
                            <th scope="row">{s.id}</th>
                            <td>{s.name}</td>
                            <td>{s.quantity}</td>
                            <td>{s.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
