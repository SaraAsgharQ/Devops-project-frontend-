import React, { Component } from "react";
import Breadcrumb from "./Breadcrumb";
import Axios from 'axios'

class AddCategoryContent extends Component {

  state = {
    id : "0",
    name : ""
    
    
}
// displayInfo = () =>{
//     console.log(this.state.id+this.state.name+this.state.category_id+this.state.currency+this.state.quantity+this.state.price+this.state.description);
// };

addcategory = () => {
    Axios.post("http://localhost:3001/cre", {
        id: this.state.id,
        name: this.state.name
    }).then(() => {
        console.log("success");
    });
};
  render() {
    return (
      <div className="ms-content-wrapper">
        <Breadcrumb />
        <div className="col-xl-6 col-md-12">
          <div className="ms-panel ms-panel-fh">
            <div className="ms-panel-header">
              <h6>Add Category Form</h6>
            </div>
            
            <div className="ms-panel-body">
              <form className="needs-validation clearfix" noValidate>
                <div className="form-row">
                  <div className="col-xl-6 col-md-12 mb-3">
                    <label htmlFor="validationCustom27">Category ID</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        id="validationCustom27"
                        placeholder="Category ID"
                        required onChange={(event)=>this.setState({id:(event.target.value)})}
                      />
                      <div className="invalid-feedback">
                        Please provide correct category ID
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 mb-3">
                    <label htmlFor="validationCustom12">Category Name</label>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control"
                        id="validationCustom27"
                        placeholder="Full Name"
                        required onChange={(event)=>this.setState({name:(event.target.value)})}
                      />
                      
                      <div className="invalid-feedback">
                        Example invalid custom file feedback
                      </div>
                    </div>
                  </div>
                </div>
                <button className="btn btn-primary w-100 d-block" type="submit" onClick={(e)=>{e.preventDefault();this.addcategory();}}>
                  Add
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AddCategoryContent;
