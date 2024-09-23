/*
 * DOTS: Level One
 *
 */
score = 0
winScore = 100

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

const ball = document.querySelector(".js-ball")
ball.addEventListener('click', () => {addScore(10)})