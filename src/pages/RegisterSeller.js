import React, { Component } from 'react'
import axios from 'axios'

class RegisterSeller extends Component {
    constructor(props) {
        super(props)
        this.state = {
          username: '',
          password: '',
          first_name: '',
          last_name: '',
          address: '',
          company_name: '',
          description: ''
        }
    }
    
    handleRegister(e) {
        console.log(e)
        axios.post('https://private-00f7e-zuema.apiary-mock.com/sellers', {
          username: this.state.username,
          password: this.state.password,
          first_name: this.state.first_name,
          last_name: this.state.last_name,
          company_name: this.state.company_name,          
          address: this.state.address,
          description: this.state.description
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
        <div className="container-box">
            <div className="text-head">REGISTER
                <div className="line-rectangle"></div>
            </div>
            <div className="box-quote">&nbsp;&nbsp;&nbsp;SELLER</div>

            <div className="row">
                <div className="col-sm-6 col-md-6">
                    <p className="data-input-head">
                        USERNAME <br/>
                        <input className="data-input-field-s" type="text" name="username" onChange={(e) => this.setState({username: e.target.value})}/>
                    </p>
                    <p className="data-input-head">
                        PASSWORD <br/>
                        <input className="data-input-field-s" type="text" name="password" onChange={(e) => this.setState({password: e.target.value})}/>
                    </p>
                    <p className="data-input-head">
                        COMPANY NAME <br/>
                        <input className="data-input-field-s" type="text" name="company_name" onChange={(e) => this.setState({company_name: e.target.value})}/>
                    </p>
                    <p className="data-input-head">
                        FIRSTNAME <br/>
                        <input className="data-input-field-s" type="text" name="first_name" onChange={(e) => this.setState({first_name: e.target.value})}/>
                    </p>
                    <p className="data-input-head">
                        LASTNAME <br/>
                        <input className="data-input-field-s" type="text" name="last_name" onChange={(e) => this.setState({last_name: e.target.value})}/>
                    </p>
                </div>

                <div className="col-sm-6 col-md-6">
                    <p className="data-input-head">
                        ADDRESS <br/>
                        <input className="data-input-field-l" type="text" name="address" onChange={(e) => this.setState({address: e.target.value})}/>
                    </p>
                    <p className="data-input-head">
                        INFORMATION <br/>
                        <input className="data-input-field-l" type="text" name="description" onChange={(e) => this.setState({description: e.target.value})}/>
                    </p>
                    <button type="button" className="btn btn-register" onClick={(e) => this.handleRegister(e)}>REGISTER</button>
                </div>
            </div>
        
        </div>
    )
  }
}

export default RegisterSeller;