import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios'


class Content extends Component {
    state = {
        firstname:"",
        lastname:"",
        emailaddress : "",
        password : "",
        LoginStatus: ""
        
    }
    // displayInfo = () =>{
    //     console.log(this.state.id+this.state.name+this.state.category_id+this.state.currency+this.state.quantity+this.state.price+this.state.description);
    // };
    
    addregister = () => {
        Axios.post("http://localhost:3001/register", {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            emailaddress: this.state.emailaddress,
            password: this.state.password
            
        }).then((response) =>{
            console.log(response);
        });
    };

    componentDidMount() {
        //initialize datatable
        function formValidation() {
            window.addEventListener('load', function () {
                // Fetch all the forms we want to apply custom Bootstrap validation styles to
                var forms = document.getElementsByClassName('needs-validation');
                // Loop over them and prevent submission
                Array.prototype.filter.call(forms, function (form) {
                    form.addEventListener('submit', function (event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        form.classList.add('was-validated');
                    }, false);
                });

            }, false);
        }
        formValidation();
    }
    render() {
        return (
            <div className="ms-content-wrapper ms-auth">
                <div className="ms-auth-container">
                    <div className="ms-auth-col">
                        <div className="ms-auth-bg" />
                    </div>
                    <div className="ms-auth-col">
                        <div className="ms-auth-form">
                            <form className="needs-validation" noValidate>
                                <h3>Create Account</h3>
                                <p>Please enter personal information to continue</p>
                                <div className="form-row">
                                    <div className="col-md-6 ">
                                        <label htmlFor="validationCustom01">First name</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="validationCustom01" placeholder="First name" defaultValue="" required onChange={(event)=>this.setState({firstname:(event.target.value)})}/>
                                            <div className="valid-feedback">
                                                Looks good!
                </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 ">
                                        <label htmlFor="validationCustom02">Last name</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="validationCustom02" placeholder="Last name" defaultValue="" required onChange={(event)=>this.setState({lastname:(event.target.value)})}/>
                                            <div className="valid-feedback">
                                                Looks good!
                </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-md-12 ">
                                        <label htmlFor="validationCustom03">Email Address</label>
                                        <div className="input-group">
                                            <input type="email" className="form-control" id="validationCustom03" placeholder="Email Address" required onChange={(event)=>this.setState({emailaddress:(event.target.value)})}/>
                                            <div className="invalid-feedback">
                                                Please provide a valid email.
                </div>
                                        </div>
                                    </div>
                                    <div className="col-md-12 ">
                                        <label htmlFor="validationCustom04">Password</label>
                                        <div className="input-group">
                                            <input type="password" className="form-control" id="validationCustom04" placeholder="Password" required onChange={(event)=>this.setState({password:(event.target.value)})}/>
                                            <div className="invalid-feedback">
                                                Please provide a password.
                </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="form-check pl-0">
                                        <label className="ms-checkbox-wrap">
                                            <input className="form-check-input" type="checkbox"  id="invalidCheck" required />
                                            <i className="ms-checkbox-check" />
                                        </label>
                                        <span> Agree to terms and conditions </span>
                                    </div>
                                </div>
                                <button className="btn btn-primary mt-4 d-block w-100" type="submit" onClick={(e)=>{e.preventDefault();this.addregister();}}>Create Account</button>
                                <p className="mb-0 mt-3 text-center">Already have an account? <Link className="btn-link" to="/login">Login</Link> </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

export default Content;