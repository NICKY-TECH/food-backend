const {join} = require("path");
const {Restaurant} = require(join(__dirname,"..","model","Restaurant.model"));

console.log("controllers");

const getAllRestaurants = async(req,res)=>{
console.log("get")
const restaurants = await Restaurant.find({});
console.log("Running getAll");
console.log(restaurants)
return res.status(200).json({
    success:true,
    message:"all restuaurants has been successfully retrieved",
    data:{restaurants},
    code:200
})



}

const getHighestRated = async(req,res)=>{
     const highestRated = await Restaurant.find({rating:{$gte:4}});
     return res.status(200).json({
        success:true,
        message:"Highly Rated Restaurants has been retrieved",
        data:{highestRated},
        code:200
     })

}

const getMostRated =async(req,res)=>{
    const mostRated = await Restaurant.find({total:{$gte:300}});
    return res.status(200).json({
        success:true,
        message:"Most rated restaurant successfully retrieved",
        data:{mostRated},
        code:200
    })
}

const getNewest = async(req,res)=>{
    const newest = await Restaurant.find({newest:true});
    return res.status(200).json({
        success:true,
        message:"Newly launched restaurants have been successfully retrieved",
        data:newest,
        code:200
    })
}

const getMostPopular = async(req,res)=>{
    const popular = await Restaurant.find({popularity:"high"});
    return res.status(200).json({
        success:true,
        message:"Most popular restaurants successfully retrieved",
        data:{popular},
        code:200
    })
}

const getByFood = async(req,res) =>{
    const {dish} =req.query;
    const foundRestaurants = await Restaurant.find({
        dish:{$in:[dish]}
    })
    return res.status(200).json({
        success:true,
        message:`All restaurants which have ${dish} on their menu has been successfully retrieved`,
        data:foundRestaurants,
        code:200
    })
}

module.exports={
    getAllRestaurants,
    getHighestRated,
    getMostRated,
    getNewest,
    getMostPopular,
    getByFood
}
