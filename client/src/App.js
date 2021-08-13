import React, { useEffect, useState } from "react";
import './App.css';
import Navbar from './components/Navigation'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import HomePageCarousel from './components/Home';
import Packages from './components/Packages';
import FormPage from './components/Contact';
import About from './components/About';
import Login from './components/Login';
import Message from './components/Thanx';
import Enter from './components/AdminEnterPage'
import Details from './components/OrderDetails'
import LightboxPage from './components/Lightbox'
import LoginPage from './components/AddAdmin'
import Admin from './components/AdministratorsDetails'
import AddMessage from './components/Added'
import { getAllPictures } from "./components/PhotoArray"


const packagesname = ["Select package", "Newborn", "Halake", "Bat Mitzva", "Children", "Product", "Other"]

function App() {
  const [keys, setKeys] = useState({ Children: [], Batmitzva: [], Newborn: [], Product: [], Halake: [] });
  
  useEffect(() => {
    async function fetchData(){
      let allPicturs = await getAllPictures();
      console.log(allPicturs)
      var dict = { Children: [], Batmitzva: [], Newborn: [], Product: [], Halake: [] };
      allPicturs.forEach(element => {
        dict[element["type"]] = element["images"];
      }, []);
      setKeys(dict);
    }
    fetchData()
  }, [])

  return (
   
    keys["Children"].length !== 0?
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePageCarousel />
        </Route>
        <Route path="/About">
          <About />
        </Route>
        <Route path="/Packages">
          <Packages />
        </Route>
        <Route path="/Contact">
          <FormPage packages={packagesname} />
        </Route>
        <Route path="/Admin">
          <Login/>
        </Route>
        <Route path="/Thanx">
          <Message />
        </Route>
        <Route path="/login">
          <Enter />
        </Route>
        <Route path="/AdminEnterPage">
          <Enter />
        </Route>
        <Route path="/OrderDetails">
          <Details />
        </Route>
        <Route path="/gallery/product">
          <LightboxPage images={keys["Product"]} />
        </Route>
        <Route path="/gallery/children">
          <LightboxPage images={keys["Cildren"]} />
        </Route>
        <Route path="/gallery/batmitzva">
          <LightboxPage images={keys["Batmitzva"]} />
        </Route>
        <Route path="/gallery/halake">
          <LightboxPage images={keys["Halake"]} />
        </Route>
        <Route path="/gallery/newborn">
          <LightboxPage images={keys["Newborn"]} />
        </Route>
        <Route path="/addadmin">
          <LoginPage />
        </Route>
        <Route path="/added">
          <AddMessage />
        </Route>
        <Route path="/administratorsdetails">
          <Admin />
        </Route>
      </Switch>
    </Router>
    : <div></div>
  )

}

export default App;
