import React, { Component } from 'react'
import '../stylesheets/profile.css'
import axios from 'axios'


class Profile extends Component {
  constructor(props){
    super(props);

    this.state = { profiles:[] };
    axios.get('https://private-00f7e-zuema.apiary-mock.com/buyers/me').then( res => {
      const profiles = res.data;
      this.setState({ profiles });
    });
  }

  render() {
    return(
      <div>
        <h1>PROFILE</h1>
        <p></p>
        <p id="type">BUYER</p>
        <p>USERNAME : {this.state.profiles.username}</p>
        <p>FIRSTNAME : {this.state.profiles.first_name}</p>
        <p>LASTNAME : {this.state.profiles.last_name}</p>
        <p>ADDRESS : {this.state.profiles.address}</p>
      </div>
    )
  }
}

export default Profile;
