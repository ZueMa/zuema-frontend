import React, { Component } from 'react'
import '../stylesheets/profile.css'
import axios from 'axios'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { push } from 'react-router-redux'
import swal from 'sweetalert'


class Profile extends Component {
  constructor(props){
    super(props);
    this.state = { profiles:[] };
  }

  componentDidMount(){
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
    } else {
      swal({
        title: "Please Login First!",
        icon: "error",
      }).then (() => {
        this.props.push('/login')
      });
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
              <dl id="dl-horizontal">
                <dt>USERNAME</dt>
                <dd>{this.state.profiles.username}</dd>
                <dt>FIRSTNAME</dt>
                <dd>{this.state.profiles.first_name}</dd>
                <dt>LASTNAME</dt>
                <dd>{this.state.profiles.last_name}</dd>         
                <dt>ADDRESS</dt>
                <dd>{this.state.profiles.address}</dd>
              </dl>
            <br/>
            <Link to={'purchasehistorybuyer'} id="history">VIEW PURCHASE HISTORY</Link>
          </div>
        </div>
      </div>
      )
    } else if (this.props.type === 'seller'){
      return(
        
        <div className="container-box">
          <div className="text-head">PROFILE
            <div className="line-rectangle"></div>
            <p id="type">SELLER</p>
            <div className="info">
              <div className="panel panel-danger">
                <div className="panel-body">
                  <dl className="dl-horizontal">
                    <dt>USERNAME</dt>
                    <dd>{this.state.profiles.username}</dd>
                    <dt>FIRSTNAME</dt>
                    <dd>{this.state.profiles.first_name}</dd>
                    <dt>LASTNAME</dt>
                    <dd>{this.state.profiles.last_name}</dd>
                    <dt>INFORMATION</dt>
                    <dd>{this.state.profiles.description}</dd>
                    <dt>COMPANY NAME</dt>
                    <dd>{this.state.profiles.company_name}</dd>
                    <dt>ADDRESS</dt>
                    <dd>{this.state.profiles.address}</dd>
                  </dl>
                </div>
              </div>
              <br/>
              <Link to={'orderhistoryseller'} id="history">VIEW ORDER HISTORY</Link>                 
            </div> 
          </div>
        </div>
      )
    } else {
      return null;
    }
  }
}

function mapStateToProps(state) {
  return {
   id: state.cookie.id,
   type: state.cookie.type,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    push: (url) => dispatch(push(url)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Profile);
