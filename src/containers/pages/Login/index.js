import React, { Component } from "react";
import { connect } from "react-redux";
import './Login.scss'
import Button from '../../../components/atoms/Button';
import { loginUserApi } from "../../../config/redux/action";

class Login extends Component{
    state = {
        email: '',
        password: ''
    }

    handleChangeText = (e) =>{
      this.setState({
          [e.target.id]: e.target.value,
      })
    }

    handleLoginSubmit = async () => {
        const {email, password} = this.state;
        const {history} = this.props;
        const res = await this.props.loginAPI({ email, password}).catch(err => err);
        if (res) {
            console.log('Login Success', JSON.stringify(res));

            localStorage.setItem('userData', JSON.stringify(res))
            this.setState({
                email:'',
                password:''
            })
            history.push('/')    
        }else {
            console.log('login failed')
        }
        
    }

    render(){
        return(
            <div className="auth-container">
            <div className="auth-card">
                <p className="auth-title">Login Page</p>
                <input className='input' id='email' placeholder='Email' type='text' onChange={this.handleChangeText} value={this.state.email} />
                <input className='input' id='password' placeholder='Password' type='password' onChange={this.handleChangeText} value={this.state.password} />
                <Button onClick={this.handleLoginSubmit} title="Mikail" loading={this.props.isLoading} />

            </div>
            {/* <button>Go to Dashboard</button> */}
        </div>
        )
    }
}

const reduxState = (state) => ({
    isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
    loginAPI: (data) => dispatch(loginUserApi(data))
})

export default connect(reduxState, reduxDispatch) (Login);