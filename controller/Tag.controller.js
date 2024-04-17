const {join} = require("path");
const {Tag} = require(join(__dirname,"..","model","Tag.model"));

const getTags = (async(req,res)=>{
    const tags = await Tag.find({});
return res.status(200).json({
    success:true,
    message:"Tags successfully retrieved",
    data:{tags},
    code:200
})
})


module.exports={
    getTags
}