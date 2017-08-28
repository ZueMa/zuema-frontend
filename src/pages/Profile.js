import React, { Component } from 'react'
import '../stylesheets/profile.css'
import axios from 'axios'

class Profile extends Component {
  constructor(props){
    super(props);

    this.state = { profiles:[] };
   
  }

  componentWillMount(){
    axios.get('https://private-00f7e-zuema.apiary-mock.com/buyers/me').then( res => {
      const profiles = res.data;
      this.setState({ profiles });
    });
  }

  render() {
    return(
      <div className="container-box">
        <div className="text-head">PROFILE
          <div className="line-rectangle"></div>
          <p id="type">BUYER</p>
          <div className="info">
            <br/>
            <p>USERNAME<span className="indent"></span>{this.state.profiles.username}</p>
            <p>FIRSTNAME<span className="indent"></span>{this.state.profiles.first_name}</p>
            <p>LASTNAME<span className="indent"></span>{this.state.profiles.last_name}</p>
            <p>ADDRESS<span className="indent"></span>{this.state.profiles.address}</p>
            <br/>
          </div>
        </div>


        <a href={this.url} id="history">VIEW ORDER HISTORY</a>
      </div>
    )
  }
}

export default Profile;
