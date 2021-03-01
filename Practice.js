// var tweet = prompt("ENTER YOUR TEWEET ");
// tweetStandard  = tweet.slice(140);
// alert(tweetStandard)


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