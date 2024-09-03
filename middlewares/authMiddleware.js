const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
    const token = req.headers.token;
    const secret = "banana"

    if(token === secret) {
        next();
    } else {
        return res.status(401).send();
    }
}

module.exports = authMiddleware;