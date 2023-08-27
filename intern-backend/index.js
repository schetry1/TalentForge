const cookieSession = require("cookie-session");
const express = require("express");
const passport = require("passport");
const cors = require("cors");
const app = express();
const passportSetup = require("./config/passport-setup");
const authRoute= require("./routes/auth-route");
const mongoose= require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
require('dotenv/config');
const cookieParser = require('cookie-parser');
const jobsRoute=require('./routes/jobscart-route');
const companyRoute=require('./routes/comp-route');
const studentRoute=require('./routes/student-route');

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

mongoose.Promise=global.Promise;
mongoose.connect(
    process.env.DB_CONNECTION,()=>{
    console.log("database coonected");
})

app.use(cookieSession(
    {
        name: "sidcookie",
        keys: ["lama"],
        maxAge: 24 * 60 * 60 * 100
    }
));


app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser('secret'));

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET, POST, PUT,DELETE",
    credentials: true,
}))

app.use("/student",studentRoute)
app.use("/auth",authRoute);
app.use("/jobs",jobsRoute);
app.use('/company',companyRoute);




app.listen("5000",()=>{
    console.log("server started on port 5000")
})