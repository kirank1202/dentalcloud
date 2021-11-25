import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import logo from './logo.svg';
import './Owners.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { API, Storage, Auth } from "aws-amplify";
import { Navbar, Nav, Container, Tab, Tabs, Form, Row, Col, Button, ListGroup, Card } from 'react-bootstrap';
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
      <div className="container-body owner">
        <Tabs defaultActiveKey="start">
          <Tab eventKey="start" title="Home">
            <Container >
              <Card>
                <Card.Header>Owners Profile</Card.Header>
                <Card.Body>
                  <Row>
                    <Col sm={9}>
                      <Form onSubmit={submitHandler}>

                        <Row className="mb-3">
                          <Form.Group as={Row} controlId="formGridCity">
                            <Form.Label column sm={4}>First Name</Form.Label>
                            <div className="col-sm-8">
                              <input
                                className={enableEdit ? "form-control" : 'form-control form-control-plaintext'}
                                onChange={e => setFormData({ ...formData, 'fname': e.target.value })}
                                placeholder="Owner First Name"
                                value={formData?.fname}
                              />
                            </div>
                          </Form.Group>
                          <Form.Group as={Row} controlId="formGridCity">
                            <Form.Label column sm={4}>Last Name</Form.Label>
                            <div className="col-sm-8">
                              <input
                                className={enableEdit ? "form-control" : 'form-control form-control-plaintext'}
                                onChange={e => setFormData({ ...formData, 'lname': e.target.value })}
                                placeholder="Owner Last Name"
                                value={formData?.lname}
                              />
                            </div>
                          </Form.Group>
                          <Form.Group as={Row} controlId="formGridEmail">
                            <Form.Label column sm={4}>Business License Number</Form.Label>
                            <div className="col-sm-8">
                              <input
                                className={enableEdit ? "form-control" : 'form-control form-control-plaintext'}
                                onChange={e => setFormData({ ...formData, 'lname': e.target.value })}
                                placeholder="Owner businessLicenseNumber"
                                value={formData?.businessLicenseNumber}
                              />
                            </div>
                          </Form.Group>

                        </Row>
                        <Row className="mb-3">
                          <Form.Group as={Row} controlId="formGridAddress1">
                            <Form.Label column sm={4}>Street</Form.Label>
                            <div className="col-sm-8">
                              <input
                                className={enableEdit ? "form-control" : 'form-control form-control-plaintext'}
                                onChange={e => setFormData({ ...formData, 'lname': e.target.value })}
                                placeholder="Owner businessLicenseNumber"
                                value={formData?.street}
                              />
                            </div>
                          </Form.Group>

                          <Form.Group as={Row} controlId="formGridAddress2">
                            <Form.Label column sm={4}>VisionStatement</Form.Label>
                            <div className="col-sm-8">
                              <input
                                className={enableEdit ? "form-control" : 'form-control form-control-plaintext'}
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
                            <div className="col-sm-8">
                              <input
                                className={enableEdit ? "form-control" : 'form-control form-control-plaintext'}
                                onChange={e => setFormData({ ...formData, 'lname': e.target.value })}
                                placeholder="Owner businessLicenseNumber"
                                value={formData?.city}
                              />
                            </div>
                          </Form.Group>

                          <Form.Group as={Row} controlId="formGridState">
                            <Form.Label column sm={4}>State</Form.Label>
                            <div className="col-sm-8">
                              <input
                                className={enableEdit ? "form-control" : 'form-control form-control-plaintext'}
                                onChange={e => setFormData({ ...formData, 'lname': e.target.value })}
                                placeholder="Owner businessLicenseNumber"
                                value={formData?.state}
                              />
                            </div>
                          </Form.Group>

                          <Form.Group as={Row} controlId="formGridZip">
                            <Form.Label column sm={4}>Zip</Form.Label>
                            <div className="col-sm-8">
                              <input
                                className={enableEdit ? "form-control" : 'form-control form-control-plaintext'}
                                onChange={e => setFormData({ ...formData, 'lname': e.target.value })}
                                placeholder="Owner businessLicenseNumber"
                                value={formData?.zip}
                              />
                            </div>
                          </Form.Group>
                        </Row>
                        {enableEdit ? <button className="btn btn-primary" onClick={createOwner}>Update Owner</button>
                          : <button className="btn btn-primary" onClick={editOwner}>Edit Owner</button>
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
                      <br />
                      <div className="list-group">
                        <a href="#link1" onClick={() => history.push('files')} data-rr-ui-event-key="#link1" className="list-group-item active list-group-item-action">Files</a>
                        <a href="#link2" tabindex="-1" aria-disabled="true" data-rr-ui-event-key="#link2" className="list-group-item disabled list-group-item-action">Quick Link 2</a>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Container>
          </Tab>
          <Tab eventKey="process" title="Process">
            <div className="steps">
              <Tabs defaultActiveKey="second">
                <Tab eventKey="first" title="Dashboard">
                <div className="nav-arrow"></div>
                  Hii, I am 1st tab content
                </Tab>
                <Tab eventKey="second" title="Setting">
                <div className="nav-arrow"></div>
                  Hii, I am 2nd tab content
                </Tab>
                <Tab eventKey="third" title="Aboutus">
                <div className="nav-arrow"></div>
                  Hii, I am 3rd tab content
                </Tab>
              </Tabs>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>

  );
}



export default OwnersProfileApp;