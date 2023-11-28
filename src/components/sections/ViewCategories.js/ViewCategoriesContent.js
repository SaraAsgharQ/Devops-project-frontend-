import React, { Component } from "react";
import Breadcrumb from "./Breadcrumb";
import { Modal, Accordion, Card } from "react-bootstrap";
import Axios from "axios";

import img1 from "../../../assets/img/RMS/category-1.jpg";
import img2 from "../../../assets/img/RMS/category-2.jpg";
import img3 from "../../../assets/img/RMS/category-3.jpg";

class ViewCategoriesContent extends Component {
  state = {
    show: false,
    Categories: [],
    name: "",
    id: "0",
  };
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  getcategorycontent = () => {
    Axios.get("http://localhost:3001/api/gete").then((response) => {
      this.setState({ Categories: response.data });
    });
  };
  deletecategory = (category_id) => {
    Axios.delete(`http://localhost:3001/deletecategory/${category_id}`).then(
      (response) => {
        console.log(response);
      }
    );
    window.location.reload();
  };
  handleShow(category) {
    this.setState({ id: category.id });
    this.setState({ name: category.name });
    this.setState({ show: true });
  }
  handleClose() {
    this.setState({ show: false });
  }
  changename = (e) => {
    this.setState({ name: e.currentTarget.value });
  };
  updatecategory = () => {
    Axios.put("http://localhost:3001/updatecategory/:category_id", {
      id: this.state.id,
      name: this.state.name,
    }).then((response) => {
      window.location.reload();
      console.log(response);
    });
  };
  render() {
    return (
      <div className="ms-content-wrapper">
        <div className="row">
          <div className="col-md-12">
            <Breadcrumb />
            <button
              className="btn btn-primary w-100"
              onClick={(e) => {
                e.preventDefault();
                this.getcategorycontent();
              }}
            >
              Show Categories
            </button>
            <div className="row mt-5">
              {this.state.Categories.map((category, i) => (
                <div key={i} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                  <div className="ms-card">
                    <div className="ms-card-body">
                      <div className="new">
                        <h6 className="mb-0">{category.name} </h6>
                      </div>
                      <div className="new mb-0">
                        <button
                          type="button"
                          className="btn grid-btn mt-0 btn-sm btn-primary"
                          onClick={() => {
                            this.deletecategory(category.id);
                          }}
                        >
                          Remove
                        </button>
                        <button
                          type="button"
                          className="btn grid-btn mt-0 btn-sm btn-secondary"
                          onClick={() => {
                            this.handleShow(category);
                          }}
                        >
                          Edit
                        </button>
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
                            <h1>Edit Category</h1>
                            <form method="post">
                              <div className="ms-form-group has-icon">
                                <input
                                  type="text"
                                  placeholder="Category Name"
                                  className="form-control"
                                  name="Category Name"
                                  value={this.state.name}
                                  onChange={this.changename}
                                />
                              </div>
                              <button
                                type="submit"
                                className="btn btn-primary shadow-none"
                                onClick={(e) => {
                                  e.preventDefault();
                                  this.updatecategory();
                                }}
                              >
                                Save
                              </button>
                            </form>
                          </Modal.Body>
                        </Modal>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewCategoriesContent;
