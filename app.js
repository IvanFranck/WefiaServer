const express = require ("express");
const mongoose = require("mongoose");
const userRouter = require ("./Routes/user");

//set up database connection
mongoose.connect("mongodb://localhost:27017/pfe", {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("successfully connected to MongoDB BD !");
    })
    .catch(
        err =>{
            console.log("unable to connect to mongoDB BD !");
            console.error(err);
        }
    );

const app = express();

// parse body request in JSON
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());



app.use("/api/user", userRouter);


module.exports = app;