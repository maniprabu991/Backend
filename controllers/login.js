const User = require("../models/User");

async function CheckUser(email){
    try{
        const user = User.findOne({email:email});
        if (user) {
            return true;
        }
    }catch(e) {
        return "Server Busy";
    }
}

module.exports = {CheckUser}