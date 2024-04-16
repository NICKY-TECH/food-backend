const {join} = require("path");

const Db = require(join(__dirname,".","config","db.js"))

// const DbSeeder = require(join(__dirname,".","seeder","seeder"))

const {restaurantRoute}= require(join(__dirname,".","router","restaurant.routes"))

const { tagRouter}  = require(join(__dirname,".","router","tag.routes"))

const express = require("express");

const compression =require("compression")

const app = express();

// calling the database function to launch db connection
Db();



// DbSeeder();

//routes initialization

app.use(express.json())

app.use(express.urlencoded({ extended: true }));

app.use(compression())

app.use("/restaurants",restaurantRoute);

app.use("/tags",tagRouter)

const PORT = process.env.PORT || 4000

app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`)
})



