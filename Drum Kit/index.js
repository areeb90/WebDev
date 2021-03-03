

// listening click events

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0 ; i<numberOfDrumButtons; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function (){

        // this.style .color = "white ";
        // THIS is the identity of the button that clicked at the time of triggering

        var  elementInnerHTML = this.innerHTML;
        produceSound(elementInnerHTML); 
        buttonAnimation(elementInnerHTML); 
    });

};


// listening keys of keyboard events

document.addEventListener("keypress", function(event){
    produceSound(event.key);
    buttonAnimation(event.key);
});

function produceSound(key){

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();

            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;
        case "l":
            var snare = new Audio("sounds/snare.mp3");
            snare.play()
            break;

        default:
            console.log(elementInnerHTML);
    };


};

function buttonAnimation(currentKey){

    var animation = document.querySelector("."+ currentKey);

    animation.classList.add("pressed");

    setTimeout(() => {
        animation.classList.remove("pressed")
    }, 100);

}
