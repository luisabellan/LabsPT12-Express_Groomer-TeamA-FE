import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Register extends Component {
  render() {
    return (
      <div>
        <h2>Are you a...</h2>
        <Link to="/groomers">Groomer</Link>
        <Link to="/customers">Customer</Link>
      </div>
    );
  }
}

export default Register;