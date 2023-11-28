import React, { Component } from "react";
import Breadcrumb from "../AddOrder/Breadcrumb";
import Axios from 'axios'
class AddOrderForm extends Component {

  state = {
    id : "0",
    name : "",
    location: "",
    price : "0",
    time: "",
    
}
// displayInfo = () =>{
//     console.log(this.state.id+this.state.name+this.state.category_id+this.state.currency+this.state.quantity+this.state.price+this.state.description);
// };

addproducts = () => {
    Axios.post("http://localhost:3001/crea", {
        id: this.state.id,
        name: this.state.name, 
        location: this.state.location,  
        price: this.state.price, 
        time: this.state.time
    }).then(() =>{
        console.log("success");
    });
};
  render() {
    return (
        <div className="ms-content-wrapper">
            <div className="row">
                <div className="col-md-12">
                    <Breadcrumb/>
                    {/* <div className="alert alert-success" role="alert">
                        <strong>Well done!</strong> You successfully read this important alert message.
                    </div> */}
                </div>
                <div className="col-xl-6 col-md-12">
                    <div className="ms-panel ms-panel-fh">
                        <div className="ms-panel-header">
                            <h6>Add Order Form</h6>
                        </div>
                        <div className="ms-panel-body">
                            <form className="needs-validation clearfix" noValidate>
                                <div className="form-row">
                                <div className="col-md-12 mb-3">
                                        <label htmlFor="validationCustom18">ID</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="validationCustom18" placeholder="Order ID" defaultValue="" required onChange={(event)=>this.setState({id:(event.target.value)})}/>
                                            <div className="valid-feedback">
                                                Looks good!
                                         </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 mb-3">
                                        <label htmlFor="validationCustom18">Name</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="validationCustom18" placeholder="Name" defaultValue="" required onChange={(event)=>this.setState({name:(event.target.value)})}/>
                                            <div className="valid-feedback">
                                                Looks good!
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="validationCustom22">Select Location</label>
                                        <div className="input-group">
                                            <select className="form-control" id="validationCustom22" required onChange={(event)=>this.setState({location:(event.target.value)})}>
                                                
                                                <option value = "x">Location x</option>
                                                <option value = "y">Location y</option>
                                                <option value = "z">Location z</option>
                                            </select>
                                            <div className="invalid-feedback">
                                                Please select a Location.
              </div>
                                        </div>
                                    </div>
                                    {/* <div className="col-md-6 mb-3">
                                        <label htmlFor="validationCustom23">Currency</label>
                                        <div className="input-group">
                                            <select className="form-control" id="validationCustom23" required onChange={(event)=>this.setState({currency:(event.target.value)})}>
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
                                        <label htmlFor="validationCustom24">Price</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="validationCustom24" placeholder="00" required onChange={(event)=>this.setState({price:(event.target.value)})}/>
                                            <div className="invalid-feedback">
                                                Price
              </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label htmlFor="validationCustom25">Time</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="validationCustom25" placeholder="00:00" required onChange={(event)=>this.setState({time:(event.target.value)})}/>
                                            <div className="invalid-feedback">
                                                Time
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
                                    {/* <div className="col-md-12 mb-3">
                                        <label htmlFor="validationCustom12">Product Image</label>
                                        <div className="custom-file">
                                            <input type="file" className="custom-file-input" id="validatedCustomFile" />
                                            <label className="custom-file-label" htmlFor="validatedCustomFile">Upload Images...</label>
                                            <div className="invalid-feedback">Example invalid custom file feedback</div>
                                        </div>
                                    </div> */}
                                    <div className="col-md-12">
                                    <button className="btn btn-primary w-100" type="submit" onClick={(e)=>{e.preventDefault();this.addproducts();}}>Add</button>

                                </div>
                                {/* <div className="col-md-12">
                  <Breadcrumb/>
                  <div className="alert alert-success" role="alert">
                      <strong>Well done!</strong> Values entered successfully.
                  </div>
              </div> */}
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
export default AddOrderForm;
