import React, { Component } from "react";
import Breadcrumb from "./Breadcrumb";
import Axios from 'axios'

class AddEmployeeContent extends Component {

  state = {
    id : "0",
    name : "",
    branch_id : "0",
    salary : "0",
    joining_date :""
}

addemployees = () => {
  Axios.post("http://localhost:3001/creat", {
      id: this.state.id,
      name: this.state.name, 
      branch_id: this.state.branch_id, 
      salary: this.state.salary, 
      joining_date:this.state.joining_date
      
  }).then(() =>{
      console.log("success");
  });
};
render() {
  return (
      <div className="ms-content-wrapper">
          <div className="row">
              {/* <div className="col-md-12">
                  <Breadcrumb/>
                  <div className="alert alert-success" role="alert">
                      <strong>Well done!</strong> You successfully read this important alert message.
                  </div>
              </div> */}
              <div className="col-xl-6 col-md-12">
                  <div className="ms-panel ms-panel-fh">
                      <div className="ms-panel-header">
                          <h6>Add EMPLOYEE Form</h6>
                      </div>
                      <div className="ms-panel-body">
                          <form className="needs-validation clearfix" noValidate>
                              <div className="form-row">
                              <div className="col-md-12 mb-3">
                                      <label htmlFor="validationCustom18">ID</label>
                                      <div className="input-group">
                                          <input type="text" className="form-control" id="validationCustom18" placeholder="Employee ID" defaultValue="" required onChange={(event)=>this.setState({id:(event.target.value)})}/>
                                          <div className="valid-feedback">
                                              Looks good!
                                       </div>
                                      </div>
                                  </div>
                                  <div className="col-md-12 mb-3">
                                      <label htmlFor="validationCustom18">Employee Name</label>
                                      <div className="input-group">
                                          <input type="text" className="form-control" id="validationCustom18" placeholder="Employee Name" defaultValue="" required onChange={(event)=>this.setState({name:(event.target.value)})}/>
                                          <div className="valid-feedback">
                                              Looks good!
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-6 mb-3">
                                      <label htmlFor="validationCustom22">Select Branch</label>
                                      <div className="input-group">
                                          <select className="form-control" id="validationCustom22" required onChange={(event)=>this.setState({branch_id:(event.target.value)})}>
                                              <option value = "1">Branch 1</option>
                                              <option value = "2">Branch 2</option>
                                              <option value = "3">Branch 3</option>
                                              <option value = "4">Branch 4</option>
                                          </select>
                                          <div className="invalid-feedback">
                                              Please select a Branch.
            </div>
                                      </div>
                                  </div>
                                  {/* <div className="col-md-6 mb-3">
                                      <label htmlFor="validationCustom23">Salary</label>
                                      <div className="input-group">
                                          <select className="form-control" id="validationCustom23" required onChange={(event)=>this.setState({salary:(event.target.value)})}>
                                              <option value = "USD">USD</option>
                                              <option value= "Bitcoins">Bitcoins</option>
                                              <option value = "Euro">EURO</option>
                                          </select>
                                          <div className="invalid-feedback">
                                              Please select a Currency
            </div>
                                      </div>
                                  </div> */}
                                  <div className="col-md-6 mb-3">
                                      <label htmlFor="validationCustom24">Salary</label>
                                      <div className="input-group">
                                          <input type="text" className="form-control" id="validationCustom24" placeholder="00" required onChange={(event)=>this.setState({salary:(event.target.value)})}/>
                                          <div className="invalid-feedback">
                                              Salary
            </div>
                                      </div>
                                  </div>
                                  <div className="col-md-6 mb-3">
                                      <label htmlFor="validationCustom25">joining_date</label>
                                      <div className="input-group">
                                          <input type="text" className="form-control" id="validationCustom25" placeholder="" required onChange={(event)=>this.setState({joining_date:(event.target.value)})}/>
                                          <div className="invalid-feedback">
                                              joining_date
            </div>
                                      </div>
                                  </div>
                                  {/* <div className="col-md-12 mb-3">
                                      <label htmlFor="validationCustom12">Description</label>
                                      <div className="input-group">
                                          <textarea rows={5} id="validationCustom12" className="form-control" placeholder="Message" required onChange={(event)=>this.setState({description:(event.target.value)})}/>
                                          <div className="invalid-feedback">
                                              Please provide a message.
            </div>
                                      </div>
                                  </div> */}
                                  
                                  <div className="col-md-12">
                                  <button className="btn btn-primary w-100" type="submit" onClick={(e)=>{e.preventDefault();this.addemployees();}}>Add</button>

                              </div>
                              </div>
                          </form>
                      </div>
                  </div>
              </div>
          </div>
      </div>

  );
}
}
export default AddEmployeeContent;
