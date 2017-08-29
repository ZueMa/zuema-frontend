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
        <div class="container-fluid">
          <div className="container-box">
            <div className="text-head">PROFILE
              <div className="line-rectangle"></div>
              <p id="type">BUYER</p>
              <div className="info">
                <div id="wrapper" className="input-form">
                    <p>USERNAME<h3 >{this.state.profiles.username}</h3></p>
                    <p>FIRSTNAME<h3>{this.state.profiles.first_name}</h3></p>
                    <p>LASTNAME<h3 id="lastname">{this.state.profiles.last_name}</h3></p>
                    <p>ADDRESS<h3 id="address">{this.state.profiles.address}</h3></p>
                  <a href={'http://localhost:3000/history'} id="history">VIEW ORDER HISTORY</a>  
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    }
    else if (this.state.type === 'SELLER'){
      return(
        <div class="container-fluid">
          <div className="container-box">
          <div className="text-head">PROFILE
            <div className="line-rectangle"></div>
            <p id="type">SELLER</p>
            <div className="info">
              <div id="wrapper" className="input-form">
                <p>USERNAME<h3>{this.state.profiles.username}</h3></p>
                <p>FIRSTNAME<h3>{this.state.profiles.first_name}</h3></p>
                <p>LASTNAME<h3 id="lastname">{this.state.profiles.last_name}</h3></p>
                <p>COMPANY NAME<h3 id="company">{this.state.profiles.company_name}</h3></p>
                <p>INFORMATION<h3 id="des">{this.state.profiles.description}</h3></p>
                <p>ADDRESS<h3 id="address">{this.state.profiles.address}</h3></p>
                <a href={'http://localhost:3000/history'} id="history">VIEW ORDER HISTORY</a>  
              </div>
            </div>
          </div>
        </div>
      </div>
      )
    }

  }
}

export default Profile;
