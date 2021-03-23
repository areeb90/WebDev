// MONGOdb Node.JS NATIVE DRIVER 



// // jshint esversion:6                                         (This will create the database) === use  (dbName)

// const MongoClient = require("mongodb").MongoClient;
// const assert = require("assert");

// // connection url 
// const url = "mongodb://localhost:27017";

// // database name 
// const dbname = "fruits";

// // create a new mongo client 
// const client = new MongoClient(url);

// // use method to connect with the server 
// client.connect(function(err){
//   assert.equal(null, err);
//   console.log("Connected Sucessfully to the server");


//   const db = client.db(dbname);

//   client.close();
// })


// jshint esversion:6                                  

const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

// connection url 
const url = "mongodb://localhost:27017";

// database name 
const dbname = "fruits";

// create a new mongo client 
const client = new MongoClient(url, { useUnifiedTopology: true });

// use method to connect with the server 
client.connect(function(err){
  assert.equal(null, err);
  console.log("Connected Sucessfully to the server");


  const db = client.db(dbname);
  // inserting data 
  insertDocuments(db, function(){
    client.close();
  });

  // Data retrieving 
  findDocuments(db, function(){
    client.close();
  });
});


// (INSERTING DATA INTO THE MONGO DATABASE) === db.collection.insertMany() 
const insertDocuments = function(db, callback){
  // get the documents collections 
  const collection = db.collection("fruits");

  // insert some documents 
  collection.insertMany([
    // {
    //   name: "PineApple",
    //   score: 9,
    //   review: "Awesome!"
    // },
    // {
    //   name: "Apple",
    //   score: 8,
    //   review: "Gorgeous!"
    // },
    {
      name: "Grape",
      score: 9,
      review: "Taste's good!"
    },
    {
      name: "WaterMelon",
      score: 7,
      review: "Sweet in taste"
    },
    {
      name: "Berries",
      score: 8,
      review: "Pretty Sour"
    }

  ],
  function(err, result){
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collections");
    callback(result);
  });
};



// (RETRIEVING DATA FROM THE MONGO DATABASE) === db.collection.find() 

const findDocuments = function(db, callback){

  // get the documents collections 
  const collection = db.collection("fruits");
  
  // find some documents 
  collection.find({}).toArray(function(err, fruits){
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(fruits);
    callback(fruits);
  });
};

