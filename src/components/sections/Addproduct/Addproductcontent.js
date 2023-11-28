import React, { Component } from 'react';
import Breadcrumb from './Breadcrumb';
import Axios from 'axios'

class Addproductcontent extends Component {
    state = {
        id : "0",
        name : "",
        category_id: "0",
        currency: "",
        quantity: "0",
        price : "0",
        description: "",
        
    }
    // displayInfo = () =>{
    //     console.log(this.state.id+this.state.name+this.state.category_id+this.state.currency+this.state.quantity+this.state.price+this.state.description);
    // };

    addproducts = () => {
        Axios.post("http://localhost:3001/create", {
            id: this.state.id,
            name: this.state.name, 
            category_id: this.state.category_id,
            quantity: this.state.quantity, 
            price: this.state.price, 
            description: this.state.description
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
                                <h6>Add Product Form</h6>
                            </div>
                            <div className="ms-panel-body">
                                <form className="needs-validation clearfix" noValidate>
                                    <div className="form-row">
                                    <div className="col-md-12 mb-3">
                                            <label htmlFor="validationCustom18">ID</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom18" placeholder="Product ID" defaultValue="" required onChange={(event)=>this.setState({id:(event.target.value)})}/>
                                                <div className="valid-feedback">
                                                    Looks good!
                                             </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="validationCustom18">Product Name</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom18" placeholder="Product Name" defaultValue="" required onChange={(event)=>this.setState({name:(event.target.value)})}/>
                                                <div className="valid-feedback">
                                                    Looks good!
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationCustom22">Input Catagory</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom18" placeholder="Category" defaultValue="" required onChange={(event)=>this.setState({category_id:(event.target.value)})}/>
                                                <div className="invalid-feedback">
                                                    Please input a Catagory.
                  </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationCustom24">Quantity</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom24" placeholder="00" required onChange={(event)=>this.setState({quantity:(event.target.value)})}/>
                                                <div className="invalid-feedback">
                                                    Quantity
                  </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label htmlFor="validationCustom25">Price</label>
                                            <div className="input-group">
                                                <input type="text" className="form-control" id="validationCustom25" placeholder="100rs" required onChange={(event)=>this.setState({price:(event.target.value)})}/>
                                                <div className="invalid-feedback">
                                                    Price
                  </div>
                                            </div>
                                        </div>
                                        <div className="col-md-12 mb-3">
                                            <label htmlFor="validationCustom12">Description</label>
                                            <div className="input-group">
                                                <textarea rows={5} id="validationCustom12" className="form-control" placeholder="Message" required onChange={(event)=>this.setState({description:(event.target.value)})}/>
                                                <div className="invalid-feedback">
                                                    Please provide a message.
                  </div>
                                            </div>
                                        </div>
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

export default Addproductcontent;