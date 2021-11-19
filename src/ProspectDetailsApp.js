import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import logo from './logo.svg';
import './Owners.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { API, Storage, Auth } from "aws-amplify";
import { Navbar, Nav, Container,Tab, Tabs} from 'react-bootstrap';
import { listOwners } from './graphql/queries';
import { createOwner as createOwnerMutation, deleteOwner as deleteOwnerMutation } from './graphql/mutations';

/*
async function fetchOwner(){

}
*/
const initialFormState = {
  ownerID: "",
  lname: "",
  fname: "",
  businessName: "",
  businessDBAName: "",
  street: "",
  unit: "",
  city: "",
  state: "",
  zip: "",
  primaryDentistName: "",
  secondaryDentistName: "",
  businessLicenseNumber: "",
  businessLicenseAcquiredDate: "",
  businessLicenseExpiryDate: "",
  professionalLicenseName: "",
  professionalLicenseNumber: "",
  professionalLicenseAcquiredDate: "",
  professionalLicenseExpiryDate: "",
  missionStatement: "",
  visionStatement: "",
  aboutBusiness: "",
  ownerBiodata: ""
};
function submitHandler(e) {
  e.preventDefault();
}
function ProspectDetailsApp() {
  let history = useHistory();
  const [owner, setOwner] = useState([]);
  const [formData, setFormData] = useState(initialFormState);
  const [enableEdit, setEnableEdit] = useState(false);

  useEffect(() => {
    fetchOwner();
  }, []);

  async function fetchOwner() {
    const apiData = await API.graphql({ query: listOwners });
    setOwner(apiData.data.listOwners.items);
    setFormData(apiData.data.listOwners.items[0])
  }

  async function createOwner() {
    setEnableEdit(!enableEdit);
    if (!formData.lname || !formData.fname) return;
    await API.graphql({ query: createOwnerMutation, variables: { input: formData } });
    setOwner([...owner, formData]);
    // setFormData(initialFormState);
  }

function editOwner() {
  setEnableEdit(!enableEdit);
}



  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Frachise Web</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">My Account</Nav.Link>
            <Nav.Link href="#features">Operation Manual</Nav.Link>
            <Nav.Link href="#pricing">Store</Nav.Link>
            <Nav.Link href="#pricing">My Community</Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a href="#login">{owner[0]?.fname}</a>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div class="container-body">
        <div style={{ display: 'block',padding: 30 }}>
          <Tabs defaultActiveKey="second">
            <Tab eventKey="first" title="Registration">
              Hii, you are in Registration
            </Tab>
            <Tab eventKey="second" title="Opportunity Overview">
              Hii, you are in Opportunity Overview
            </Tab>
            <Tab eventKey="third" title="Mobile Dentistry">
              Hii, you are in Mobile Dentistry
            </Tab>
          </Tabs>
        </div>
        </div>
    </div>

  );
}



export default ProspectDetailsApp;