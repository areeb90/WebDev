// CONNECTION BY MONGOOSE 

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/CIS', {useNewUrlParser: true, useUnifiedTopology: true});



// This is main model or schema of this table which includes all the entities of this table 

const Cat = mongoose.model('Cat', { 
    name: String,
    color: String
   });
   
   //  Elements to be added in database by instanciating each object with the schema/model
  const seher = new Cat({ name: 'Seher', color: "brown"});
  const maanu = new Cat({ name: 'Maanu', color: "brown& white"});
  const kelly = new Cat({ name: 'kelly', color: "White"});
  const cutie = new Cat({ name: 'Cutie', color: "Black"});



// multiple objects added by this function ((insertMany))

Cat.insertMany([seher, maanu, kelly, cutie], function(err){
  if (err){
    console.log(err);
  } else {
    console.log("Kittens added to database");
  }
})
   
// by this, we can save only 1 object in this database 
seher.save().then(() => console.log('meow'));




// retreiving data from database, ((Cat collection)) 

Cat.find(function(err, Cat){
  if (err){
    console.log(err);
  } else {
    mongoose.connection.close();

    Cat.forEach(function(Cat){
      console.log(Cat.name + " of " + Cat.color + " color");
    })
    // console.log(Cat);
  }
})




// This is main model or schema of this table which includes all the entities of this table 

// ________________________________________________________________________________________________________________________________________

// EMBEDDING A DOUMENT INTO ANOTHER DOCUMENT 


// THIS SCHEMA/MODEL ((QUALIFICATION)) EMBED TO ENGINEER DocumeNT/MODEL 

const qualif = mongoose.model('Qualification', { 
  uniName: String,
  clgName: String,
  schName: String
 });

 
 
 const Engg = mongoose.model('Engineer', { 
   name: {
     type: String,
     required: [true, "NAME VALIDATION MISSING!  Please cheak your entry, and try again. "]
    },
    gender: String,
    age: {
      type: Number,
      min: 10,
      max: 45
    },
    occupation: String,
    nationality: String,
    
    
    // embedding this ((cat)) document inside this property ((pet)) in a ((Engg )) document 
    qua : qualif
  });
  
  const taleem = new qualif({uniName: "NED", clgName: "Govt Delhi", schName: "FSS"});
  taleem.save()

 const arbiixD= new Engg({name: "ArbiiXD",gender: "male", age:33 , occupation: "IOS developer", nationality: "Canadian", qua: taleem});
 arbiixD.save().then(() => console.log("arbiixD saved with his taleem"));


// __________________________________________________________________________________________________________________________________________


 //  Elements to be added in database by instanciating each object with the schema/model
 const areeb = new Engg({name: "Areeb",gender: "male", age:20 , occupation: "software developer", nationality: "Pakistani"});
 const anas = new Engg({ name: 'Anas', gender: "male", age:19 , occupation: "Game developer", nationality: "Pakistani"});
 const osama = new Engg({ name: 'Osama', gender: "male", age:30 , occupation: "IOS developer", nationality: "Pakistani"});
 const ali = new Engg({ name: 'Ali', gender: "male", age:24 , occupation: "Android developer", nationality: "Pakistani"});
  


Engg.insertMany([areeb, anas, osama, ali],function(err){
  if (err){
    console.log(err);
  } else {
    console.log("Sucessfully added these members into database!");
  }
});





// by this, we can save only 1 object in this database

insaan.save().then(() => console.log('Engineer Saved'));

areeb.save().then(() => console.log("saved"));



// FOR FINDING 
Engg.find(function(err, Engg){
  if (err){
    console.log(err);
  } else {
    mongoose.connection.close();

    Engg.forEach(function(Engg){
      console.log(Engg.name);
    })
    // console.log(Cat);
  }
})


// FOR UPDATE ENTRY 
Engg.updateOne({__id : "605f22eb11ed8d26546f98de"}, {name: "Sultan"}, function(err){
  if (err){
    console.log(err);
  } else {
    console.log("Updated Sucessfully");
  }
});



// DELETE ONE ENTRY AS PER QUERY 

Engg.deleteOne({name: "Areeb"}, function(err){
  if (err){
    console.log(err);
  } else {
    console.log("Deleted Sucessfully!");
  }
})




// DELETE MANY ENTRIES AS PER QUERY 

Engg.deleteMany({age: 20}, function(err){
  if (err){
    console.log(err);
  } else {
    console.log("Same Age Deleted Sucessfully!");
  }
})

