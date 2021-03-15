// these are some modules which I imported
const express = require("express");
const bodyparser = require("body-parser");
const request = require("request");
const https = require("https");


const app = express();

// this will import the local files like CSS, images on server when the website is rendered on a browser   
app.use(express.static("public")); 


// this will extract/take the data from the input fields on the html files and manage from their "name" attribute  
app.use(bodyparser.urlencoded({extended: true}));


app.get("/", function(req, res){
    // console.log("server is up and running");
    // res.send("server is up and running")
    res.sendFile(__dirname+"/signup.html");
});

app.post("/", function(req, res){

    // these are some attrs which are taken from the input elements of signup.html 
    const fname = req.body.fname
    const lname = req.body.lname
    const email = req.body.email
    // console.log(req.body);



    const data = {
        members :[
            {
                // strings hain 
                email_address : email,
                status : "subscribed",

                // attr hai
                merge_fields: {
                    FNAME : fname,
                    LNAME : lname,   

                // aur bhi fields/attr add krsakty is member(object) me as per requirement 
                // Mailchimp ki documentation reff 
                }
            }  
        ]
    };

    const jsonData = JSON.stringify(data);

    const url = "https://us1.api.mailchimp.com/3.0/lists/10cb0561e7";

    const options = {
        method : "POST",
        auth: "ArbiixD:1a920057030f7f099c3216194d0c7bd4-us1"
    }

    // const options = {
    //     url: 'https://us1.api.mailchimp.com/3.0/lists/listID',
    //     method: 'POST',
    //     headers: {
    //       Authorization: 'auth 1a920057030f7f099c3216194d0c7bd4-us1'
    //     },



    // by this attr "request" we can transfer the information abt new user to our offical mailchimp account in the array which we created. from where all user's acc are managed
    const request = https.request(url, options, function(response){

        if (response.statusCode === 200) {
            // res.send("SUCCESS") 
            res.sendFile(__dirname+"/success.html")
        }else {
            // res.send("FAILED")
            res.sendFile(__dirname+"/failed.html")
        };


        response.on("data", function(data){
            console.log(JSON.parse(data));
        });
    });

    // request(options, (err, response, body) {
    //     response.on("data", function(data){
    //         console.log(JSON.parse(data));
    // });

    request.write(jsonData);
    request.end()

});

// /failure pr jo kuch bhi material aayega, usko home route (/) p direct krdega 
app.post("/failure", function(req, res){
    res.redirect("/")
})

// 1a920057030f7f099c3216194d0c7bd4-us1      API KEY 

// 10cb0561e7  unique ID 

app.listen(3000, function(){
    console.log('server is running on port 3000');
})
