import React from "react";
import '../App.css';
import './adminEnterPage.css';


const Enter = () => {
    return (
        <div className="adminOptions">

            <a href="/" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Home &nbsp;  &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; </a>
            <br />

            <a href="/addadmin" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true"> &nbsp; &nbsp;Add Admnistrator &nbsp; &nbsp;</a>
            <br />
            <a href="/OrderDetails" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;order details &nbsp; &nbsp; &nbsp; &nbsp; </a>
            <br />
            <a href="/administratorsdetails" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Administrators details</a>

        </div>
    );
};
export default Enter;

