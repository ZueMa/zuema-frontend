import React, { Component } from 'react'
import '../../stylesheets/login.css'
import axios from 'axios'
import swal from 'sweetalert'
import { adminLoginAction } from '../../actions/adminLoginAction'
import { connect } from 'react-redux'

class AdminLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
          username: '',
          password: ''
        }
      }
      
    handleLogin(e){     
      console.log(e)      
      axios.post('http://localhost:8000/admin/', {
        username: this.state.username,
        password: this.state.password          
      })
      .then((res) => {
        this.props.adminLoginAction(res.data.username)  
        swal({
          title: "Login Success!",
          icon: "success",
        }).then (function(){
          window.location.href = 'http://localhost:3000/purchases';
        });
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
                <input className="form-control" name="userid" type="text" onChange={(e) => this.setState({username: e.target.value})}/>
              </p>
              <p className="data-input-head">
                PASSWORD <br/>
                <input className="form-control" name="pswrd" type="password" onChange={(e) => this.setState({password: e.target.value})}/>
              </p>
              <button type="button" className="btn btn-login-admin" onClick={(e) => this.handleLogin(e)}>LOGIN</button>
            </div>
            <br/>
          </div>
        );
    }
}

function mapDispatchToProps(dispatch) {
  return {
    adminLoginAction: (username) => dispatch(adminLoginAction(username)),
  }
}

export default connect(null, mapDispatchToProps)(AdminLogin);