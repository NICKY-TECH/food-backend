const {join} = require("path");
const {Restaurant} = require(join(__dirname,"..","model","Restaurant.model"));
const {Tag} = require(join(__dirname,"..","model","Tag.model"))

const DbSeeder = (async()=>{
  console.log("running seeder")
   await Restaurant.insertMany(
    [
      {
        "name": "Delicious Palace",
        "dish": ["rice", "chicken", "vegetable", "ice cream"],
        "popularity": "high",
        "rating": 4.5,
        "total": 200,
        "newest": false
      },
      {
        "name": "Taste of Nigeria",
        "dish": ["pounded yam", "goat meat", "soup bowl"],
        "popularity": "medium",
        "rating": 4.0,
        "total": 150,
        "newest": true
      },
      {
        "name": "Quick Bites",
        "dish": ["fast food", "burger", "snacks", "smoothies"],
        "popularity": "low",
        "rating": 3.2,
        "total": 80,
        "newest": false
      },
      {
        "name": "Healthy Haven",
        "dish": ["salad", "juice", "grills"],
        "popularity": "high",
        "rating": 4.8,
        "total": 300,
        "newest": true
      },
      {
        "name": "Spice of India",
        "dish": ["pounded yam", "chicken", "vegetable", "juice"],
        "popularity": "medium",
        "rating": 3.9,
        "total": 180,
        "newest": false
      },
      {
        "name": "Italian Flavors",
        "dish": ["spaghetti", "goat meat", "soup bowl"],
        "popularity": "low",
        "rating": 3.0,
        "total": 90,
        "newest": true
      },
      {
        "name": "Burger Junction",
        "dish": ["fast food", "burger", "snacks", "smoothies"],
        "popularity": "high",
        "rating": 4.2,
        "total": 220,
        "newest": false
      },
      {
        "name": "Green Garden",
        "dish": ["salad", "juice", "grills"],
        "popularity": "high",
        "rating": 4.6,
        "total": 280,
        "newest": true
      },
      {
        "name": "Rice & Spice",
        "dish": ["rice", "chicken", "ice cream"],
        "popularity": "medium",
        "rating": 4.1,
        "total": 130,
        "newest": false
      },
      {
        "name": "African Delight",
        "dish": ["pounded yam", "goat meat", "soup bowl"],
        "popularity": "low",
        "rating": 3.5,
        "total": 100,
        "newest": true
      },
      {
        "name": "Juicy Burgers",
        "dish": ["fast food", "burger", "snacks"],
        "popularity": "high",
        "rating": 4.4,
        "total": 240,
        "newest": false
      },
      {
        "name": "Fresh & Healthy",
        "dish": ["salad", "juice", "grills"],
        "popularity": "high",
        "rating": 4.9,
        "total": 320,
        "newest": true
      },
      {
        "name": "Tasty Corner",
        "dish": ["rice", "chicken", "vegetable", "ice cream"],
        "popularity": "low",
        "rating": 3.7,
        "total": 170,
        "newest": false
      },
      {
        "name": "Yummy Treats",
        "dish": ["pounded yam", "goat meat", "soup bowl"],
        "popularity": "medium",
        "rating": 4.3,
        "total": 160,
        "newest": true
      },
      {
        "name": "Sizzling Spices",
        "dish": ["fast food", "shawarma", "snacks", "smoothies"],
        "popularity": "high",
        "rating": 4.7,
        "total": 260,
        "newest": false
      },
      {
        "name": "Fresh & Flavorful",
        "dish": ["salad", "juice", "grills"],
        "popularity": "high",
        "rating": 4.7,
        "total": 320,
        "newest": true
      },
      {
        "name": "Rice Delight",
        "dish": ["rice", "chicken", "vegetable", "ice cream"],
        "popularity": "medium",
        "rating": 4.2,
        "total": 150,
        "newest": false
      },
      {
        "name": "Spicy Delights",
        "dish": ["pounded yam", "goat meat", "soup bowl"],
        "popularity": "low",
        "rating": 3.6,
        "total": 120,
        "newest": true
      },
      {
        "name": "Burger Bliss",
        "dish": ["fast food", "burger", "snacks"],
        "popularity": "high",
        "rating": 4.5,
        "total": 200,
        "newest": false
      },
      {
        "name": "Fresh & Tasty",
        "dish": ["salad", "juice", "grills"],
        "popularity": "high",
        "rating": 4.8,
        "total": 350,
        "newest": true
      },
      {
        "name": "Rice & More",
        "dish": ["rice", "chicken", "vegetable", "ice cream"],
        "popularity": "low",
        "rating": 3.9,
        "total": 180,
        "newest": false
      },
      {
        "name": "Nigerian Cuisine",
        "dish": ["pounded yam", "goat meat", "soup bowl"],
        "popularity": "medium",
        "rating": 4.1,
        "total": 130,
        "newest": true
      },
      {
        "name": "Burger King",
        "dish": ["fast food", "burger", "snacks"],
        "popularity": "high",
        "rating": 4.6,
        "total": 220,
        "newest": false
      },
      {
        "name": "Fresh & Juicy",
        "dish": ["salad", "juice", "grills"],
        "popularity": "high",
        "rating": 4.9,
        "total": 380,
        "newest": true
      },
      {
        "name": "Spaghetti House",
        "dish": ["spaghetti", "goat meat", "soup bowl"],
        "popularity": "low",
        "rating": 3.8,
        "total": 140,
        "newest": true
      },
      {
        "name": "Shawarma Delight",
        "dish": ["fast food", "shawarma", "snacks", "smoothies"],
        "popularity": "high",
        "rating": 4.4,
        "total": 280,
        "newest": false
      },
      {
        "name": "Healthy Bites",
        "dish": ["salad", "juice", "grills"],
        "popularity": "high",
        "rating": 4.7,
        "total": 400,
        "newest": true
      },
      {
        "name": "Rice & Chicken Paradise",
        "dish": ["rice", "chicken", "vegetable", "ice cream"],
        "popularity": "medium",
        "rating": 4.3,
        "total": 160,
        "newest": false
      },
      {
        "name": "Yam & Goat Specials",
        "dish": ["pounded yam", "goat meat", "soup bowl"],
        "popularity": "low",
        "rating": 3.7,
        "total": 110,
        "newest": true
      },
      {
        "name": "Burger Spot",
        "dish": ["fast food", "burger", "snacks"],
        "popularity": "high",
        "rating": 4.5,
        "total": 240,
        "newest": false
      },
      {
        "name": "Fresh & Natural",
        "dish": ["salad", "juice", "grills"],
        "popularity": "high",
        "rating": 4.8,
        "total": 420,
        "newest": true
      },
      {
        "name": "Rice & More Delights",
        "dish": ["rice", "chicken", "vegetable", "ice cream"],
        "popularity": "low",
        "rating": 4.0,
        "total": 190,
        "newest": false
      },
      {
        "name": "African Kitchen",
        "dish": ["pounded yam", "goat meat", "soup bowl"],
        "popularity": "medium",
        "rating": 4.2,
        "total": 140,
        "newest": true
      },
      {
        "name": "Burger House",
        "dish": ["fast food", "burger", "snacks"],
        "popularity": "high",
        "rating": 4.7,
        "total": 260,
        "newest": false
      },
      {
        "name": "Fresh & Fit",
        "dish": ["salad", "juice", "grills"],
        "popularity": "high",
        "rating": 4.9,
        "total": 440,
        "newest": true
      },
      {
        "name": "Pasta Palace",
        "dish": ["spaghetti", "goat meat", "soup bowl"],
        "popularity": "low",
        "rating": 3.6,
        "total": 120,
        "newest": true
      },
      {
        "name": "Shawarma Spot",
        "dish": ["fast food", "shawarma", "snacks", "smoothies"],
        "popularity": "high",
        "rating": 4.3,
        "total": 300,
        "newest": false
      },
      {
        "name": "Fresh & Crisp",
        "dish": ["salad", "juice", "grills"],
        "popularity": "high",
        "rating": 4.7,
        "total": 480,
        "newest": true
      },
      {
        "name": "Rice & Chicken Delight",
        "dish": ["rice", "chicken", "vegetable", "ice cream"],
        "popularity": "medium",
        "rating": 4.1,
        "total": 170,
        "newest": false
      },
      {
        "name": "Yam & Soup Hub",
        "dish": ["pounded yam", "goat meat", "soup bowl"],
        "popularity": "low",
        "rating": 3.5,
        "total": 130,
        "newest": true
      },
      {
        "name": "Burger Stop",
        "dish": ["fast food", "burger", "snacks"],
        "popularity": "high",
        "rating": 4.6,
        "total": 280,
        "newest": false
      },
      {
        "name": "Fresh & Savory",
        "dish": ["salad", "juice", "grills"],
        "popularity": "high",
        "rating": 4.8,
        "total": 500,
        "newest": true
      },
      {
        "name": "Rice & Chicken Paradise",
        "dish": ["rice", "chicken", "vegetable", "ice cream"],
        "popularity": "low",
        "rating": 3.9,
        "total": 180,
        "newest": false
      },
      {
        "name": "Yam & Meat Treats",
        "dish": ["pounded yam", "goat meat", "soup bowl"],
        "popularity": "medium",
        "rating": 4.0,
        "total": 140,
        "newest": true
      },
      {
        "name": "Burger Deluxe",
        "dish": ["fast food", "burger", "snacks"],
        "popularity": "high",
        "rating": 4.5,
        "total": 300,
        "newest": false
      },
      {
        "name": "Fresh & Satisfying",
        "dish": ["salad", "juice", "grills"],
        "popularity": "high",
        "rating": 4.9,
        "total": 550,
        "newest": true
      },
      {
        "name": "Pasta Paradise",
        "dish": ["spaghetti", "goat meat", "soup bowl"],
        "popularity": "low",
        "rating": 3.7,
        "total": 150,
        "newest": true
      },
      {
        "name": "Shawarma Haven",
        "dish": ["fast food", "shawarma", "snacks", "smoothies"],
        "popularity": "high",
        "rating": 4.2,
        "total": 320,
        "newest": false
      },
      {
        "name": "Fresh & Wholesome",
        "dish": ["salad", "juice", "grills"],
        "popularity": "high",
        "rating": 4.6,
        "total": 600,
        "newest": true
      },
      {
        "name": "Rice & Delight",
        "dish": ["rice", "chicken", "vegetable", "ice cream"],
        "popularity": "medium",
        "rating": 4.4,
        "total": 190,
        "newest": false
      },
      {
        "name": "Yam & Meat Delights",
        "dish": ["pounded yam", "goat meat", "soup bowl"],
        "popularity": "low",
        "rating": 3.8,
        "total": 150,
        "newest": true
      },
      {
        "name": "Burger Express",
        "dish": ["fast food", "burger", "snacks"],
        "popularity": "high",
        "rating": 4.7,
        "total": 320,
        "newest": false
      },
      {
        "name": "Fresh & Zesty",
        "dish": ["salad", "juice", "grills"],
        "popularity": "high",
        "rating": 4.9,
        "total": 650,
        "newest": true
      },
      {
        "name": "Rice & More",
        "dish": ["rice", "chicken", "vegetable", "ice cream"],
        "popularity": "low",
        "rating": 4.3,
        "total": 200,
        "newest": false
      },
      {
        "name": "Yam & Meat Spot",
        "dish": ["pounded yam", "goat meat", "soup bowl"],
        "popularity": "medium",
        "rating": 4.2,
        "total": 160,
        "newest": true
      },
      {
        "name": "Burger World",
        "dish": ["fast food", "burger", "snacks"],
        "popularity": "high",
        "rating": 4.8,
        "total": 340,
        "newest": false
      },
      {
        "name": "Fresh & Vibrant",
        "dish": ["salad", "juice", "grills"],
        "popularity": "high",
        "rating": 5.0,
        "total": 700,
        "newest": true
      },
      {
        "name": "Rice & Spice Palace",
        "dish": ["rice", "chicken", "vegetable", "ice cream"],
        "popularity": "medium",
        "rating": 4.5,
        "total": 230,
        "newest": false
      },
      {
        "name": "Yam & Soup Delight",
        "dish": ["pounded yam", "goat meat", "soup bowl"],
        "popularity": "low",
        "rating": 4.0,
        "total": 170,
        "newest": true
      },
      {
        "name": "Burger Box",
        "dish": ["fast food", "burger", "snacks"],
        "popularity": "high",
        "rating": 4.9,
        "total": 360,
        "newest": false
      },
      {
        "name": "Fresh & Divine",
        "dish": ["salad", "juice", "grills"],
        "popularity": "high",
        "rating": 5.0,
        "total": 750,
        "newest": true
      },
      {
        "name": "Rice & Joy",
        "dish": ["rice", "chicken", "vegetable", "ice cream"],
        "popularity": "low",
        "rating": 4.6,
        "total": 250,
        "newest": false
      },
      {
        "name": "Yam & Stew Paradise",
        "dish": ["pounded yam", "goat meat", "soup bowl"],
        "popularity": "medium",
        "rating": 4.4,
        "total": 180,
        "newest": true
      },
      {
        "name": "Burger Haven",
        "dish": ["fast food", "burger", "snacks"],
        "popularity": "high",
        "rating": 5.0,
        "total": 380,
        "newest": false
      },
      {
        "name": "Fresh & Exotic",
        "dish": ["salad", "juice", "grills"],
        "popularity": "high",
        "rating": 5.0,
        "total": 800,
        "newest": true
      },
      {
        "name": "Rice & Spice Hub",
        "dish": ["rice", "chicken", "vegetable", "ice cream"],
        "popularity": "low",
        "rating": 4.7,
        "total": 270,
        "newest": false
      },
      {
        "name": "Yam & Stew Spot",
        "dish": ["pounded yam", "goat meat", "soup bowl"],
        "popularity": "medium",
        "rating": 4.6,
        "total": 200,
        "newest": true
      },
      {
        "name": "Burger Spot",
        "dish": ["fast food", "burger", "snacks"],
        "popularity": "high",
        "rating": 5.0,
        "total": 400,
        "newest": false
      },
      {
        "name": "Fresh & Fine",
        "dish": ["salad", "juice", "grills"],
        "popularity": "high",
        "rating": 5.0,
        "total": 850,
        "newest": true
      },
      {
        "name": "Rice & Spice Delight",
        "dish": ["rice", "chicken", "vegetable", "ice cream"],
        "popularity": "medium",
        "rating": 4.8,
        "total": 290,
        "newest": false
      },
      {
        "name": "Yam & Stew Delight",
        "dish": ["pounded yam", "goat meat", "soup bowl"],
        "popularity": "low",
        "rating": 4.8,
        "total": 220,
        "newest": true
      },
      {
        "name": "Burger Delight",
        "dish": ["fast food", "burger", "snacks"],
        "popularity": "high",
        "rating": 5.0,
        "total": 420,
        "newest": false
      },
      {
        "name": "Fresh & Fantastic",
        "dish": ["salad", "juice", "grills"],
        "popularity": "high",
        "rating": 5.0,
        "total": 900,
        "newest": true
      },
      {
        "name": "Rice & Spice House",
        "dish": ["rice", "chicken", "vegetable", "ice cream"],
        "popularity": "low",
        "rating": 4.9,
        "total": 310,
        "newest": false
      },
      {
        "name": "Yam & Stew Delight",
        "dish": ["pounded yam", "goat meat", "soup bowl"],
        "popularity": "medium",
        "rating": 4.9,
        "total": 240,
        "newest": true
      },
      {
        "name": "Burger Bar",
        "dish": ["fast food", "burger", "snacks"],
        "popularity": "high",
        "rating": 5.0,
        "total": 440,
        "newest": false
      },
      {
        "name": "Fresh & Fabulous",
        "dish": ["salad", "juice", "grills"],
        "popularity": "high",
        "rating": 5.0,
        "total": 950,
        "newest": true
      }
    ])
await  Tag.insertMany([
  {
   tagName:"Rice",
   tagLink:"https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fjapanese-food-rice-svgrepo-com%201.svg_1657125340797?alt=media&token=5e4c0b0b-4a87-45c5-b053-85dfd13f624e" 
  },
  {
    tagName:"Pounded Yam",
    tagLink:"https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fnoodles-svgrepo-com%202.svg_1657125918230?alt=media&token=06ae207d-6f03-4e55-a1ac-e4e725b34acf"
   },
   {
    tagName:"Spaghetti",
    tagLink:"https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fpasta-svgrepo-com%201.svg_1657126023636?alt=media&token=7d56c084-109c-4976-8716-8e1e455b73e6"
   },
   {
    tagName:"Chicken",
    tagLink:"https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fchicken-christmas-food-svgrepo-com%201.svg_1657123972810?alt=media&token=6258348f-0c78-4df0-a15b-f1f1813fb042"
   },
   {
    tagName:"Juice",
    tagLink:"https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fjuice-svgrepo-com%202.svg_1657125631077?alt=media&token=7c8056d4-400a-4ed2-b88e-e456458769cb"
   },
   {
    tagName:"Amala",
    tagLink:"https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2F192px.svg_1666186478054?alt=media&token=f060fce9-2a2c-4164-873d-a65cf05a6f56"
   },
   {
    tagName:"Goat Meat",
    tagLink:"https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fmeat-on-bone-svgrepo-com%201.svg_1657125800626?alt=media&token=ec420ff7-afe9-4a04-8dc4-d82d8e2b39fc"
   },
   {
    tagName:"Soup Bowl",
    tagLink:"https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fsoup-svgrepo-com%201.svg_1657126696679?alt=media&token=1a7a0734-e08a-4eef-8554-03f014210b7a"
   },
   {
    tagName:"Fast Food",
    tagLink:"https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Ffast-food-burger-svgrepo-com%202.svg_1657124812917?alt=media&token=d5f00823-8f3a-4085-8edd-76c161fb9618"
   },
   {
    tagName:"Shawarma",
    tagLink:"https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fburrito-svgrepo-com%201.svg_1657123337321?alt=media&token=b0db6e73-057f-4040-b106-347f8f32a49d"
   },   {
    tagName:"Gorcery",
    tagLink:"https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fgroceries-svgrepo-com.svg_1660776803873?alt=media&token=e0e8a06b-b840-4a85-803a-1b882503f4b3"
   },
    {
    tagName:"Vegetable",
    tagLink:"https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2FCollard%20Greens.svg_1657124429917?alt=media&token=9ba46a8c-a838-44a3-ade4-3d6dfab3c7f9"
  } ,
  {
    tagName:"Grills",
    tagLink:"https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fsausage-meat-svgrepo-com%201.svg_1657126581944?alt=media&token=1450cb6c-4ee8-4110-a9a9-396306bf87d1"
  } ,
  {
    tagName:"Snacks",
    tagLink:"https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2F192px.svg_1666286493527?alt=media&token=11e3897b-f3bb-43f7-b715-bbc9f5b0c751"
  } ,
  {
    tagName:"Smothies",
    tagLink:"https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fmelon-juice-svgrepo-com%201.svg_1657125840561?alt=media&token=405def54-fe46-4bfd-b599-d60017641fe5"
  },
  {
    tagName:"Pastries",
    tagLink:"https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fmuffin-131979035407500020.svg_1686046699134?alt=media&token=44b80646-1d78-4dc7-930b-315aed9bd73d"
  },
  {
    tagName:"Ice Cream",
    tagLink:"https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fice-cream-svgrepo-com%20(1)%201.svg_1657125237440?alt=media&token=2702f233-e7e5-43e1-9324-84f6d11901a7"
  },
  {
    tagName:"Burger",
    tagLink:"https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fburger-svgrepo-com%202.svg_1657122987363?alt=media&token=ae88b275-a3d9-43b1-8baf-a0e430a57a1d"
  }
  ,  {
    tagName:"Doughnuts",
    tagLink:"https://firebasestorage.googleapis.com/v0/b/heypay-e9f1f.appspot.com/o/food%2Fdoughnut-svgrepo-com%201.svg_1657124741318?alt=media&token=b023bd80-983b-4bf1-8d95-3ba8a01b6e52"
  }


])
})

module.exports= DbSeeder

