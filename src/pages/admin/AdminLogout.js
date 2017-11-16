import React, { Component } from 'react'
import { connect } from 'react-redux'
import { adminLoginAction } from '../../actions/adminLoginAction'
import swal from 'sweetalert'

class AdminLogout extends Component {
  componentWillMount() {
    this.props.adminLoginAction('', '');
    window.location.href = 'http://localhost:3000/admin';
    swal({
      title: "Logout Successful!",
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
    adminLoginAction: (username) => dispatch(adminLoginAction(username)),
  }
}

export default connect(null, mapDispatchToProps)(AdminLogout);