import React from "react";
import '../App.css';
import './thanx.css';




const Message = () => {

    return (<>
        {
            <div className="thanx-message">
                <h1 className="message">Thank you for contacting us!</h1>
                <br />
                <h2 className="message">we'll be in touch</h2><br /><br />
                <a href="/" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Home &nbsp;  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </a>
            </div>

        }</>

    )
}

export default Message;