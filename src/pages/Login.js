import React, { Component } from 'react'
import '../stylesheets/login.css'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      user_type: ''
    }
  }

  handleRegister(e) {
    console.log(e)
    axios.post('https://private-00f7e-zuema.apiary-mock.com/authentication', {
      username: this.state.username,
      password: this.state.password,
      user_type: this.state.user_type
    })
    .then((response) => {
      console.log(response)
    })
    .catch((response) => {
      console.error(response) 
    })
  }

  render() {
    return(
      <div className="container-fluid">
        <div className="indent-head">
          <div className="text-head">LOGIN
            <div className="line-rectangle"></div>
          </div>
        </div>
        <div className="text-details">
          <p className="data-input-head">
            USERNAME <br/>
            <input className="form-control" type="text" name="username" onChange={(e) => this.setState({username: e.target.value})}/>
          </p>
          <p className="data-input-head">
            PASSWORD <br/>
            <input className="form-control" type="password" name="username" onChange={(e) => this.setState({password: e.target.value})}/>
          </p>
        </div>
        
        <div className="row">
          <div className="col-sm-6 col-md-6">
            <button type="button" className="btn btn-login-seller" onChange={(e) => this.setState({user_type: 'seller'})} onClick={(e) => this.handleRegister(e)}>LOGIN AS SELLER</button>
          </div>
          <div className="col-sm-6 col-md-6">
            <button type="button" className="btn btn-login-buyer" onChange={(e) => this.setState({user_type: 'buyer'})} onClick={(e) => this.handleRegister(e)}>LOGIN AS BUYER</button>
          </div>
        </div>

        <br/>
        <div className="footer-container">
          <span>NOT A MEMBER? <Link to={`/register`}><span className="register-link">REGISTER</span></Link></span>
        </div>
      </div>
    )
  }
}

export default Login;
