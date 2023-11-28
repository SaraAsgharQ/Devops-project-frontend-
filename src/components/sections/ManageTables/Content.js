import React, { Component } from "react";
import Breadcrumb from "../Orders/Breadcrumb";
import Axios from "axios";
class Ordertable extends Component {
  state = {
    tables : [],
  }
  gettableslist = () => {
    Axios.get("http://localhost:3001/api/gettables", {}).then((response) => {
      this.setState({ tables: response.data });
      
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
                <h6> Table list </h6>
              </div>
            <button
              type="button"
              className="btn btn-primary w-100"
              onClick = {(e)=>{e.preventDefault();this.gettableslist();}}
            >
              View Tables
            </button>
              <div className="ms-panel-body">
                <div className="table-responsive">
                  <table className="table table-hover thead-primary">
                    <thead>
                      <tr>
                        <th scope="col">Table ID</th>
                        <th scope="col">Location</th>
                        <th scope="col">Reserve</th>
                      </tr>
                    </thead>
                    <tbody>
                      {this.state.tables.map((t, i) => (
                        <tr key={i}>
                          <th scope="row">{t.id}</th>
                          <td>{t.location}</td>
                          <td>
                            <input type="checkbox" defaultValue />{" "}
                            <i className="ms-checkbox-check" />
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
    );
  }
}

export default Ordertable;
