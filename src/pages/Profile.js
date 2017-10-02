import React, { Component } from 'react'
import '../stylesheets/profile.css'
import axios from 'axios'
import { connect } from 'react-redux'

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = { profiles:[]};
  }

  componentWillMount(){

    console.log(this.props.type);
    if (this.props.type === 'seller'){
      axios.get('http://localhost:8000/sellers/'+this.props.id+'/').then( res => {
        const profiles = res.data;
        this.setState({ profiles });
      });
    }
    else if (this.props.type === 'buyer'){
      axios.get('http://localhost:8000/buyers/'+this.props.id+'/').then( res => {
        const profiles = res.data;
        this.setState({ profiles });
      });
    }
    else {
      
    }
  }

  render() {
    if (this.props.type === 'buyer'){
      return(
          <div className="container-box">
            <div className="text-head">PROFILE
              <div className="line-rectangle"></div>
              <p id="type">BUYER</p>
              <div className="info">
                  <table>
                  <tbody>
                  <tr>
                    <td>USERNAME</td>
                    <td>{this.state.profiles.username}</td>
                  </tr>
                  <tr>
                    <td>FIRSTNAME</td>
                    <td>{this.state.profiles.first_name}</td>
                  </tr>
                  <tr>
                    <td>LASTNAME</td>
                    <td>{this.state.profiles.last_name}</td>
                </tr>
                <tr>
                        <td>ADDRESS</td>
                        <td>{this.state.profiles.address}</td>
                    </tr>
                   </tbody>
                  </table>
                  <br/>
                  <a href={'http://localhost:3000/purchasehistorybuyer/'+this.props.id+'/'} id="history">VIEW PURCHASE HISTORY</a>
                </div>
              </div>
            </div>
      )
    }
    else if (this.props.type === 'seller'){
      return(
        <div className="container-box">
            <div className="text-head">PROFILE
              <div className="line-rectangle"></div>
              <p id="type">SELLER</p>
              <div className="info">
                  <table>
                    <tbody>
                    <tr>
                      <td>USERNAME</td>
                      <td>{this.state.profiles.username}</td>
                    </tr>
                    <tr>
                      <td>FIRSTNAME</td>
                      <td>{this.state.profiles.first_name}</td>
                    </tr>
                    <tr>
                      <td>LASTNAME</td>
                      <td>{this.state.profiles.last_name}</td>
                    </tr>
                      <tr>
                        <td>INFORMATION</td>
                        <td>{this.state.profiles.description}</td>
                      </tr>
                      <tr>
                        <td>COMPANY NAME</td>
                        <td>{this.state.profiles.company_name}</td>
                      </tr>
                      <tr>
                        <td>ADDRESS</td>
                        <td>{this.state.profiles.address}</td>
                    </tr>
                    </tbody>
                  </table>
                  <br/>
                  <a href={'http://localhost:3000/orderhistoryseller/'+this.props.id+'/'} id="history">VIEW ORDER HISTORY</a>
                </div>
            </div>
          </div>
      )
    }
    else {
      return (<h1>LOGIN</h1>)
    }
  }
}

function mapStateToProps(state) {
  return {
   id: state.cookie.id,
   type: state.cookie.type,
  }
}

export default connect(mapStateToProps)(Profile);
