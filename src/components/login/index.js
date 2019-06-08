import React, { Component } from 'react';
import './main.css';
import './util.css';
import {Login} from './actions'
import {connect} from 'react-redux'
import LoginForm from './LoginForm'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class login extends Component {
    loginUser = (data) => {
        this.props.Login(data);
    }
    render() {
        
        return (
            <div className="limiter">
                <ToastContainer />
                <div className="container-login100" style={{ backgroundImage: "url('images/bg-01.jpg')" }}>
                    <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-54">
                        <LoginForm submitCb={this.loginUser}/>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        auth: state.auth
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        Login: (data) => dispatch(Login(data))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(login);