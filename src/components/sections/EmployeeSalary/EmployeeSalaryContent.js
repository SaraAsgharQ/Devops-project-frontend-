import React, { Component } from "react";
import Breadcrumb from "../EmployeeSalary/Breadcrumb";
import Axios from 'axios'

class EmployeeSalaryContent extends Component {
  state = {
    employeesalarylist: [],
    class: "badge",
  }

  getemployeesalarylist = () => {
    Axios.get("http://localhost:3001/api/gettt", {
    }).then((response) => {
      this.setState({employeesalarylist: response.data});
    });
};
  // constructor() {
  //   super();
  //   this.state = {
  //     class: "badge",
  //   };
  // }
  render() {
    return (
      <div className="ms-content-wrapper">
        <div className="row">
          <div className="col-md-12">
            <Breadcrumb />
              <div className="ms-panel">
                <div className="ms-panel-header">
                  <h6> Employee Salary List</h6>
                </div>
                <div className="col-md-12">
                <button className="btn btn-primary w-100" onClick={(e)=>{e.preventDefault();this.getemployeesalarylist();}}>Show Salary Status</button>
                <div className="ms-panel-body">
                  <div className="table-responsive">
                    <table className="table table-hover thead-primary">
                      <thead>
                        <tr>
                          <th scope="col">Employee ID</th>
                          <th scope="col">Employee Name</th>
                          <th scope="col">Branch</th>
                          <th scope="col">Salary Status</th>
                          <th scope="col">Payment</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.state.employeesalarylist.map((emp, i) => (
                          <tr key={i}>
                            <th scope="row">{emp.id}</th>
                            <td>{emp.name}</td>
                            <td>{emp.branch_id}</td>
                            {(() => {
                              if (emp.status === "Paid") {
                                return (
                                  <td>
                                    <span className="badge badge-success">
                                      {emp.status}
                                    </span>
                                  </td>
                                );
                              } else {
                                return (
                                  <td>
                                    <span className="badge badge-danger">
                                      {emp.status}
                                    </span>
                                  </td>
                                );
                              }
                            })()}
                            {(() => {
                              if (emp.status === "Pending") {
                                return (
                                  <td>
                                    <button
                                      type="button"
                                      className="btn btn-success"
                                    >
                                      <i className="flaticon-tick-inside-circle" />
                                      Pay Salary
                                    </button>
                                  </td>
                                );
                              } else {
                                return <td></td>;
                              }
                            })()}
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

export default EmployeeSalaryContent;
