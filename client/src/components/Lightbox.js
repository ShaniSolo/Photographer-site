import React from "react";
import { MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import "./Lightbox.css";

class LightboxPage extends React.Component {
    constructor(props) {
        console.log(props);
        super(props);
        this.state = {
            photoIndex: 0,
            isOpen: false,
            images: props.images
        }
       
    }

    

    renderImages = () => {
        let photoIndex2 = -1;
        const { images } = this.state;

        return images?.map(imageSrc => {
            photoIndex2++;
            const privateKey = photoIndex2;
            return (
                <MDBCol md="4" key={photoIndex2}>
                    <figure>
                        <img src={imageSrc} alt="Gallery" className="img-fluid" onClick={() =>
                            this.setState({ photoIndex: privateKey, isOpen: true })
                        }
                        />
                    </figure>
                </MDBCol>
            );
        })
        
    }

    render() {

        const { photoIndex2, isOpen2, images2 } = this.state;
        return (
            <div class="animated fadeInUp">
                <div className="fade-in-up">‏
                    <div className="mt-5">
                        <div className="mdb-lightbox">
                            <MDBRow>
                                {this.renderImages()}
                            </MDBRow>
                        </div>
                        {isOpen2 && (
                            <Lightbox
                                mainSrc={images2[photoIndex2].src}
                                nextSrc={images2[(photoIndex2 + 1) % images2.length].src}
                                prevSrc={images2[(photoIndex2 + images2.length - 1) % images2.length].src}
                                imageTitle={photoIndex2 + 1 + "/" + images2.length}
                                onCloseRequest={() => this.setState({ isOpen: false })}
                                onMovePrevRequest={() =>
                                    this.setState({
                                        photoIndex: (photoIndex2 + images2.length - 1) % images2.length
                                    })
                                }
                                onMoveNextRequest={() =>
                                    this.setState({
                                        photoIndex: (photoIndex2 + 1) % images2.length
                                    })
                                }
                            />
                        )}
                    </div>
                </div>
            </div>
        );
    }

}

export default LightboxPage;