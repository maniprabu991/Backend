var express = require("express");
const connectdb = require("./db");
var signinRouter = require("./routes/signin");
const cors = require("cors");

var app = express();
const port = 4000;
app.use(express.json());
app.use(cors({origin:"*"}))
connectdb();


app.get("/", (req, res) => {
    res.send("hello Mani");
});
app.use("/signin", signinRouter)

app.listen(port, () => {
    console.log(`Ex app listening on port ${port}`);
  });