const {join} = require("path");

const {getTags} = require(join(__dirname,"..","controller","Tag.controller"));

const tagRouter = require("express").Router();

tagRouter.get("/",getTags);

module.exports={
    tagRouter
}