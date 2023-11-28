import React, { Component } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "./Breadcrumb";
import Axios from 'axios'

// const Employees = [
//   {
//     id: "15451",
//     name: "Mark",
//     location: "New York",
//     jndate: "12/10/19",
//   },
//   {
//     id: "15452",
//     name: "Lumina",
//     location: "New York",
//     jndate: "20/9/19",
//   },
//   {
//     id: "45263",
//     name: "Florintine",
//     location: "New York",
//     jndate: "15/10/19",
//   },
//   {
//     id: "45865",
//     name: "Hana",
//     location: "New York",
//     jndate: "21/11/19",
//   },
//   {
//     id: "56652",
//     name: "Jhon",
//     location: "New York",
//     jndate: "12/11/19",
//   },
//   {
//     id: "65845",
//     name: "Sarah",
//     location: "New York",
//     jndate: "20/10/19",
//   },
//   {
//     id: "65425",
//     name: "Macy",
//     location: "New York",
//     jndate: "12/10/19",
//   },
//   {
//     id: "54556",
//     name: "Dawood",
//     location: "New York",
//     jndate: "12/11/19",
//   },
//   {
//     id: "45556",
//     name: "Kulzum",
//     location: "New York",
//     jndate: "22/10/19",
//   },
//   {
//     id: "55856",
//     name: "Harry",
//     location: "New York",
//     jndate: "12/10/19",
//   },
//   {
//     id: "36456",
//     name: "Bella",
//     location: "New York",
//     jndate: "18/11/19",
//   },
//   {
//     id: "78456",
//     name: "Ross",
//     location: "New York",
//     jndate: "12/10/19",
//   },
// ];

class ViewEmployeeContent extends Component {
  state = {
    employeelist: []
    
  }

  getaddemployeelist = () => {
    Axios.get("http://localhost:3001/api/get", {
    }).then((response) => {
      this.setState({employeelist: response.data});
    });
};
  render() {
    return (
      <div className="ms-content-wrapper">
        <div className="row">
          <div className="col-md-12">
            <Breadcrumb />
            {/* Active Orders Graph */}
            <div className="ms-panel">
              <div className="ms-panel-header">
                <h6>Employee List</h6>
              </div>
              <div className="col-md-12">
                <button className="btn btn-primary w-100" onClick={(e)=>{e.preventDefault();this.getaddemployeelist();}}>Show Employees</button>
              <div className="ms-panel-body">
                <div className="table-responsive">
                  <table className="table table-hover thead-primary">
                    <thead>
                      <tr>
                        <th scope="col">Employee ID</th>
                        <th scope="col">Employee Name</th>
                        <th scope="col">Branch</th>
                        <th scope="col">Salary</th>
                        <th scope="col">Joining Date</th>
                        <th scope="col">Edit / Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.employeelist.map((emp, i) => (
                        <tr key={i}>
                          <th scope="row">{emp.id}</th>
                          <td>{emp.name}</td>
                          <td>{emp.branch_id}</td>
                          <td>{emp.salary}</td>
                          <td>{emp.joining_date}</td>
                          <td>
                            <Link to="#">
                              <i className="fas fa-pencil-alt text-secondary" />
                            </Link>
                            <Link to="#">
                              <i className="far fa-trash-alt ms-text-danger" />
                            </Link>
                          </td>
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

export default ViewEmployeeContent;
