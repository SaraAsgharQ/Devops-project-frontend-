import React from 'react';
import { BrowserRouter as Router, Route, Switch,useHistory } from 'react-router-dom';
import Preloader from './components/layouts/Preloader';
import Dashboard from './components/pages/Dashboard';
import Addproduct from './components/pages/Addproduct';
import Menugrid from './components/pages/Menugrid';
import Orders from './components/pages/Orders';
import Restaurantlist from './components/pages/Restaurantlist';
import Sales from './components/pages/Sales';
import Login from './components/pages/Login';
import Register from './components/pages/Register';
import UserProfile from './components/pages/UserProfile';
import ViewCategories from './components/pages/Viewcategories';
import AddCategory from './components/pages/Addcategory';
import ViewEmployee from './components/pages/Viewemployee';
import AddEmployee from './components/pages/Addemployee';
import EmployeeSalary from './components/pages/Employeesalary';
import About from './components/pages/About';
import AddOrder from './components/pages/AddOrder';
import CustomerFeedback from './components/pages/CustomerFeedback';
import ManageTables from './components/pages/ManageTables';
import ContactUs from './components/pages/ContactUs';

function App() {
  
  return (
    <Router>
      <Preloader/>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/add-product" component={Addproduct} />
        <Route path="/menu-grid" component={Menugrid} />
        <Route path="/view-categories" component={ViewCategories} />
        <Route path="/add-category" component={AddCategory} />
        <Route path="/view-employee" component={ViewEmployee} />
        <Route path="/add-employee" component={AddEmployee} />
        <Route path="/employee-salary" component={EmployeeSalary} />
        <Route path="/orders" component={Orders} />
        <Route path="/add-order" component={AddOrder} />
        <Route path="/restaurant-list" component={Restaurantlist} />
        <Route path="/sales" component={Sales} />
        <Route path="/login"><Login history={useHistory()}/></Route>
        <Route path="/about" component={About} />
        <Route path="/register" component={Register} />
        <Route path="/user-profile" component={UserProfile} />
        <Route path="/customer-feedback" component={CustomerFeedback} />
        <Route path="/manage-tables" component={ManageTables} />
        <Route path="/report-issues" component={ContactUs} />
      </Switch>
    </Router>
  );
}

export default App;
