import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../App.css';
import './packages.css';


const Packages = () => {

    const [packages, setPackages] = useState();
    useEffect(() => {   
        fetch("http://localhost:3080/photo/packages")
            .then(res => res.json())
            .then(res => {setPackages(res) })
            .catch(err => console.error(err))
    })
    const packagesname = ["Select package", "Newborn", "Halake", "Bat Mitzva", "Children", "Product", "Other"]

    return (<div style={{'padding-top':'100px'}}>
        {
            packages?.map(img => <Card style={{width: '40rem'}}>
                <div className="cards">
                    <Card.Img variant="top" src={img.src}/>

                    <Card.Body >
                        <Card.Title>{img.title}</Card.Title>
                        <Card.Text>{img.text}</Card.Text>

                        <Link className="link-package  btn btn-secondary btn-lg active" to={{
                            pathname: "/contact",
                            state: {
                                selectedPackage: img.name,
                                packages: packagesname
                            }
                        }} >Order me!</Link>
                        <Link className="link-package  btn btn-secondary btn-lg active" to={img.link} >Go to Gallery</Link>
                    </Card.Body >
                </div>
            </Card >
            )
        } </div>




    )

}

export default Packages;
