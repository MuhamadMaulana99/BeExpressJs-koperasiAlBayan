const schemaUser  = require('./userScema.js');

module.exports = {
    addUser: (req, res, next)=>{
    const value = schemaUser.addUser.validate(req.body);
    if(value.error){
        res.json(value.error.details[0].message)
    }else{
        next();
    }
    }
}
