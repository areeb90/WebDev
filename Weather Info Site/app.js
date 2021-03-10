const { query } = require("express");
const express = require("express");
const https = require("https");
const { url } = require("inspector");
const bodyParser = require("body-parser")

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/cityName", function(req,res){
    queryb = req.body.cityName
    const id = "d97ab1a12b6b91d3c59bbdb798ab65ed"

    // res.send("Server is up and running!")
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ queryb +"&appid="+id+"&units=metric";

    https.get(url , function(response){
        response.on("data", function(data){
            const weatherData = JSON.parse(data)
            const weatherDiscription = weatherData.weather[0].description
            const temp = weatherData.main.temp
            const wind = weatherData.wind.speed
            const feelsLike = weatherData.main.feels_like
            const humidity = weatherData.main.humidity
            const image = weatherData.weather[0].icon
            const imageURL= "http://openweathermap.org/img/wn/"+ image +"@2x.png"

            res.write("<p style='color: purple; font-size: 46px; text-align:center; margin-top:150px'>The weather of "+ queryb +" is currently, "+weatherDiscription +" <img src='"+imageURL+"' style='background-color: rgb(93, 185, 185); font-size: 46px; margin:auto; text-align:center;'></p>");
            res.write("<p style='color: maroon; font-size: 46px; text-align:center;'>The temperature of the city is "+temp+" degree celcius</p>");
            res.write("<p style='color: red; font-size: 46px; text-align:center;'>Wind is blowing at the speed of "+wind+" Miles/hr</p>");
            res.write("<p style='color: black; font-size: 46px; text-align:center;'>Currently the Humidity is "+humidity+"%</p>");
            // res.write("<img src='"+imageURL+"' style='background-color: yellow; font-size: 46px; margin:auto; text-align:center;'>");

            res.send()
            // console.log(weatherData.main.temp);
        })
    })

})









app.listen(3000, function(){
    console.log("Server is running on port 3000");
});
    