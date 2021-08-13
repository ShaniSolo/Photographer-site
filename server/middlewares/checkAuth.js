const jwt = require('jsonwebtoken');

const checkAuth = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
       jwt.verify(token, "jwt_key");
        next();
    } catch (error) {
        res.status(401).json({
            message: "Auth faild"
        });

    }
}
module.exports = checkAuth;