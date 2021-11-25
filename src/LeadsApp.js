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
import { createOwner as createOwnerMutation, deleteOwner as deleteOwnerMutation, updateOwner } from './graphql/mutations';
import Image from 'react-bootstrap/Image';
import bannerImage from './assets/banner-image-1.jpg';


/*
async function fetchOwner(){

}
*/
const initialQualifyFormState = {
  questionnaireId: "",
  passion: ""
}

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
  primaryDentist: "",
  secondaryDentist: "",
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
  ownerBiodata: "",
  businessEmail: "",
  businessPhone: "",
  businessURL: ""
};
function submitHandler(e) {
  e.preventDefault();
}


let jumpstartDisabled = false;
let licenseDisabled = true;
let dentistDisabled = true;
let relationsDisabled = true;
let marketingDisabled = true;
let qualifyDisabled = true;

function LeadsApp() {
  let history = useHistory();
  const [owner, setOwner] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  const [qualifyFormData, setQualifyFormData] = useState(initialQualifyFormState);
  const [createProspect, setCreateProspect] = useState(true);
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    // fetchOwner();
  }, []);

  async function fetchOwner() {
    const apiData = await API.graphql({ query: listOwners });
    setOwner(apiData.data.listOwners.items);
    setFormData(apiData.data.listOwners.items[0])
  }

  async function handleCreateProspect() {
    setIsLoaded(false);
    setCreateProspect(!createProspect);
    //if (!formData.lname || !formData.fname) return;
   // alert(`Creating new user- ${formData.fname}`);
    qualifyDisabled = false;
    await API.graphql({ query: createOwnerMutation, variables: { input: formData } });
    setOwner([...owner, formData]);
    // setFormData(initialFormState);
    alert(`Created ${formData.fname}`);
  }

  async function handleUpdateQualify() {
    setIsLoaded(false);
    //setCreateProspect(!createProspect);
    //if (!formData.lname || !formData.fname) return;
   // alert(`Creating new user- ${formData.fname}`);

  /* 
    await API.graphql({
      query: updateOwner,
      variables: {
        input: {
          id: owner.id,
          businessName: formData.businessName,
          businessDBAName: formData.businessDBAName,
          businessPhone: formData.businessPhone,
          businessEmail: formData.businessEmail,
          businessURL: formData.businessURL
        },
      },
    }); 
  */
  jumpstartDisabled = false;
  alert("Qualify information updated");
  } // setState(initialState);

  async function handleUpdateJumpstart() {
    setIsLoaded(false);
    setCreateProspect(!createProspect);
    //if (!formData.lname || !formData.fname) return;
   // alert(`Creating new user- ${formData.fname}`);
    licenseDisabled = false;
  await API.graphql({
    query: updateOwner,
    variables: {
      input: {
        id: owner.id,
        businessName: formData.businessName,
        businessDBAName: formData.businessDBAName,
        businessPhone: formData.businessPhone,
        businessEmail: formData.businessEmail,
        businessURL: formData.businessURL
      },
    },
  });
  alert("Jumpstart information updated");
 } // setState(initialState);



  return (
    <div className="App">
      <div class="container-body">
        <div>
          <Tabs defaultActiveKey="welcome">
            <Tab eventKey="welcome" title="Welcome">
              <Image src={bannerImage} fluid />
            </Tab>

            <Tab eventKey="registration" title="0: REGISTRATION">
              <Container>
                <div class="register-container card">
                  <Row>
                    <Col sm={9}>
                      <Form onSubmit={submitHandler}>
                        <Row className="mb-3">
                          <Form.Group as={Row} controlId="fnameControl">
                            <Form.Label column sm={4}>First Name</Form.Label>
                            <div class="col-sm-8">
                              <input
                                class={createProspect ? "form-control" : 'form-control form-control-plaintext'}
                                onChange={e => setFormData({ ...formData, 'fname': e.target.value })}
                                placeholder="Owner First Name"
                                value={formData?.fname}
                                disabled={!isLoaded}
                              />
                            </div>
                          </Form.Group>
                          
                          <Form.Group as={Row} controlId="lnameControl">
                            <Form.Label column sm={4}>Last Name</Form.Label>
                            <div class="col-sm-8">
                              <input
                                class={createProspect ? "form-control" : 'form-control form-control-plaintext'}
                                onChange={e => setFormData({ ...formData, 'lname': e.target.value })}
                                placeholder="Owner Last Name"
                                value={formData?.lname}
                                disabled={!isLoaded}
                              />
                            </div>
                          </Form.Group>
                  
                          <Form.Group as={Row} controlId="streetControl">
                            <Form.Label column sm={4}>Street</Form.Label>
                            <div class="col-sm-8">
                              <input
                                class={createProspect ? "form-control" : 'form-control form-control-plaintext'}
                                onChange={e => setFormData({ ...formData, 'street': e.target.value })}
                                placeholder="Enter Street Address"
                                value={formData?.street}
                                disabled={!isLoaded}
                              />
                            </div>
                          </Form.Group>

                          <Form.Group as={Row} controlId="cityControl">
                            <Form.Label column sm={4}>City</Form.Label>
                            <div class="col-sm-8">
                              <input
                                class={createProspect ? "form-control" : 'form-control form-control-plaintext'}
                                onChange={e => setFormData({ ...formData, 'city': e.target.value })}
                                placeholder="Enter City Name"
                                value={formData?.city}
                                disabled={!isLoaded}
                              />
                            </div>
                          </Form.Group>

                          <Form.Group as={Row} controlId="stateControl">
                            <Form.Label column sm={4}>State</Form.Label>
                            <div class="col-sm-8">
                              <input
                                class={createProspect ? "form-control" : 'form-control form-control-plaintext'}
                                onChange={e => setFormData({ ...formData, 'state': e.target.value })}
                                placeholder="Enter State"
                                value={formData?.state}
                                disabled={!isLoaded}
                              />
                            </div>
                          </Form.Group>

                          <Form.Group as={Row} controlId="zipControl">
                            <Form.Label column sm={4}>Zip</Form.Label>
                            <div class="col-sm-8">
                              <input
                                class={createProspect ? "form-control" : 'form-control form-control-plaintext'}
                                onChange={e => setFormData({ ...formData, 'zip': e.target.value })}
                                placeholder="Enter Zipcode"
                                value={formData?.zip}
                                disabled={!isLoaded}
                              />
                            </div>
                          </Form.Group>                         
                        </Row>
                        <button class="btn btn-primary" onClick={handleCreateProspect}
                          disabled={
                            !(  formData.lname &&
                                formData.fname &&
                                formData.street &&
                                formData.city &&
                                formData.state &&
                                formData.zip &&
                                isLoaded
                              ) 
                          }
                        > Save and Continue</button>
                      </Form>
                    </Col>
                  </Row>
                </div>
              </Container>
            </Tab>

            <Tab eventKey="qualify" title="0.5: Qualify" disabled={qualifyDisabled}>
              <Container>    
              <div class="qualify-tab">   
              <Row>
                    <Col sm={9}>
                      <Form onSubmit={submitHandler}>
                        <Row className="mb-3">
                          <Form.Group as={Row} controlId="fnameControl">
                            <Form.Label column sm={4}>First Name</Form.Label>
                            <div class="col-sm-8">
                              <input
                                class={createProspect ? "form-control" : 'form-control form-control-plaintext'}
                                onChange={e => setFormData({ ...formData, 'fname': e.target.value })}
                                placeholder="Owner First Name"
                                value={formData?.fname}
                                disabled={!isLoaded}
                              />
                            </div>
                          </Form.Group>
                          
                          <Form.Group as={Row} controlId="lnameControl">
                            <Form.Label column sm={4}>Last Name</Form.Label>
                            <div class="col-sm-8">
                              <input
                                class={createProspect ? "form-control" : 'form-control form-control-plaintext'}
                                onChange={e => setFormData({ ...formData, 'lname': e.target.value })}
                                placeholder="Owner Last Name"
                                value={formData?.lname}
                                disabled={!isLoaded}
                              />
                            </div>
                          </Form.Group>
                          <Form.Group as={Row} controlId="passionControl">
                            <Form.Label column sm={4}>1. ARE YOU ÜBER PASSIONATE ABOUT YOUR BUSINESS IDEA’S SUBJECT MATTER?</Form.Label>
                            <div class="col-sm-8">
                              <input
                                class={createProspect ? "form-control" : 'form-control form-control-plaintext'}
                                onChange={e => setQualifyFormData({ ...qualifyFormData, 'passion': e.target.value })}
                                placeholder="Passion Question"
                                value={qualifyFormData?.passion}
                                disabled={isLoaded}
                              />
                            </div>
                          </Form.Group>

                          </Row>
                        <button class="btn btn-primary" onClick={handleUpdateQualify}
                          disabled={
                            !(  formData.lname &&
                                formData.fname 
                                
                              ) 
                          }
                        > Save and Continue</button>
                      </Form>
                    </Col>
                  </Row>
                </div>

              </Container>
            </Tab>
          
            <Tab eventKey="jumpstart" title="1: JUMP START" disabled={jumpstartDisabled}>
              <Container>    
              <div class="jumpstart-tab">   
              <Row>
                    <Col sm={9}>
                      <Form onSubmit={submitHandler}>
                        <Row className="mb-3">
                          <Form.Group as={Row} controlId="fnameControl">
                            <Form.Label column sm={4}>First Name</Form.Label>
                            <div class="col-sm-8">
                              <input
                                class={createProspect ? "form-control" : 'form-control form-control-plaintext'}
                                onChange={e => setFormData({ ...formData, 'fname': e.target.value })}
                                placeholder="Owner First Name"
                                value={formData?.fname}
                                disabled={true}
                              />
                            </div>
                          </Form.Group>
                          <Form.Group as={Row} controlId="lnameControl">
                            <Form.Label column sm={4}>Last Name</Form.Label>
                            <div class="col-sm-8">
                              <input
                                class={createProspect ? "form-control" : 'form-control form-control-plaintext'}
                                onChange={e => setFormData({ ...formData, 'lname': e.target.value })}
                                placeholder="Owner Last Name"
                                value={formData?.lname}
                                disabled={true}
                              />
                            </div>
                          </Form.Group>

                          <Form.Group as={Row} controlId="streetControl">
                            <Form.Label column sm={4}>Street</Form.Label>
                            <div class="col-sm-8">
                              <input
                                class={createProspect ? "form-control" : 'form-control form-control-plaintext'}
                                onChange={e => setFormData({ ...formData, 'street': e.target.value })}
                                placeholder="Enter Street Address"
                                value={formData?.street}
                                disabled={true}
                              />
                            </div>
                          </Form.Group>
                
                          <Form.Group as={Row} controlId="cityControl">
                            <Form.Label column sm={4}>City</Form.Label>
                            <div class="col-sm-8">
                              <input
                                class={createProspect ? "form-control" : 'form-control form-control-plaintext'}
                                onChange={e => setFormData({ ...formData, 'city': e.target.value })}
                                placeholder="Enter City Name"
                                value={formData?.city}
                                disabled={true}
                              />
                            </div>
                          </Form.Group>

                          <Form.Group as={Row} controlId="stateControl">
                            <Form.Label column sm={4}>State</Form.Label>
                            <div class="col-sm-8">
                              <input
                                class={createProspect ? "form-control" : 'form-control form-control-plaintext'}
                                onChange={e => setFormData({ ...formData, 'state': e.target.value })}
                                placeholder="Enter State"
                                value={formData?.state}
                                disabled={true}
                              />
                            </div>
                          </Form.Group>

                          <Form.Group as={Row} controlId="zipControl">
                            <Form.Label column sm={4}>Zip</Form.Label>
                            <div class="col-sm-8">
                              <input
                                class={createProspect ? "form-control" : 'form-control form-control-plaintext'}
                                onChange={e => setFormData({ ...formData, 'zip': e.target.value })}
                                placeholder="Enter Zipcode"
                                value={formData?.zip}
                                disabled={true}
                              />
                            </div>
                          </Form.Group>
                         
                          <Form.Group as={Row} controlId="biznameControl">
                            <Form.Label column sm={4}>Business Legal Name</Form.Label>
                            <div class="col-sm-8">
                              <input
                                class={createProspect ? "form-control" : 'form-control form-control-plaintext'}
                                onChange={e => setFormData({ ...formData, 'businessname': e.target.value })}
                                placeholder="Owner Business Name"
                                value={formData?.businessName}
                                disabled={false}
                              />
                            </div>
                          </Form.Group>

                          <Form.Group as={Row} controlId="bizdbaControl">
                            <Form.Label column sm={4}>Doing Business As (DBA) Name</Form.Label>
                            <div class="col-sm-8">
                              <input
                                class={createProspect ? "form-control" : 'form-control form-control-plaintext'}
                                onChange={e => setFormData({ ...formData, 'businessdbaname': e.target.value })}
                                placeholder="Owner DBA (Doing Business As) Name"
                                value={formData?.businessDBAName}
                               // disabled={isLoaded}
                              />
                            </div>
                          </Form.Group>

                          <Form.Group as={Row} controlId="zipControl">
                            <Form.Label column sm={4}>Business URL</Form.Label>
                            <div class="col-sm-8">
                              <input
                                class={createProspect ? "form-control" : 'form-control form-control-plaintext'}
                                onChange={e => setFormData({ ...formData, 'url': e.target.value })}
                                placeholder="Enter Business URL Address"
                                value={formData?.businessURL}
                                disabled={isLoaded}
                              />
                            </div>
                          </Form.Group>

                          <Form.Group as={Row} controlId="phoneControl">
                            <Form.Label column sm={4}>Business Phone</Form.Label>
                            <div class="col-sm-8">
                              <input
                                class={createProspect ? "form-control" : 'form-control form-control-plaintext'}
                                onChange={e => setFormData({ ...formData, 'phone': e.target.value })}
                                placeholder="Enter Business URL Address"
                                value={formData?.businessPhone}
                                disabled={isLoaded}
                              />
                            </div>
                          </Form.Group>
                          <Form.Group as={Row} controlId="emailControl">
                            <Form.Label column sm={4}>Business Email</Form.Label>
                            <div class="col-sm-8">
                              <input
                                class={createProspect ? "form-control" : 'form-control form-control-plaintext'}
                                onChange={e => setFormData({ ...formData, 'email': e.target.value })}
                                placeholder="Enter Business URL Address"
                                value={formData?.businessEmail}
                                disabled={isLoaded}
                              />
                            </div>
                          </Form.Group>

                          <Form.Group as={Row} controlId="passionControl">
                            <Form.Label column sm={4}>1. ARE YOU ÜBER PASSIONATE ABOUT YOUR BUSINESS IDEA’S SUBJECT MATTER?</Form.Label>
                            <div class="col-sm-8">
                              <input
                                class={createProspect ? "form-control" : 'form-control form-control-plaintext'}
                                onChange={e => setQualifyFormData({ ...qualifyFormData, 'passion': e.target.value })}
                                placeholder="Passion Question"
                                value={qualifyFormData?.passion}
                                disabled={isLoaded}
                              />
                            </div>
                          </Form.Group>

                        </Row>
                        <button class="btn btn-primary" onClick={handleUpdateJumpstart}
                          disabled={
                            !(  formData.lname &&
                                formData.fname &&
                                formData.street &&
                                formData.city &&
                                formData.state &&
                                formData.zip &&

                                formData.businessName &&
                                formData.businessDBAName &&
                                formData.businessURL
                               // isLoaded
                              ) 
                          }
                        > Save and Continue</button>
                      </Form>
                    </Col>
                  </Row>
                </div>   
              </Container>
            </Tab>

            <Tab eventKey="license" title="2: LICENSES" disabled={licenseDisabled}>
              <Container>    
              <div class="license-tab">   
              </div>
              </Container>
            </Tab>
            {/*}
            <Tab eventKey="dentist" title="3: DENTIST" disabled={dentistDisabled}>
              <Container>    
              <div class="dentist-tab">   
              </div>
              </Container>
            </Tab>
                        */}
            <Tab eventKey="relations" title="4: Contracts" disabled={relationsDisabled}>
              <Container>    
              <div class="relations-tab">   
              </div>     
              </Container>
            </Tab>

            <Tab eventKey="marketing" title="5: MARKETING" disabled={marketingDisabled}>
              <Container> 
              <div class="marketing-tab">   
              </div>
  
              </Container>
            </Tab>
            
            
          </Tabs>
        </div>
      </div>
    </div>

  );
}



export default LeadsApp;