import React, { Component } from 'react'
import { register } from '../api'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      address: ''
    }
  }

  render() {
    return(
      <div>
        Register
        <p>
          username
          <input type="text" name="username" onChange={(e) => this.setState({username: e.target.value})}/>
        </p>
        <p>
          password
          <input type="text" name="password" onChange={(e) => this.setState({password: e.target.value})}/>
        </p>
        <p>
          firstname
          <input type="text" name="firstname" onChange={(e) => this.setState({firstname: e.target.value})}/>
        </p>
        <p>
          lastname
          <input type="text" name="lastname" onChange={(e) => this.setState({lastname: e.target.value})}/>
        </p>
        <p>
          address
          <input type="text" name="address" onChange={(e) => this.setState({address: e.target.value})}/>
        </p>
        <button onClick={() => register(this.state)}>Submit</button>
      </div>
    )
  }
}

export default Login;
