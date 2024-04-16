const {model,Schema} = require("mongoose");

const TagSchema = new Schema({
    tagName:String,
    tagLink:String
})

const Tag = model("Tag",TagSchema);

module.exports ={
    Tag
}