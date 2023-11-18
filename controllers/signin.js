const User = require("../models/User");
const {sendMail} = require("./SendMail");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");

async function InsertVerifyUser(name, email, password){
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

    }catch (e){


    }
}


function generateToken(email){
    const token=jwt.sign(email, "mani");
}