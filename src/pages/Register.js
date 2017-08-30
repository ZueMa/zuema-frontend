import React, { Component } from 'react'
import '../stylesheets/register.css'
import { Link } from 'react-router-dom'

class Register extends Component {
    render() {
        return(
        <div className="container-fluid">
            <div className="text-head">REGISTER
                <div className="line-rectangle"></div>
            </div>

            <div className="row">
                <div className="col-sm-6 col-md-6">
                    <Link to={`/registerseller`}><button type="button" className="btn btn-seller">SELLER</button></Link>
                </div>
                <div className="col-sm-6 col-md-6">
                    <Link to={`/registerbuyer`}><button type="button" className="btn btn-buyer">BUYER</button></Link>
                </div>
            </div>
        </div>
    )
  }
}

export default Register;