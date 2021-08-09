const jwt = require('jsonwebtoken');
const User = require('../model/userSchema');

const Authenticate =  async (req,res,next)=>{
    try {
       console.log(req.cookies);
       const token = req.cookies.jwtoken_cookie;
       console.log("auth token : "+ token);
       const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
       console.log("verifyToken: "+ JSON.stringify(verifyToken) );
       const rootUser = await User.findOne({_id:verifyToken._id, "tokens.token": token});

       if(!rootUser){
           throw new Error('User not found');
       }

       req.token = token;
       req.rootUser = rootUser;
       req.userID = rootUser._id;

       next();
        
    } catch (error) {
        res.status(401).send("Unauthorized user");
        console.log(error);
    }
}

module.exports = Authenticate;