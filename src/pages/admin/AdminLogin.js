import React, { Component } from 'react'
import '../../stylesheets/login.css'

class AdminLogin extends Component {
    constructor(props) {
        super(props)
        this.state = {
          username: '',
          password: ''
        }
      }
      
    handleLogin(e){        
       
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

export default AdminLogin;