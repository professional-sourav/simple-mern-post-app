const jwt = require('jsonwebtoken');

const isCrudAllowedOnPost = (req, res, next) => {

    if (req.user && (req.user.role === 'admin' || req.user.role === 'editor')) {
            next();
    } else {
        return res.status(403).json({'message': 'Forbidden! You can\'t perform this operation'});
    }
}

const CheckAuthToken = (req, res, next) => {

    const authorization = req.headers.authorization;

    if (!authorization) {
        return res.status(401).json({'message': 'Unauthorized access!'});
    }

    const token = authorization.split('Bearer ')[1];

    try {
        const payload = jwt.verify(token, process.env.AUTH_SECRET); 

        req.user = payload;
    
        next();
        
    } catch (error) {
        return res.status(403).json({'message': 'Unauthorized access!'});
    }
}

module.exports = {
    CheckAuthToken,
    isCrudAllowedOnPost
}
