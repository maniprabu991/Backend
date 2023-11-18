const express = require("express");
const {CheckUser} = require("../controllers/login");
var router = express.Router();

router.get("/", async () => {});

router.post("/verify", async (req, res) => {
    try {
    const {name, email, password } = await req.body;
    console.log(name,password,email);
    const registerCredentials = await CheckUser(email);
    if(registerCredentials === false) {


    }else if (registerCredentials ===true) {
        res.status(200).send(true)
    }else if(registerCredentials === "Server Busy") {
        res.status(500).send("Server Busy");
    }
} catch(e){

}
});

module.exports = router;