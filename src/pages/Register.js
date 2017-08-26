import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Register extends Component {
    render() {
        return(
        <div className="menu-register">
            <div className="text-head">REGISTER
                <div className="line-rectangle"></div>
            </div>

            <div>
                <Link to={`/registerseller`}><button type="button" className="btn btn-seller">SELLER</button></Link>
                <Link to={`/registerbuyer`}><button type="button" className="btn btn-buyer">BUYER</button></Link>
            </div>
        </div>
    )
  }
}

export default Register;