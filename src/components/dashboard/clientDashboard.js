import React from 'react';
import '../../App.css';
import ClientProfile from './ClientProfile';
import { Route } from 'react-router-dom';

function ClientDashboard() {
  return (
    <div className="App">
      <Route exact path="/client-profile" component={ClientProfile} />
    </div>
  );
}

export default ClientDashboard;
