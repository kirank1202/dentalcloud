import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './Owners.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Auth } from "aws-amplify";


function AdminApp() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h2>Welcome To Admin Home Page</h2>
        </p>
       
        <a
          className="App-link"
          href="https://www.teledentalsolutions.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
        
      </header>
    </div>
  );
}



export default AdminApp;