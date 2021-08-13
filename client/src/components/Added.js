import React from "react";
import '../App.css';



const AddMessage = () => {

    return (<>
        {
            <div>
                <div className="thanx-message">

                    <h1 className="message">The New Details Added!</h1>
                    <br />
                    <div className="options">

                    <a href="/" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Home &nbsp;  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </a>
                        <br />
                        <a href="/administratorsdetails" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Administrators details</a>

                    </div>
                </div>
            </div>

        }</>

    )
}

export default AddMessage;