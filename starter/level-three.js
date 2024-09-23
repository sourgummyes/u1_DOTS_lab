/*
 * DOTS: Level Three
 *
 */

score = 0
winScore = 100

ball1 = 20
ball2 = 5
ball3 = 10

scoreDisplay = document.querySelector(".js-score")
winnerDisplay = document.querySelector(".level-winner")

function addScore(addedScore) {
if (score < winScore){
    score += addedScore
    console.log(score)
    scoreDisplay.innerText = score
}
if (score >= winScore) {
    winnerDisplay.style.opacity = 1;
}}

const ball = document.querySelectorAll(".js-ball")
console.log(ball)
for (let i = 0; i < ball.length; i++){
    function scoring(ballAdd) {
        ball[i].addEventListener('click', () => {addScore(ballAdd)})
    }

    scoring(ball1)

    if (i = 1){
        scoring(ball2)
    }

    if (i = 2){
        scoring(ball3)
    }
}