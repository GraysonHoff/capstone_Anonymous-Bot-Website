// require("dotenv").config();   // Read environment variables from .env file
const { response } = require("express");
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5163;

express()
  .use(express.static(path.join(__dirname, "public")))
  .use(express.json())
  .use(express.urlencoded({ extended: true }))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", async(req, res) => {
    res.render('pages/index')
  })
  .get("/information", async(req, res) => {
    res.render('pages/information')
  })
  .get("/instructions", async(req, res) => {
    res.render('pages/instructions')
  })
  .get("/download", async(req, res) => {
    res.render('pages/download')
  })
  .get("/suggest", async(req, res) => {
    res.render('pages/suggest')
  })
  .get("/more", async(req, res) => {
    res.render('pages/more')
  })
  .listen(PORT, () => console.log(`Listening on ${PORT}`));