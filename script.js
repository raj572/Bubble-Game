var timer=7;
var score=0;
var hitrn=0;
var targetScore = 100;

function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent=score;
    if (score >= targetScore) {
        targetScore += 100;
        document.querySelector("#targetscore").textContent = targetScore;
    }
}
function getNewHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}
function createBubble(){
    var clutter="";

    for(var i=1; i<=168;i++){
    rn=Math.floor(Math.random()*10);
    clutter +=`<div class="bubble">${rn}</div>`;
    }
document.querySelector(".bpanel").innerHTML=clutter;
}

document.querySelector(".bpanel").addEventListener("click",function(detail){
    var clickednum = Number(detail.target.textContent);
    if(clickednum===hitrn){
        increaseScore();
        createBubble();
        getNewHit();
    }
})

function runTimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector(".bpanel").innerHTML = `<h1>Game Over</h1>`;
            var restartButton = document.createElement('button');
            restartButton.textContent = "Restart Game";
            restartButton.id = "restart-button";
            document.querySelector(".bpanel").appendChild(restartButton);

            // Add a click event listener for the restart button
            document.querySelector("#restart-button").addEventListener("click", function () {
                restartGame();
           
            });
        }
    }, 1000);

    // Reset the timer to 6 seconds when a correct hit is made
    document.querySelector(".bpanel").addEventListener("click", function () {
        timer = 20;
        document.querySelector("#timerval").textContent = timer;
    });
}

function restartGame() {
    timer = 7;
    score = 0;
    targetScore = 100;
    document.querySelector("#timerval").textContent = timer;
    document.querySelector("#scoreval").textContent = score;
    document.querySelector("#targetscore").textContent = targetScore;
    createBubble();
    getNewHit();
    runTimer();
}
document.querySelector("#targetscore").textContent = targetScore;

runTimer();
createBubble();
getNewHit();

