import React, { Component } from 'react'
import '../stylesheets/profile.css'
import axios from 'axios'

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = { profiles:[],type: 'BUYER' };
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
                  <table>
                    <td>
                      <tr><p>USERNAME</p></tr>
                      <tr><p>FIRSTNAME</p></tr>
                      <tr><p>LASTNAME</p></tr>
                      <tr><p>ADDRESS</p></tr>
                    </td>
                    <td>
                      <tr><p>{this.state.profiles.username}</p></tr>
                      <tr><p>{this.state.profiles.first_name}</p></tr>
                      <tr><p>{this.state.profiles.last_name}</p></tr>
                      <tr><p>{this.state.profiles.address}</p></tr>
                    </td>
                  </table>
                  <br/>
                  <a href={'http://localhost:3000/history'} id="history">VIEW PURCHASE HISTORY</a>  
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
                  <table>
                    <td>
                      <tr><p>USERNAME</p></tr>
                      <tr><p>FIRSTNAME</p></tr>
                      <tr><p>LASTNAME</p></tr>
                      <tr><p>COMPANY NAME</p></tr>
                      <tr><p>INFORMATION</p></tr>
                      <tr><p>ADDRESS</p></tr>
                    </td>
                    <td>
                      <tr><p>{this.state.profiles.username}</p></tr>
                      <tr><p>{this.state.profiles.first_name}</p></tr>
                      <tr><p>{this.state.profiles.last_name}</p></tr>
                      <tr><p>{this.state.profiles.company_name}</p></tr>
                      <tr><p>{this.state.profiles.description}</p></tr>
                      <tr><p>{this.state.profiles.address}</p></tr>
                    </td>
                  </table>
                  <br/>
                  <a href={'http://localhost:3000/history'} id="history">VIEW ORDER HISTORY</a> 
                </div>
            </div>
          </div>
      )
    }
  }
}

export default Profile;
