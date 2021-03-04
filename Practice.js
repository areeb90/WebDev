
// taking selected amount of words or letters as input in alert.
var tweet = prompt("ENTER YOUR TEWEET ");
tweetStandard  = tweet.slice(140);
alert(tweetStandard)


// FIZZ BUZZ GAME
var list= [];
var count = 1;
function fizzbuzz(){
    if (count%3==0 && count%5==0){
        list.push("fizzBuzz")
    }
    else if (count%3==0){
        list.push("fizz")
    }

    else if(count%5==0){
        list.push("Buzz")
    }else{
        list.push(count)
    }
count++;

    console.log(list);
}







// listens keyboard press events 
document.addEventListener("keypress", function(event){
    console.log(event);
});

// Listens click events 
document.addEventListener("click", function(event){
    console.log(event);
});



// listens and pass other functions as arguments (CallBacks)

function anotherAddeventlistener(typeOfEvent, Callback){
    var eventThatHappend={
        eventType : "keypress"
        key : "p"
        durationOfKeypress: 2 
    };

    if (eventThatHappend.eventType === typeOfEvent){
        Callback(eventThatHappend);

    };

};


// calling
anotherAddeventlistener("keypress", function(event){
    console.log(event);
});








// sett event listener on button element 

// color change using JS 
for (i = 0; i<5; i++){
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        document.querySelector("h1").style.color= "purple";
    });
};

// "button",  "h1" could be any element 
  
//  color change using JQuery 

$("button").click(function(){
    $("h1").css("color", "purple");
});
