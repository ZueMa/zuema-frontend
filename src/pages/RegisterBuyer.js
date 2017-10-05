import React, { Component } from 'react'
import axios from 'axios'
import swal from 'sweetalert'

class RegisterBuyer extends Component {
    constructor(props) {
        super(props)
        this.state = {
          username: '',
          password: '',
          first_name: '',
          last_name: '',
          address: ''
        }
    }
    
    handleRegister(e) {
        console.log(this.state)
        axios.post('http://localhost:8000/buyers/', {
          username: this.state.username,
          password: this.state.password,
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          address: this.state.address
        })
        .then((response) => {
          swal({
            title: "Register Success!",
            icon: "success",
          }).then (function(){
            window.location.href = 'http://localhost:3000/login';
          });
        })
        .catch((response) => {
          swal({
            title: "Register Error!",
            icon: "error",
          });
        })
    }
    
    render() {
        return(
        <div>
            <div className="container-fluid">
                <div className="container-box">
                    <div className="text-head">REGISTER
                        <div className="line-rectangle"></div>
                    </div>
                    <div className="box-quote">&nbsp;&nbsp;&nbsp;BUYER</div>

                    <div className="row">
                        <div className="col-sm-6 col-md-6">
                            <p className="data-input-head">
                                USERNAME <br/>
                                <input className="form-control" type="text" name="username" onChange={(e) => this.setState({username: e.target.value})}/>
                            </p>
                            <p className="data-input-head">
                                PASSWORD <br/>
                                <input className="form-control" type="password" name="password" onChange={(e) => this.setState({password: e.target.value})}/>
                            </p>
                            <p className="data-input-head">
                                FIRSTNAME <br/>
                                <input className="form-control" type="text" name="first_name" onChange={(e) => this.setState({first_name: e.target.value})}/>
                            </p>
                            <p className="data-input-head">
                                LASTNAME <br/>
                                <input className="form-control" type="text" name="last_name" onChange={(e) => this.setState({last_name: e.target.value})}/>
                            </p>
                        </div>

                        <div className="col-sm-6 col-md-6">
                            <p className="data-input-head">
                                ADDRESS <br/>
                                <textarea rows="9" className="form-control" type="text" name="address" onChange={(e) => this.setState({address: e.target.value})}/>
                            </p>
                            <button type="button" className="btn btn-register" onClick={(e) => this.handleRegister(e)}>REGISTER</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default RegisterBuyer;
