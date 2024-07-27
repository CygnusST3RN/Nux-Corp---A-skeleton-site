const jwt = require('jsonwebtoken');
const User = require('../models/user-model');

const authMiddleware = async (req, res, next) => {

    const token = req.header("Authorization");

    if(!token){
        return res.status(401).json({message: "Unauthorized HTTP, token not provided"});
    }
    const jwtToken = token.replace("Bearer", "").trim();

    console.log("token from auth middleware ", jwtToken);  

    try {
        const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY);

        //this will give the payload data when we used jwt.sign in user model
        // console.log(isVerified);

        const userData = await User.findOne({email:isVerified.email}).select({password: 0 ,_id: 0});
        console.log(userData);
        req.user = userData;
        req.token = jwtToken;
        req.userId = userData._id;
        next();
    } catch (error) {
        console.log(`error occured while authorization : ${error}`);
    }
};

module.exports = authMiddleware;