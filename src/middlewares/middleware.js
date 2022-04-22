const { JsonWebTokenError } = require("jsonwebtoken");

const middleware= (req, res, next)=>{
    let token = req.headers["x-Auth-token"] || rq.headers["x-auth-token"]
    if(!token){
        return res.send({status: false, mgs: "token is invalid"})
    }
    try{jwt.verify(token, "functionup-uranium");}
    catch(err) {return res.send({status: false, msg: "token is invalid"});}
    let decodedtoken = jwt.verify(token, "functionup-uranium");
    let userloged= decodedtoken.userId
    let userId = req.params.userId;
    if(userloged !==userId){
        return res.send({status: false, data: "user ID does not match"})
    }
    next();
}

module.exports=middleware
