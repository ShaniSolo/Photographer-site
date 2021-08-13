import React, { useEffect, useState } from "react";
import '../App.css';
import './details.css';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';

const Admin = () => { 
    const [ordering, setOrdering] = useState();
    useEffect(() => {
        fetch("http://localhost:3080/photo/order",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                 'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem("token")),


            },
            
        }
        )
            .then(res => res.json())
            .then(res => {setOrdering(res) })
            .catch(err => console.error(err))
    })
    return (
        <div>
            <h1 className="table-title">ORDERING DETAILS</h1>
            <br />
            <div className="tbl">
                <div className="table-details">
                <MDBTable class="table" autoWidth striped scrollY maxHeight="40%">
                    <MDBTableHead>
                        <tr >
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">Package</th>
                            <th scope="col">Package size</th>
                            <th scope="col">Message</th>
                        </tr>
                    </MDBTableHead>
                    <MDBTableBody >
                        {ordering?.map(item =>
                            <tr>
                                <th scope="row">{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.phone}</td>
                                <td>{item.package}</td>
                                <td>{item.size}</td>
                                <td>{item.message}</td>

                            </tr>
                        )}
                    </MDBTableBody>

                </MDBTable>
                </div>
                <div className="home-button">
                    <br />
                    <div id="home-button">
                        <a href="/" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Home &nbsp;  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </a>
                    </div>
                </div>
            </div>

        </div>
    );
};
export default Admin;