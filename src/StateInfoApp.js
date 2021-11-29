
import React, { useState, useEffect } from "react";
import './Owners.css';
import { API, Storage, Auth } from "aws-amplify";
import { Navbar, Nav, Container, Card,Row } from 'react-bootstrap';
import { Table } from 'reactstrap';


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
  state:"",
  abbreviation: "",
  name:  "",
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
    if (!formData.name || !formData.abbreviation || !formData.state || !formData.form1 ) return;
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
    <>
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
        <Card.Header>File Data</Card.Header>
          <Card.Body>
          <Row className="mb-4 mt-5">
          <div className="userInput">
          <input
              type="text"
              className="abbreviation"
              onChange={e => setFormData({ ...formData, 'abbreviation': e.target.value})}
            />
           <select name="state" id="" className="selectState" onChange={e => setFormData({ ...formData, 'state': e.target.value})} >
              <option value="">Select state</option>
              <option value="USA">USA</option>
              <option value="England">England</option>
              <option value="Parish">Parish</option>
              <option value="Netherland">Netherland</option>
           </select>
           <select name="state" id="" className="formname" onChange={e => setFormData({ ...formData, 'name': e.target.value})}>
              <option value="">Form Name</option>
              <option value="USA">Form One</option>
              <option value="Form Two">Form Two</option>
              <option value="Form Three">Form Three</option>
              <option value="Form Five">Form Five</option>
           </select>
            <input
              type="file"
              onChange={onChange}
              className="fileUpload"
              onChange={e => setFormData({ ...formData, 'form1': e.target.value})}
            />
              <div>
                <button onClick={createState} className="btn btn-primary">Create State</button>
              </div>
            </div>
          </Row>

          <Table responsive hover>
            <thead>
              <tr>
                 <th>abbreviation</th>
                 <th>state</th>
                 <th>name</th>
                <th>form1</th>
                <th>form2</th>
                <th>form3</th>
                <th>form4</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                  <td>{formData.abbreviation}</td>
                  <td>{formData.state}</td>
                  <td>{formData.name}</td>
                  <td>{formData.form1}</td>
                  <td>formData.form3</td>
                  <td>formData.form4</td>
                  <td>formData.from5</td>
                </tr>
            </tbody>
          </Table>
        
           
          </Card.Body>
        </Card>
      </Container>
      </div>
    </div>

   
  </>
  );
}
export default StateInfoApp;