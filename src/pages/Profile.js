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
            <div id="wrapper" className="input-form">
                <p>USERNAME       {this.state.profiles.username}</p>
                <p>FIRSTNAME      {this.state.profiles.first_name}</p>
                <p>LASTNAME       {this.state.profiles.last_name}</p>
                <p>ADDRESS        {this.state.profiles.address}</p>
              <a href={'http://localhost:3000/history'} id="history">VIEW ORDER HISTORY</a>  
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
                <p>USERNAME       {this.state.profiles.username}</p>
                <p>FIRSTNAME      {this.state.profiles.first_name}</p>
                <p>LASTNAME       {this.state.profiles.last_name}</p>
                <p>COMPANY NAME   {this.state.profiles.company_name}</p>
                <p>INFORMATION    {this.state.profiles.description}</p>
                <p>ADDRESS        {this.state.profiles.address}</p>
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
