// require("dotenv").config();   // Read environment variables from .env file
const { response } = require("express");
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5163;

express()
  .use(express.static(path.join(__dirname, "public")))
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .use('/images', express.static("images"))
  .use('/css', express.static("css"))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  
  .get("/", async(req, res) => {
    var pic = "/images/mask.png";
    var css = "/css/css.css";
    res.render('pages/index', {pic: pic, css: css})
  })

  .get("/information", async(req, res) => {
    var css = "/css/css.css";
    res.render('pages/information', {css: css})
  })

  .get("/commands", async(req, res) => {
    var css = "/css/css.css";
    res.render('pages/commands', {css: css})
  })

  .get("/download", async(req, res) => {
    var css = "/css/css.css";
    res.render('pages/download', {css: css})
  })

  .get("/suggest", async(req, res) => {
    var css = "/css/css.css";
    res.render('pages/suggest', {css: css})
  })

  .get("/demo", async(req, res) => {
    var css = "/css/css.css";
    res.render('pages/demo', {css: css})
  })

  .listen(PORT, () => console.log(`Listening on ${PORT}`));