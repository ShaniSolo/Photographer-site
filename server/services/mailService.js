var nodemailer = require('nodemailer');

exports.email = function(userMail, userName, package, size){
    
    var transporter = nodemailer.createTransport({
        service:'gmail.com',
        auth: {
            user:'coursebackend@gmail.com',
            pass:'tulips66'
        }
    });

    var mailOptions = {
        from:'coursebackend@gmail.com',
        to: userMail,
        subject: "Hi " + userName + ", regarding your request to Michal",
        text: "Hi " + userName +'! Your request for ' + package + ' package ' + size + ' has been registered. I "ll contact you.  Wishing you a wonderful day, Michal'
    }

    transporter.sendMail(mailOptions, function(error, info){
        if(error) {
            console.log(error);
        } else {
            console.log('sent email')
        }
    })
}