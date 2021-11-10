import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './Owners.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { API, Storage, Auth } from "aws-amplify";

//import InputGroup from "react-bootstrap/InputGroup";
//import FormCntrl from "react-bootstrap/FormControl";

import { listStates } from './graphql/queries';
import { createState as createStateMutation, createState, deleteState as deleteStateMutation } from './graphql/mutations';

const FORM1 = "Registration-Form"; 
const FORM2 = "Contract-Agreement"; 
/*
async function fetchState(){

}
*/
const initialFormState = {
  abbreviation: "",
  name: "",
  form1: "",
  form2: "",
  form3: "",
  form4: "",
  from5: "",
};



function StateInfoApp() {
  const [state, setState] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchStates();
  }, []);


  async function createState() {
    alert("creating state form");
    if (!formData.name || !formData.abbreviation) return;
    await API.graphql({ query: createStateMutation, variables: { input: formData } });
    setState([ ...state, formData ]);
    setFormData(initialFormState);
  }

  async function onChange(e) {
    if (!e.target.files[0]) return
    const file = e.target.files[0];
    setFormData({ ...formData, form1: `${formData.abbreviation}-${FORM1}` });
    await Storage.put(`${formData.abbreviation}-${FORM1}`, file);
    fetchStates();
  }
  
    async function fetchStates() {
      const apiData = await API.graphql({ query: listStates });
      const statesFromAPI = apiData.data.listStates.items;
      await Promise.all(statesFromAPI.map(async state => {
        if (state.form1) {
          const form1 = await Storage.get(state.form1);
          state.form1 = form1;
        }
        if (state.form2) {
          const form2 = await Storage.get(state.form2);
          state.form2 = form2;
        }
        if (state.form3) {
          const form3 = await Storage.get(state.form3);
          state.form3 = form3;
        }
        if (state.form4) {
          const form4 = await Storage.get(state.form4);
          state.form4 = form4;
        }
        if (state.from5) {
          const from5 = await Storage.get(state.from5);
          state.from5 = from5;
        }
        return state;
      }))
      setState(apiData.data.listStates.items);
    }
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <h2>Welcome To States Profile Page</h2>
        </p>
        </header>
      <h1>My States App</h1>
   
      <table>
        <thead> 
          <tr>
            <th>abbreviation</th>
            <th>name</th>
            <th>form1</th>
            <th>form2</th>
            <th>form3</th>
            <th>form4</th>
            <th>form5</th>
          </tr>
        </thead>

        <tr>
          <th>{formData.abbreviation}</th>
          <th>{formData.name}</th>
          <th>{formData.form1}</th>
          <th>formData.form2</th>
          <th>formData.form3</th>
          <th>formData.form4</th>
          <th>formData.from5</th>
        </tr>
      </table>
      <input
        onChange={e => setFormData({ ...formData, abbreviation: e.target.value})}
        placeholder="abbreviation"
        value={formData.abbreviation}
      />
      <input
        onChange={e => setFormData({ ...formData, name: e.target.value})}
        placeholder="State Name"
        value={formData.name}
      />
      <input
        type="file"
        onChange={onChange}
      />

      <button onClick={createState}>Create State</button>
      <p> </p>
      <p> </p>
      <p> </p>

       </div>
 
  );
}
export default StateInfoApp;