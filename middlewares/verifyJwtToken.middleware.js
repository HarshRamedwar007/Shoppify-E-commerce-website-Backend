import jwt from "jsonwebtoken";

function verifyJwtToken(req, res, next) {
    const authorization = req.headers.authorization;

    if (!authorization) {
        return res.status(400).json({ message: "JWT Token not provided !" });
    }

    const token = req.headers.authorization.split(" ")[2];

    jwt.verify(token, 'Harsh@1', (err, decoded) => {
        if (err) {
            return res.status(400).json({ message: "Invalid JWT token." });
        }
        next();
    });
}

export default verifyJwtToken;