let numOfDrumButtons = document.querySelectorAll(".drum").length;


for(let i = 0; i < numOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        this.style.color = 'white';
    });
}



// Notes 
// i < document.querySelectorAll(".drum").length
//        - number of drum class buttons 

// 
// let sound = new Audio('/sounds/tom-1.mp3');
// sound.play();
//        - how to play a sound on html