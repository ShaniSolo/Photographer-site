import React, { useEffect, useState } from "react";
import '../App.css';
import './details.css';
import { MDBTable, MDBTableBody, MDBTableFoot, MDBTableHead } from 'mdbreact';

const Details = () => {
    const [admins, setAdmins] = useState();
    useEffect(() => {
        fetch("http://localhost:3080/photo/admin",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("token")),
            },
            
        }
        )
            .then(res => res.json())
            .then(res => {setAdmins(res) })
            .catch(err => console.error(err))
    })

    return (
        <div>
            <h1 className="table-title">ADMINISTRATORS DETAILS</h1>
            <br />
            <div className="tbl">
                <MDBTable class="table" autoWidth striped scrollY maxHeight="40%" >
                    <MDBTableHead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">password</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody>
                        {admins?.map(item =>
                            <tr>
                                <th scope="row" >{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.password}</td>
                            </tr>
                        )}
                    </MDBTableBody>

                    <MDBTableFoot>

                    </MDBTableFoot>
                </MDBTable>
                <div className="home-button">
                    <br />
                    <div id="home-button" >
                        <a href="/" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Home &nbsp;  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </a>

                    </div>
                </div>
            </div>
        </div>
    );
};
export default Details;


