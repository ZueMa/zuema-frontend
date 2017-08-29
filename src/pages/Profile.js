import React, { Component } from 'react'
import '../stylesheets/profile.css'
import axios from 'axios'

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = { profiles:[],type: 'SELLER' };
  }

  componentWillMount(){
    if (this.state.type === 'SELLER'){
      axios.get('https://private-00f7e-zuema.apiary-mock.com/sellers/me').then( res => {
        const profiles = res.data;
        this.setState({ profiles });
      });
    }
    else if (this.state.type === 'BUYER'){
      axios.get('https://private-00f7e-zuema.apiary-mock.com/buyers/me').then( res => {
        const profiles = res.data;
        this.setState({ profiles });
      });
    }
  }

  render() {
    if (this.state.type === 'BUYER'){
      return(
          <div className="container-box">
            <div className="text-head">PROFILE
              <div className="line-rectangle"></div>
              <p id="type">BUYER</p>
              <div className="info">
                <div id="wrapper" className="input-form">
                  <table>
                    <td>
                      <tr>USERNAME</tr>
                      <tr>FIRSTNAME</tr>
                      <tr>LASTNAME</tr>
                      <tr>ADDRESS</tr>
                    </td>
                    <td>
                      <tr>{this.state.profiles.username}</tr>
                      <tr>{this.state.profiles.first_name}</tr>
                      <tr>{this.state.profiles.last_name}</tr>
                      <tr>{this.state.profiles.address}</tr>
                    </td>
                  </table>
                  <a href={'http://localhost:3000/history'} id="history">VIEW PURCHASE HISTORY</a>  
                </div>
              </div>
            </div>
          </div>
      )
    }
    else if (this.state.type === 'SELLER'){
      return(
        <div className="container-box">
            <div className="text-head">PROFILE
              <div className="line-rectangle"></div>
              <p id="type">SELLER</p>
              <div className="info">
                <div id="wrapper" className="input-form">
                  <table>
                    <td>
                      <tr>USERNAME</tr>
                      <tr>FIRSTNAME</tr>
                      <tr>LASTNAME</tr>
                      <tr>COMPANY NAME</tr>
                      <tr>INFORMATION</tr>
                      <tr>ADDRESS</tr>
                    </td>
                    <td>
                      <tr>{this.state.profiles.username}</tr>
                      <tr>{this.state.profiles.first_name}</tr>
                      <tr>{this.state.profiles.last_name}</tr>
                      <tr>{this.state.profiles.company_name}</tr>
                      <tr>{this.state.profiles.description}</tr>
                      <tr>{this.state.profiles.address}</tr>
                    </td>
                  </table>
                  <a href={'http://localhost:3000/history'} id="history">VIEW ORDER HISTORY</a>  
                </div>
              </div>
            </div>
          </div>
      )
    }
  }
}

export default Profile;
