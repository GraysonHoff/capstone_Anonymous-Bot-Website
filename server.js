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
    const args = "hello there"
    res.render('index', args)
  })
  
  .listen(PORT, () => console.log(`Listening on ${PORT}`));