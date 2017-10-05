import React, { Component } from 'react'
import '../stylesheets/login.css'
import { push } from 'react-router-redux'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import swal from 'sweetalert'
import { addCookie } from '../actions/cookieActions'
import axios from 'axios'


class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      user_type: '',
      next_url: '/'
    }
  }

  handleLogin(e, user_type) {
    axios.post('http://localhost:8000/authentication/', {
      username: this.state.username,
      password: this.state.password,
      user_type: user_type
    })
    .then((res) => {
      this.props.cookie(res.data.user_id, res.data.user_type)
      this.props.push(this.state.next_url);
    })
    .catch((res) => {
      swal({
        title: "Wrong ID or Password!",
        icon: "error",
      });
    });
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
        
        <div className="row lower-margin">
          <div className="col-sm-6 col-md-6">
            <button type="button" className="btn btn-login-seller" onClick={(e) => this.handleLogin(e, 'seller')}>LOGIN AS SELLER</button>
          </div>
          <div className="col-sm-6 col-md-6">
            <button type="button" className="btn btn-login-buyer" onClick={(e) => this.handleLogin(e, 'buyer')}>LOGIN AS BUYER</button>
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

function mapDispatchToProps(dispatch) {
  return {
    cookie: (user_id, user_type) => dispatch(addCookie(user_id, user_type)),
    push: (next_url) => dispatch(push(next_url)),
  }
}

export default connect(null, mapDispatchToProps)(Login);