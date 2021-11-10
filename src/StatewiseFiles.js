import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import logo from './logo.svg';
import './Owners.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { API, Storage, Auth } from "aws-amplify";
import { Navbar, Nav, Container, Form, Row, Col, Button, ListGroup, Card, Image } from 'react-bootstrap';
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
function StatewiseFiles() {
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
      <Container >
        <Card>
        <Card.Header>Owners files</Card.Header>
          <Card.Body>
            <Row>
              <Col sm={9}>
                  <Row>
                    <Col xs={6} md={2}>
                      <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/400px-PDF_file_icon.svg.png" thumbnail />
                      <a href="http://www.africau.edu/images/default/sample.pdf" target="_blank">Link to file</a>
                    </Col>
                    <Col xs={6} md={2}>
                      <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/400px-PDF_file_icon.svg.png" thumbnail />
                      <a href="http://www.africau.edu/images/default/sample.pdf" target="_blank">Link to file</a>
                    </Col>
                    <Col xs={6} md={2}>
                      <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/PDF_file_icon.svg/400px-PDF_file_icon.svg.png" thumbnail />
                      <a href="http://www.africau.edu/images/default/sample.pdf" target="_blank">Link to file</a>
                    </Col>
                  </Row>
               </Col>
              <Col sm={3}>
              <Card>
                      <Card.Img variant="top" src="https://mdbootstrap.com/img/Photos/new-templates/bootstrap-profiles/avatar-1.jpg" />
                      <Card.Body>
                        <Card.Title>{formData?.fname}</Card.Title>
                        <Card.Text>{formData?.visionStatement}
                        </Card.Text>
                      </Card.Body>
                    </Card>
                    <br/>
                    <div class="list-group">
                    <a href="#link1" onClick={() => history.push('ownersprofile') } data-rr-ui-event-key="#link1" class="list-group-item active list-group-item-action">Profile</a>
                    <a href="#link2" tabindex="-1" aria-disabled="true" data-rr-ui-event-key="#link2" class="list-group-item disabled list-group-item-action">Quick Link 2</a>
                    </div>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
      </div>
    </div>

  );
}



export default StatewiseFiles;