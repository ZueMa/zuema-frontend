import React, { Component } from 'react'
import axios from 'axios'

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

  handleRegister(e) {
    console.log(e)
    axios.post('https://private-00f7e-zuema.apiary-mock.com/authentication?New%20item=', {
      username: this.state.username,
      password: this.state.password,
      first_name: this.state.firstname,
      last_name: this.state.lastname,
      address: this.state.address
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
        <button onClick={(e) => this.handleRegister(e)}>Submit</button>
      </div>
    )
  }
}

export default Login;
