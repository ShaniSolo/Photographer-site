import React, { useEffect, useState } from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView } from "mdbreact";
import { getAllPictures } from "./PhotoArray"
import '../App.css';
import './home.css';




const CarouselPage = (props) => {
  const [keys, setKeys] = useState([]);

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
    keys.length !== 0 ?
    
      <div className="carousel-div crouselPage">
        <MDBCarousel
          activeItem={1}
          length={5}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner >
            <MDBCarouselItem itemId="1">
              <MDBView>
                <img
                  className="softTry d-block w-100"
                  src={keys["Children"][5]}
                  alt="First slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="2">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={keys["Product"][3]}
                  alt="Second slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="3">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={keys["Newborn"][11]}
                  alt="Third slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="4">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={keys["Halake"][2]}
                  alt="Fourth slide"
                />
              </MDBView>
            </MDBCarouselItem>
            <MDBCarouselItem itemId="5">
              <MDBView>
                <img
                  className="d-block w-100"
                  src={keys["Batmitzva"][4]}
                  alt="Fifth slide"
                />
              </MDBView>
            </MDBCarouselItem>
          </MDBCarouselInner>
        </MDBCarousel>


      </div>
      : <div></div>

  );

}

export default CarouselPage;