import React, { Component } from 'react'
import '../stylesheets/profile.css'

class Profile extends Component {
  constructor(props){
    super(props;

    this.state = { profiles:[] };
    axios.get('https://private-00f7e-zuema.apiary-mock.com/buyers/me').then(profiles => {
      this.setState({ profiles });
    });
  }

  render() {
    return(
      <div>
        <h1>PROFILE</h1>
        <p></p>
        <p id="type">BUYER</p>
        <p>USERNAME : {profiles[this.state.username}</p></p>
        <p>FIRSTNAME : {profiles[this.state.firstname}</p>
        <p>LASTNAME : {profiles[this.state.lastname}</p>
        <p>ADDRESS : {profiles[this.state.address}</p>
      </div>
    )
  }
}

export default Profile;
