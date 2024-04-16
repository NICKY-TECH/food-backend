const {join} = require("path");
const {getAllRestaurants,
    getHighestRated,
    getMostRated,
    getNewest,
    getMostPopular,
    getByFood} = require(join(__dirname,"..","controller","Restaurant.controller"));

const restaurantRoute = require("express").Router();
console.log('file called')

restaurantRoute.get("/",getAllRestaurants);
restaurantRoute.get("/highest-rated",getHighestRated);
restaurantRoute.get("/most-popular",getMostPopular);
restaurantRoute.get("/latest",getNewest);
restaurantRoute.get("/most-rated",getMostRated);
restaurantRoute.get("/dish",getByFood);


module.exports={
    restaurantRoute
}
