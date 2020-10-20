import React from 'react';
import '../../App.css';
import GroomerProfile from './GroomerProfile';
import { Route } from 'react-router-dom';

function GroomerDashboard() {
  return (
    <div className="App">
      <Route exact path="/groomer-profile" component={GroomerProfile} />
    </div>
  );
}

export default GroomerDashboard;
