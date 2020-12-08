import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// import mongoose from "mongoose";
// import express from "express";
// import bodyParser from "body-parser";
import './styles.css';

// const app = express();
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));
//
// mongoose.connect('mongodb://localhost:27017/dataDB', {useNewUrlParser: true, useUnifiedTopology: true});
//
// const User = mongoose.model('User', {
//   fname: String,
//   lName: String,
//   email: String,
//   password: String
// });
//
// const user = new User({
//   fname: "potato",
//   lName: "potata",
//   email: "potato@gmail.com",
//   password: "potato1234"
// });
//
// user.save();
//
// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to bezkoder application." });
// });
//
// app.listen(3000, function() {
//   console.log("Server started on port 3000");
// });

ReactDOM.render(<App />, document.getElementById("root"));
