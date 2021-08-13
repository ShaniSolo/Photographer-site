import { React, useState } from "react";
import '../App.css';
import './contact.css';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import { withRouter } from "react-router";
import adminStore from './isAdmin';



const Login = (props) => {
 

  const { history } = props;
  const [state, setState] = useState({
    name: '',
    password: '',
    admins: '',
    errors: {
      name: '',
      password: '',
      admins: '',

    }
  });

  const handlerClick = () => {
    history.push('./AdminEnterPage');
  }





  async function IsValidAdminDetails(name, password) {
    try {
      console.log(name, password);
      const res = await fetch("http://localhost:3080/photo/admin/" + name + '/' + password, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "access-control-allow-origin": "*",
        },
      })

      if (res.status === 200)
        return false
      if (res.status === 404)
        return 'one detail is missing'
      const res2 = await res.text()


      return res2
    } catch (err) {
      alert(err)
      return true
    }

  }
  function onInputChange(field, event) {
    setState({ ...state, [field]: event.target.value });
    console.log(state);
  }

  async function validate(event) {
    const { name, password } = state;
    const errors = {};
    console.log(name, password)
    
    errors.admins = await IsValidAdminDetails(name, password)

    if (!errors.admins) {
      handlerClick();
      adminStore.enterAdminMode()
    }
    setState({ ...state, errors: errors });
    event.preventDefault();
  }


  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <p className="h5 text-center mb-4">SIGN IN</p>
          <div className="grey-text">
            <MDBInput label="Type admin name" icon="user" group type="text" validate error="wrong" value={state.name} onChange={(e) => onInputChange('name', e)}
              success="right" />
            <MDBInput label="Type your password" icon="lock" group type="password" validate value={state.password} onChange={(e) => onInputChange('password', e)} />
          </div>

          <br />
          {state.errors.admins && <div className="error">{state.errors.admins}</div>}
          <div className="text-center" onClick={validate}>
            <MDBBtn className="sendButton" type="submit">Login</MDBBtn>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};




export default withRouter(Login);


