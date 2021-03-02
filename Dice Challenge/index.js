var number1 = Math.floor(Math.random() * 6)+1 ;

var randomImage1 = "dice" + number1 + ".png";

var randomImageSource1 = "images/" + randomImage1;

var image1 = document.querySelectorAll('img')[0]

image1.setAttribute("src", randomImageSource1)


var number2 = Math.floor(Math.random() * 6)+1;

var randomImage2 = "dice" + number2 + ".png";


var randomImageSource2 = "images/" + randomImage2;

var image2 = document.querySelectorAll('img')[1]

image2.setAttribute("src", randomImageSource2)



if (number1 > number2){
    document.querySelector("h1").innerHTML= "🚩Player 1 WINS!!  "
}

else if (number2 > number1){
    document.querySelector("h1").innerHTML= "🚩Player 2 WINS!!  "
}
else{
    document.querySelector("h1").innerHTML= "DRAW "
}