import React, { Component } from 'react'
import '../stylesheets/profile.css'
import axios from 'axios'

class Profile extends Component {
  constructor(props){
    super(props);
    this.state = { profiles:[] };
  }

  componentWillMount(){
    axios.get('https://private-00f7e-zuema.apiary-mock.com/sellers/me').then( res => {
      const profiles = res.data;
      this.setState({ profiles });
    });
  }

  render() {
    return(
      <div className="container-box">
      <div className="text-head">PROFILE
        <div className="line-rectangle"></div>
        <p id="type">SELLER</p>
        <div className="info">
          <div id="wrapper" className="input-form">
            <div id="left-col">
              <p>USERNAME</p>
              <p>FIRSTNAME</p>
              <p>LASTNAME</p>
              <p>COMPANY NAME</p>
              <p>INFORMATION</p>
              <p>ADDRESS</p>
            </div>
            <div id="right-col">
              <p>{this.state.profiles.username}</p>
              <p>{this.state.profiles.first_name}</p>
              <p>{this.state.profiles.last_name}</p>
              <p>{this.state.profiles.company_name}</p>
              <p>{this.state.profiles.description}</p>
              <p>{this.state.profiles.address}</p>
            </div>
          </div>
          <br/>
        </div>
      </div>
        <a href={'http://localhost:3000/history'} id="history">VIEW ORDER HISTORY</a>  
    </div>
    )
  }
}

export default Profile;
