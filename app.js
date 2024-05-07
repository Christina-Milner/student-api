
const express = require('express');
const app = express();
require('dotenv').config({path: './config/.env'}) 
const UserRoute = require("./routes/User");
const StudentRoute = require("./routes/Student");
const CONNECTDB = require("./config/config");
const PORT  = process.env.PORT || 8000 ;

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Database Connection
CONNECTDB();

//Routes
app.use("/api/user", UserRoute);
app.use("/api/student", StudentRoute);

//listen to the port
app.listen(PORT, ()=> {
console.log(`listening to port ${PORT}`);
})