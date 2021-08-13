

function isValidEmail(email) {
    if (email.length === 0) {
        return "This field is required";
    }
    const emailre = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;
    if (!email.match(emailre))
        return "Invalid email address";
    return;

}

function isValidPhonenumber(phonenumber) {
    if (phonenumber.length === 0) {
        return "This field is required";
    }
    if (phonenumber.length > 10 || phonenumber.length < 9) {
        return "The phone number length is incorrect";
    }
    const num = /^0?(([23489]{1}\d{7})|[5]{1}\d{8})$/
    if (!phonenumber.match(num))
        return "Invalid phone number";
    return;
}

function isValidNewPassword(password) {
    if (password.length === 0) {
        return "This field is required";
    }
    var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}/;
    if (!password.match(passw))
        return "The password must contain at least one lowercase letter, one uppercase letter and one number, 6-12 characters long";
    return;

}

function isValidName(username) {
    if (username.length === 0) {
        return "This field is required";
    }
    if (username.length < 2)
        return "Name length is invalid";
    if (typeof username !== "undefined") {
        if (username.match("^[A-Za-z\u0590-\u05FF ]+$")) {
            return null;
        }
        return "Non-standard name";
    }
    return "Non-standard name";
}

function isValidSecondPassword(password, validatepassword) {
    if (validatepassword.length === 0) {
        return "This field is required";
    }
    if (password !== validatepassword) {
        return "Password authentication is incorrect"
    }
    return;
}






export {
    isValidName,
    isValidPhonenumber,
    isValidEmail,
    isValidNewPassword,
    isValidSecondPassword,
}