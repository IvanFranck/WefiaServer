const express = require ("express");

const app = express();

app.use("/api/user",(req, res, next)=>{
    user = {
        nom: "ivan",
        prenom: "franck"
    }
    res.status(200).json(user);
    next();
});


module.exports = app;