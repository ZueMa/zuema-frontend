import React, { Component } from 'react'
import { push } from 'react-router-redux'
import { connect } from 'react-redux'
import { addCookie } from '../actions/cookieActions'
import swal from 'sweetalert'

class Logout extends Component {
  componentWillMount() {
    this.props.cookie('', '');
    this.props.push('/');
    swal({
      title: "Logout Success!",
      icon: "success",
    });
  }
  render() {
    return (
      <div></div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    cookie: (user_id, user_type) => dispatch(addCookie(user_id, user_type)),
    push: (next_url) => dispatch(push(next_url)),
  }
}

export default connect(null, mapDispatchToProps)(Logout);