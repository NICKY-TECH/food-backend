const {model,Schema} = require("mongoose");

const RestaurantSchema = new Schema({
    name:String,
    dish:[String],
    popularity:String,
    rating:Number,
    newest:Boolean,
    total:Number
})

const Restaurant= model("Restaurant",RestaurantSchema);

module.exports ={
    Restaurant
}


// {
//     "name": "Doughnut Haven",
//     "location": "567 Cedar Road",
//     "dish": ["doughnuts", "coffee"],
//     "popularity": "medium",
//     "rating": 4.1,
//     "newest": false
//   }
