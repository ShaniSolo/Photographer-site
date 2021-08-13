const jwt = require('jsonwebtoken');


const checkAdminAuth = (req, res, next) =>{
    try {
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, "jwt_key");
            next();
        } 
     catch (error) {
        res.status(401).json({
            message: 'Not a manager'
        }) 

    }
    
}

module.exports = checkAdminAuth;
