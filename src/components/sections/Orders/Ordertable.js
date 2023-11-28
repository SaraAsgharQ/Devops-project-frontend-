import React, { Component } from "react";
import Breadcrumb from "../Orders/Breadcrumb";
import Axios from 'axios'
import { Link } from "react-router-dom";

class Ordertable extends Component {

  state = {
    OrdersContent: [],
    // newid : "0",
    // newname : "",
    // newlocation: "",
    // price : "0",
    // time: "",
    
  }

  getorderlist = () => {
    Axios.get("http://localhost:3001/api/gett"
      // id : this.state.id,
      // name : this.state.name,
      // location : this.state.location,
      //  price : this.state.price,
      //  time : this.state.time_remaining,
    ).then((response) => {
      this.setState({OrdersContent: response.data});
      //console.log(OrdersContent);
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
                <h6> Order List</h6>
              </div>
              <div className="col-md-12">
                <button className="btn btn-primary w-100" onClick={(e)=>{e.preventDefault();this.getorderlist();}}>Show Orders</button>
              <div className="ms-panel-body">
                <div className="table-responsive">
                  <table className="table table-hover thead-primary">
                  
                    <thead>
                      <tr>
                        <th scope="col">Order ID</th>
                        <th scope="col">Order Name</th>
                        <th scope="col">Location</th>
                        {/* <th scope="col">Order Status</th> */}
                        
                        <th scope="col">Price</th>
                        <th scope="col">Time remaining</th>
                        <th scope="col">Edit / Delete </th>
                      </tr>
                    </thead>
                    
                    <tbody>
                    {this.state.OrdersContent.map((o, i) => (
                        <tr key={i}>
                          <th scope="row">{o.id}</th>
                          <td>{o.name}</td>
                          <td>{o.location}</td>
                          <td>{o.price}</td>
                          <td>{o.time}</td>
                          <td>
                            <Link to="#">
                              <i className="fas fa-pencil-alt text-secondary" />
                              {/* <div className="col-md-12">
                                    <button className="btn btn-primary w-100" type="submit" onClick={(e)=>{e.preventDefault();this.addproducts();}}>update</button>

                                </div> */}
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

export default Ordertable;
