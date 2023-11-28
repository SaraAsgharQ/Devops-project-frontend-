import React, { Component } from "react";
import Sidenavigation from "../layouts/Sidenavigation";
import Topnavigation from "../layouts/Topnavigation";
import Breadcrumb from "../sections/Orders/Breadcrumb";
import Ordertable from "../sections/Orders/Ordertable";
// import Quickbar from '../layouts/Quickbar';

class Orders extends Component {
  render() {
    return (
      <div className="ms-body ms-aside-left-open ms-primary-theme ms-has-quickbar">
        <Sidenavigation />
        <main className="body-content">
          <Topnavigation />
          <Ordertable />
        </main>
      </div>
    );
  }
}

export default Orders;
