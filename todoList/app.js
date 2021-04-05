//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const date = require(__dirname + "/date.js");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

// const items = ["Buy Food", "Cook Food", "Eat Food"];
// const workItems = [];


// Create and connect database using mongoose, to avoid deprication warnings I used ((useNewUrlParser, useUnifiedTopology)) attributes
mongoose.connect("mongodb://localhost:27017/todoListDB", {useNewUrlParser: true, useUnifiedTopology: true});

// this is the schema((itemSchema)) of the table/collection((Item)) of this database 
const itemSchema = mongoose.model('Item', { 
  name: String
 });

//  adding objects to our collection
 const item1 = new itemSchema({
   name : "Welcome To your TodoList"
 });
 const item2 = new itemSchema({
  name : "Press + to add your tasks in the database"
});
const item3 = new itemSchema({
  name : "Press <--- to delete the tasks from the database"
});


const itemsArray = [item1, item2, item3]
// itemSchema.insertMany(itemsArray, function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Sucessfully added items to the database");
//   }
// });



// home route ((/))
app.get("/", function(req, res) {

  // find all documents inside our schema 
  // foundItems is an array of documents, we iterate through each and every document and insert in our database if it's not already been placed,if these document already been there then we will show/render the document
  itemSchema.find({}, function(err, foundItems){
    if (foundItems.length=== 0){
      itemSchema.insertMany(itemsArray, function(err){
      if (err){
        console.log(err);
      } else {
    console.log("Sucessfully added items to the database");
  }
});

// redirect to home route 
    res.redirect("/");
    }
    // rendering the documents
    else{
      res.render("list", {listTitle: "Today", newListItems: foundItems})
    }
  })
})

// route in response of the home route. whatever the request is send in GET request form, from home route this will show response in form of POST request 
app.post("/", function(req, res){

  const NewItem = req.body.newItem;

  const item = new itemSchema({
    name: NewItem
  });

  item.save();

  res.redirect("/");
});

app.post("/delete", function(req, res){
  // console.log(req.body);



  // this attr ((req.body.cheakbox )) basically returns the ID of the item which is to be deleted. then it will find that id in our collection using ((findByIdAndRemove)) this method. after finding it will remove that particular item having ID same as that attr ((req.body.cheakbox)) returns
  const itemToBeDeletedID = req.body.cheakbox;
  itemSchema.findByIdAndRemove(itemToBeDeletedID, function(err){
    if(!err){
      console.log("Item is sucessfully removed from the list");
      res.redirect("/")
    }
  })

});

app.get("/work", function(req,res){
  res.render("list", {listTitle: "Work List", newListItems: workItems});
});

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
