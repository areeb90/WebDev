const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({extended: true}));



// CALCULATOR FOR ADDITION

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});


app.post("/", function(req, res){

    var n1 = Number(req.body.num1);
    var n2 = Number(req.body.num2);
    var add = n1+n2


    // res.write(__dirname+"/add.html"+add)
    res.send("<h1 style='color: red; font-size: 60px; background-color:rgb(237, 210, 255);'> <center> Added Values.. </h1>"+
        "<p style='color: blue; font-size: 46px; text-align:center;'> Adding these numbers we get, "+add +"</p>");
    // res.send("Thanks for posting that!");
    console.log(req.body);
})




// CALCULATOR FOR SUBTRACTION

app.get("/subtraction", function(req, res){
    res.sendFile(__dirname+"/subtract.html");
});


app.post("/subtract", function(req, res){

    var n1 = Number(req.body.n1);
    var n2 = Number(req.body.n2);
    var subtract = n1-n2

    res.send("<h1 style='color: red; font-size: 46px; background-color: rgb(199, 241, 255);'> <center>Subtracting Values.. </h1>"+
        "<p style='color: blue; font-size: 46px; text-align:center'>Suubtracting these numbers we get, "+subtract+"</p>");
    // res.send("Thanks for posting that!");
    console.log(req.body);
})



// CALCULATOR FOR Multiplication

app.get("/multiplication", function(req, res){
    res.sendFile(__dirname+"/multiply.html");
});


app.post("/multiply", function(req, res){

    var xcom1 = Number(req.body.x1);
    var xcom2 = Number(req.body.x2);
    var multiplier = xcom1*xcom2

    res.send("<h1 style='color: red; font-size: 46px; background-color: rgb(255, 209, 209);'><center> Multiplying Values.. </h1>"+
        "<p style='color: blue; font-size: 46px; text-align:center'>  Multiplying these numbers we get, "+ multiplier+"</p>");
    // res.send("Thanks for posting that!");
    console.log(req.body);
})





// CALCULATOR FOR Divide

app.get("/division", function(req, res){
    res.sendFile(__dirname+"/divide.html");
});


app.post("/divide", function(req, res){

    var divi1 = Number(req.body.d1);
    var divi2 = Number(req.body.d2);
    var divider = divi1/divi2

    res.send("<h1 style='color: red; font-size: 46px; background-color: rgb(183, 255, 255);'><center>Dividing Values.. </h1>"+
        "<p style='color: blue; font-size: 46px; text-align:center'>Dividing these numbers we get, "+ divider +"</p>");
    // res.send("Thanks for posting that!");
    console.log(req.body);
})



// BMI CALCULATOR


app.get("/bmiCalculator", function(req, res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});



app.post("/bmicalculator", function(req, res){
    // res.send("Your bmi is recorded sucessfully !")
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);

    var bmi = weight / (height * height);

    res.send("<h1 style='color: red; font-size: 46px; background-color: rgb(201, 255, 201);  '><center>Your BMI </h1>"
    +"<p style='color: blue; font-size: 46px; text-align:center'>Your bmi is "+ bmi + "</p>");
})





app.listen("3000", function(){
    console.log("Server is running on port 3000");
})
