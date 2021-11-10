import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import logo from './logo.svg';
import './Owners.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { API, Storage, Auth } from "aws-amplify";
import { Navbar, Nav, Container, Form, Row, Col, Button, ListGroup, Card } from 'react-bootstrap';
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
function OwnersProfileApp() {
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
      {/* <table border='1'>
        <thead>
          <tr>
            <th>ownerID</th>
            <th>Lname</th>
            <th>Fname</th>
            <th>businessName</th>
            <th>businessDBAName</th>
            <th>street</th>
            <th>unit</th>
            <th>city</th>
            <th>state</th>
            <th>zip</th>
            <th>primaryDentistName</th>
          </tr>
        </thead>


        {owner.map((item, key) => (
          <tr>
            <th>{item.ownerID}</th>
            <th>{item.lname}</th>
            <th>{item.fname}</th>
            <th>{item.businessName}</th>
            <th>{item.businessDBAName}</th>
            <th>{item.steet}</th>
            <th>{item.unit}</th>
            <th>{item.city}</th>
            <th>{item.state}</th>
            <th>{item.zip}</th>
            <th>{item.primaryDentistName}</th>
          </tr>
        ))}


      </table> */}
      <div class="container-body">
      <Container >
        <Card>
        <Card.Header>Owners Profile</Card.Header>
          <Card.Body>
            <Row>
              <Col sm={9}>
                <Form  onSubmit={submitHandler}>
                   
                  <Row className="mb-3">
                  <Form.Group as={Row} controlId="formGridCity">
                      <Form.Label column sm={4}>First Name</Form.Label>
                      <div class="col-sm-8">
                      <input 
                        class={enableEdit ? "form-control" : 'form-control form-control-plaintext'}
                        onChange={e => setFormData({ ...formData, 'fname': e.target.value })}
                        placeholder="Owner First Name"
                        value={formData?.fname}
                      />
                      </div>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formGridCity">
                      <Form.Label  column sm={4}>Last Name</Form.Label>
                      <div class="col-sm-8">
                      <input 
                        class={enableEdit ? "form-control" : 'form-control form-control-plaintext'}
                        onChange={e => setFormData({ ...formData, 'lname': e.target.value })}
                        placeholder="Owner Last Name"
                        value={formData?.lname}
                      />
                      </div>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formGridEmail">
                      <Form.Label  column sm={4}>Business License Number</Form.Label>
                      <div class="col-sm-8">
                      <input 
                        class={enableEdit ? "form-control" : 'form-control form-control-plaintext'}
                        onChange={e => setFormData({ ...formData, 'lname': e.target.value })}
                        placeholder="Owner businessLicenseNumber"
                        value={formData?.businessLicenseNumber}
                      />
                      </div>
                    </Form.Group>

                  </Row>
                  <Row className="mb-3">
                  <Form.Group as={Row}controlId="formGridAddress1">
                    <Form.Label  column sm={4}>Street</Form.Label>
                    <div class="col-sm-8">
                      <input 
                        class={enableEdit ? "form-control" : 'form-control form-control-plaintext'}
                        onChange={e => setFormData({ ...formData, 'lname': e.target.value })}
                        placeholder="Owner businessLicenseNumber"
                        value={formData?.street}
                      />
                      </div>
                  </Form.Group>

                  <Form.Group as={Row}  controlId="formGridAddress2">
                    <Form.Label  column sm={4}>VisionStatement</Form.Label>
                    <div class="col-sm-8">
                    <input 
                        class={enableEdit ? "form-control" : 'form-control form-control-plaintext'}
                        onChange={e => setFormData({ ...formData, 'lname': e.target.value })}
                        placeholder="Owner visionStatement"
                        value={formData?.visionStatement}
                      />
                      </div>
                  </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Row} controlId="formGridCity">
                      <Form.Label column sm={4}>City</Form.Label>
                      <div class="col-sm-8">
                      <input 
                        class={enableEdit ? "form-control" : 'form-control form-control-plaintext'}
                        onChange={e => setFormData({ ...formData, 'lname': e.target.value })}
                        placeholder="Owner businessLicenseNumber"
                        value={formData?.city}
                      />
                      </div>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formGridState">
                      <Form.Label column sm={4}>State</Form.Label>
                      <div class="col-sm-8">
                      <input 
                        class={enableEdit ? "form-control" : 'form-control form-control-plaintext'}
                        onChange={e => setFormData({ ...formData, 'lname': e.target.value })}
                        placeholder="Owner businessLicenseNumber"
                        value={formData?.state}
                      />
                      </div>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formGridZip">
                      <Form.Label  column sm={4}>Zip</Form.Label>
                      <div class="col-sm-8">
                      <input 
                        class={enableEdit ? "form-control" : 'form-control form-control-plaintext'}
                        onChange={e => setFormData({ ...formData, 'lname': e.target.value })}
                        placeholder="Owner businessLicenseNumber"
                        value={formData?.zip}
                      />
                      </div>
                    </Form.Group>
                  </Row>
                  { enableEdit ? <button class="btn btn-primary" onClick={createOwner}>Update Owner</button>
                    : <button class="btn btn-primary" onClick={editOwner}>Edit Owner</button>
                  }
                </Form>
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
                    <a href="#link1" onClick={() => history.push('files') } data-rr-ui-event-key="#link1" class="list-group-item active list-group-item-action">Files</a>
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



export default OwnersProfileApp;