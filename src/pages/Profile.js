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
                  <a href={'http://localhost:3000/history'} id="history">VIEW ORDER HISTORY</a>
                </div>
            </div>
          </div>
      )
    }
  }
}

export default Profile;
