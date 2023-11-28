import React, { Component } from "react";
import Breadcrumb from "./Breadcrumb";
import Axios from "axios";
import { Modal, Accordion, Card } from "react-bootstrap";

import img1 from "../../../assets/img/RMS/food-1.jpg";
import img2 from "../../../assets/img/RMS/food-2.jpg";
import img3 from "../../../assets/img/RMS/food-3.jpg";
import img4 from "../../../assets/img/RMS/food-4.jpg";
import img5 from "../../../assets/img/RMS/food-5.jpg";
import img6 from "../../../assets/img/RMS/food-6.jpg";
import img7 from "../../../assets/img/RMS/food-7.jpg";
import img8 from "../../../assets/img/RMS/food-8.jpg";

class Gridcontent extends Component {
  state = {
    gridcontent: [],
    show: false,
    id: "0",
    name: "",
    quantity: "0",
    price: "0",
    description: "",
  };
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleShow(item) {
    this.setState({ id: item.id });
    this.setState({ name: item.name });
    this.setState({ quantity: item.quantity });
    this.setState({ price: item.price });
    this.setState({ description: item.description });
    console.log(this.state.id);
    this.setState({ show: true });
  }
  handleClose() {
    this.setState({ show: false });
  }
  deleteproduct = (id) => {
    Axios.delete(`http://localhost:3001/deleteproduct/${id}`).then((response) => {
      console.log(response);
    });
    window.location.reload();
  };
  getgridcontent = () => {
    Axios.get("http://localhost:3001/api/ge").then((response) => {
      this.setState({ gridcontent: response.data });
    });
  };
  updateproduct = () => {
    Axios.put("http://localhost:3001/update/:id", {
      id: this.state.id,
      name: this.state.name,
      quantity: this.state.quantity,
      price: this.state.price,
      description: this.state.description,
      
    }).then((response) => {
      window.location.reload();
      console.log(response.data);
    });
  };
  changedesc = (e) => {
    this.setState({ description: e.currentTarget.value });
  };
  changename = (e) => {
    this.setState({ name: e.currentTarget.value });
  };
  changequantity = (e) => {
    this.setState({ quantity: e.currentTarget.value });
  };
  changeprice = (e) => {
    this.setState({ price: e.currentTarget.value });
  };
  render() {
    return (
      <div className="ms-content-wrapper">
        <div className="row">
          <div className="col-md-12">
            <Breadcrumb />
            <div className="row">
              <button
                className="btn btn-primary w-100"
                onClick={(e) => {
                  e.preventDefault();
                  this.getgridcontent();
                }}
              >
                Show Menu Grid
              </button>
            </div>
            <div className="row mt-5">
              <div className="col-md-12">
                {this.state.gridcontent.map((item, i) => (
                  <div key={i} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="ms-card">
                      <div className="ms-card-img">
                        {/* <img src={item.photo} alt="card_img" /> */}
                      </div>
                      <Modal
                        className="modal-min"
                        show={this.state.show}
                        onHide={this.handleClose}
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                      >
                        <Modal.Body className="text-center">
                          <button
                            type="button"
                            className="close"
                            onClick={this.handleClose}
                          >
                            <span aria-hidden="true">×</span>
                          </button>
                          <h1 className="text text-primary">Edit Product</h1>
                          <form method="post">
                            <div className="ms-form-group">
                              <h6 className="mb-0">Product Name </h6>
                              <input
                                value={this.state.name}
                                type="text"
                                onChange={this.changename}
                                className="form-control"
                                name="Product Name"
                              />
                            </div>
                            <div className="ms-form-group">
                              <h6 className="mb-0">Price </h6>

                              <input
                                type="text"
                                value={this.state.price}
                                onChange={this.changeprice}
                                className="form-control"
                                name="Price"
                              />
                            </div>
                            <div className="ms-form-group">
                              <h6 className="mb-0">Quantity </h6>

                              <input
                                type="text"
                                value={this.state.quantity}
                                onChange={this.changequantity}
                                className="form-control"
                                name="Quantity"
                              />
                            </div>
                            <div className="ms-form-group">
                              <h6 className="mb-0">Description </h6>
                              <input
                                type="text"
                                value={this.state.description}
                                onChange={this.changedesc}
                                className="form-control"
                                name="Description"
                              />
                            </div>
                            <button
                              type="submit"
                              className="btn btn-primary shadow-none"
                              onClick={(e) => {
                                e.preventDefault();
                                this.updateproduct();
                              }}
                            >
                              Save
                            </button>
                          </form>
                        </Modal.Body>
                      </Modal>
                      <div className="ms-card-body">
                        <div className="new">
                          <h6 className="mb-0">{item.name} </h6>
                          <h6 className="ms-text-primary mb-0">{item.price}</h6>
                        </div>
                        <div className="new meta">
                          <p>Qty:{item.quantity} </p>
                          {item.quantity > 0 ? (
                            <span className="ms-text-success">In stock</span>
                          ) : (
                            <span className="ms-text-danger">Out of stock</span>
                          )}
                        </div>
                        <p>{item.description}</p>
                        <div className="new mb-0">
                          <button
                            type="button"
                            className="btn grid-btn mt-0 btn-sm btn-primary"
                            onClick={() => {
                              this.deleteproduct(item.id);
                            }}
                          >
                            Remove
                          </button>
                          <button
                            type="button"
                            className="btn grid-btn mt-0 btn-sm btn-secondary"
                            onClick={() => {
                              this.handleShow(item);
                            }}
                          >
                            Edit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gridcontent;
