import { React, useState } from 'react'
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBIcon, MDBInput } from 'mdbreact';
import '../App.css';
import { useLocation, withRouter } from "react-router";
import { isValidName, isValidPhonenumber, isValidEmail } from './Validations';
import './contact.css';






const FormPage = (props) => {
    const { history } = props;

    const location = useLocation();
    const { packages, selectedPackage } = location.state ? location.state : { packages: props.packages, selectedPackage: '' };
    const sizeOptions = ['Select size', 'regular: 10 pictures', 'special: 20 pictures', 'pampering: 10 pictures + digital album']

    const [state, setState] = useState({
        name: '',
        phone: '',
        email: '',
        package: '',
        message: '',
        errors: {
            name: '',
            phone: '',
            email: '',
            package: '',
            message: '',
        }
    });

    const handlerClick = () => {
        history.push('./thanx');
    }
    function onInputChange(field, event) {
        setState({ ...state, [field]: event.target.value });
    }
    
    function validate(event) {

        const { phone, email, name} = state;
        const errors = {};
        errors.phone = isValidPhonenumber(phone);
        errors.email = isValidEmail(email);
        errors.name = isValidName(name);

        if (!errors.phone && !errors.email && !errors.name) {
            handlerClick();
            send(name, email, phone, state.package, state.size, state.message)
        }


        setState({ ...state, errors: errors });
        event.preventDefault();

    }


    
function send(name, email, phone, pack, size, message) {
        fetch("http://localhost:3080/photo/respons", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                "name": name,
                "email": email,
                "phone": phone,
                "package": pack,
                "size": size,
                "message": message,
  
            }),
        }).then(function (res) {
            localStorage.setItem("token", res.headers.Token)
        });
  }


    return (
        <MDBContainer  >
            <MDBRow>
                <MDBCol id="page" md="6">
                    <h1 className="h5 text-center mb-4">CONTACT US</h1>

                    <form id="divTable" class="InsideContent" >
                        <div className="grey-text">
                            <MDBInput label=" Your name" icon="user" group type="text" validate error="wrong" value={state.name} onChange={(e) => onInputChange('name', e)}
                                success="right" />
                            {state.errors.name && <div id="1" className="error">{state.errors.name}</div>}

                            <MDBInput label="Your email" icon="envelope" group type="email" validate error="wrong" value={state.email} onChange={(e) => onInputChange('email', e)}
                                success="right" />
                            {state.errors.email && <div id="2" className="error">{state.errors.email}</div>}

                            <MDBInput label="Your phone" icon="phone-alt" group type="phone" validate error="wrong" value={state.phone} onChange={(e) => onInputChange('phone', e)} success="right" />
                            {state.errors.phone && <div id="3" className="error">{state.errors.phone}</div>}

                            < div class="select-wrapper mdb-select height-5" icon="images"><span class="caret" ><MDBIcon className="imagesicon" icon="images" size="lg" /></span>
                                <select label="Your choise" class="mdb-select height-5 initialized" className="select-options" onChange={(e) => onInputChange('package', e)} >
                                    {packages && packages.map((pack, index) => <option selected={selectedPackage === pack ? true : false} value={pack} label={pack}></option>)}

                                </select>
                            </div>
                            < div class="select-wrapper mdb-select height-5" icon="images"><span class="caret" ><MDBIcon className="imagesicon" icon="expand" size="lg" /></span>
                                <select class="mdb-select height-5 initialized" className="select-options" onChange={(e) => onInputChange('size', e)} >
                                    {sizeOptions && sizeOptions.map((pack, index) => <option selected={selectedPackage === pack ? true : false} value={pack} label={pack}></option>)}

                                </select>
                            </div>
                            <MDBInput type="textarea" rows="2" label="Your message" icon="pencil-alt" onChange={(e) => onInputChange('message', e)} />
                        </div>

                        <div className="text-center">
                            <MDBBtn className="sendButton" type="submit" onClick={validate} >
                                send
                                <MDBIcon far icon="paper-plane" className="ml-1" />
                            </MDBBtn>
                        </div>
                    </form>
                    <form id="divMessage" class="InsideContent">
                        {/* eslint-disable-next-line */}
                        <a className="textdetails name">Michal Soloveitchik</a>
                        <br />
                         {/* eslint-disable-next-line */}
                        <a className="textdetails">michal.photo100@gmail.com</a>
                        <br />
                         {/* eslint-disable-next-line */}
                        <a className="textdetails">0583231859</a>
                        <br />
                         {/* eslint-disable-next-line */}
                        <a className="textdetails">+972583231859</a>
                    </form>
                </MDBCol>
            </MDBRow >
        </MDBContainer >
    );



};

export default withRouter(FormPage);






