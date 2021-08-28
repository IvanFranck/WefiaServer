const express = require ("express");
const mongoose = require("mongoose");

const userRouter = require ("./Routes/user");
const serviceRouter = require ("./Routes/service");
const serviceProviderRouter = require("./Routes/serviceProvider");

//set up database connection
mongoose.connect("mongodb+srv://IvanFranck:SUP'PTICgroupe7@cluster0.bsx7r.mongodb.net/wefia?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
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

app.get("/", (req,res)=>{
    res.send("hello !")
})

// parse body request in JSON
app.use(express.urlencoded({
    extended: false
}));
app.use(express.json());



app.use("/api/user", userRouter);
app.use("/api/service", serviceRouter);
app.use("/api/servieProvider", serviceProviderRouter);


module.exports = app;