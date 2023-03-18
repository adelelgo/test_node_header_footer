// express framework

// Main Functions (CRUD Operations)
//===============
// create => post
// Read => Get
// update => patch
// delete => delete

// local host
// D // wwww.amazon.com
// localhost : port 3000  5000
////////////////////////////////////////////

// nodemon
//  npm i node nodemon -g

const exp = require("constants");
const { response } = require("express");
const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

// Call Sataic Html Pages
const path = require("path");
const public_Dir = path.join(__dirname, "../public");
app.use(express.static(public_Dir));

// app.get("/", (req, res) => {
//   res.send("Hello Adel");
// });

app.get("/about", (req, res) => {
  res.send("about page");
});

// app.get("/team", (req, res) => {
//   res.send("<h1>aaaaaa</h1>");
// });

app.get("/data1", (req, res) => {
  res.send({ name: "Adel", age: 26, city: "cairo" });
});

//////////////////////
// Static
// Path

// modules :
// core modules ( fs , path )
// NPM Module

///////////////////////////////////////

// Dinamic Pages
//==============
// hbs
// npm install hbs

app.set("view engine", "hbs");
const viewsDirectory = path.join(__dirname, "../temp1/views");
app.set("views", viewsDirectory);
///////////////////////////
var hbs = require("hbs");
const partialsPath = path.join(__dirname, "../temp1/partials");
hbs.registerPartials(partialsPath);
////////////////////

app.get("/", (req, res) => {
  res.render("index", {
    title: "home",
    desc: "this Home",
  });
});

app.get("/service", (req, res) => {
  res.render("service", {
    title: "service",
    name: "Adel11",
    city: "Cairo",
    age: 40,
    img1: "img/player1.jpg",
  });
});

app.get("/team", (req, res) => {
  res.render("team", {
    title: "team",
    name: "Adel11",
    city: "Cairo",
    age: 40,
    img1: "img/player1.jpg",
  });
});

app.listen(port, () => {
  console.log(`You ${port}`);
});

// Task
// 5 Pages
// Header Footer
