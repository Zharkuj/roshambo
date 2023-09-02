var youchose = document.querySelector(".Youc")
var opchose = document.querySelector(".Computerc")
var hg = document.querySelector(".winorloses")
var winner = document.querySelector(".wins")
var loser = document.querySelector(".loses")
console.log(youchose, opchose)
console.log(winner, loser)
var win = 0;
var lose = 0;


var grr;
function play(youch){
    if(youch==0){
        youchose.innerText=("You chose: rock");
    }
    if(youch==1){
        youchose.innerText=("You chose: paper");
    }
    if(youch==2){
        youchose.innerText=("You chose: scissors");
    }
grr = youch;
console.log(grr);

    three()
    setTimeout(opPlay, 3000);
    
}

function three(){
    for(var i=3; i<=0; i--){
     hg.innerText=(i);
     setInterval(three, 1000);
    }
 }

var rng;
function opPlay(){
    hg.innerText=("");
    rng = Math.floor(Math.random()*3);
    console.log(rng);
    if(rng==0){
        opchose.innerText=("Computer chose: rock");
    }
    if(rng==1){
        opchose.innerText=("Computer chose: paper");
    }
    if(rng==2){
        opchose.innerText=("Computer chose: scissors");
    }
    setTimeout(winorlose, 1000);
}




function winorlose(){
    console.log(`my=${grr}, op=${rng}`);
    if(grr==rng){
        hg.innerText=("Tie!");
    }
    else if((grr==1 && rng==0) || (grr==2 && rng==1) || (grr==0 && rng==2)){
        hg.innerText=("Win!");
        win++
        
    }
    else if((grr==0 && rng==1) || (grr==1 && rng==2) || (grr==2 && rng==0)){
        hg.innerText=("Lose!");
        lose++
        
}
winner.innerText=("You:" + win);
loser.innerText=("Computer:" + lose);
youchose.innerText=("You chose:");
opchose.innerText=("Computer chose:");
setInterval(wait, 2000)
}

function wait(){
    hg.innerText=("");
}

