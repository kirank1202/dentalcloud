import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import React, { useState, useEffect } from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Auth } from "aws-amplify";

import LeadsApp from "./LeadsApp";
import OwnersApp from "./OwnersApp";
import MobileDentalReportsApp from './MobileDentalReportsApp';
import MobileDentalDefaultApp from './MobileDentalDefaultApp';
import OwnersProfileApp from './OwnersProfileApp';
import AdminApp from './AdminApp';
import StateInfoApp from './StateInfoApp';
import StatewiseFiles from './StatewiseFiles';
        


function App() {
  const [userType, setUserType] = useState("");

  let currentUserGroup = ``;

  useEffect(() => {
    async function fetchCurrentUserGroup() {
      Auth.currentAuthenticatedUser().then((authuser) => {
        console.log("AuthUser: ",authuser);
        currentUserGroup =
          authuser.signInUserSession.idToken.payload["cognito:groups"][0];
        setUserType(currentUserGroup);
        console.log(
          currentUserGroup,
          "this is the currentuser in useEffect",
          currentUserGroup.length
        );
      });
    }

    fetchCurrentUserGroup();
    console.log(
      currentUserGroup,
      "this is the currentuser after fetchuserGroup method",
      { fetchCurrentUserGroup }.length
    );
  }, []);

  async function fetchCurrentUserGroup() {
    Auth.currentAuthenticatedUser().then((authuser) => {
     
      currentUserGroup =
        authuser.signInUserSession.idToken.payload["cognito:groups"][0];
      console.log(
        currentUserGroup,
        "this is the currentuser in fetchFunction",
        currentUserGroup.length
      );
      return currentUserGroup;
    });
  }

  Auth.currentAuthenticatedUser().then((authuser) => {
    currentUserGroup =
      authuser.signInUserSession.idToken.payload["cognito:groups"][0];
    console.log(
      currentUserGroup,
      "this is the currentuser rightafter fetching it",
      currentUserGroup.length
    );
  });

  console.log(
    currentUserGroup,
    "this is the currentuser before return",
    currentUserGroup.length
  );

/*
async function fetchCurrentUserGroup() {
  setUserType('Leads');
  return 'Leads';
}
*/
return (
  <div className="App">
    <Router>
        <Route path="/leadshome" component={LeadsApp} />
        <Route path="/ownershome" component={OwnersApp} />
        <Route path="/adminshome" component={StateInfoApp} />
        <Route path="/reports" component={MobileDentalReportsApp} />
        <Route path="/default" component={MobileDentalDefaultApp} />
        <Route path="/ownersprofile" component={OwnersProfileApp} />
        <Route path="/files" component={StatewiseFiles} />
        
        {fetchCurrentUserGroup}
        {
          userType === "Leads" ? 
          (
            <Redirect to="/leadshome" />
          ) : ( 
                userType == "Bizowners" ? 
                (
                  <Redirect to="/ownersprofile" />
                ): ( 
                  userType == "admins" ? 
                  (
                    <Redirect to="/adminshome" />
                  ):
                  (
                    <Redirect to="/default" /> 
                    )
                )
              
              )
        }
        <AmplifySignOut />
    </Router>
  </div>
);
}
export default withAuthenticator(App);

//export default App;

/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h2>Welcome To The World of Mobile Dentistry 2021</h2>
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

      <AmplifySignOut />
    </div>
  );
}



// export default App;
export default withAuthenticator(App);
*/