let score = 0 
document.getElementById("score").textContent = score
let score2 = 0 
document.getElementById("score2").textContent = score2

function one(){
    score = score + 1
    document.getElementById("score").textContent = score
}
function two(){
    score = score + 2
    document.getElementById("score").textContent = score
}
function three(){
    score = score + 3
    document.getElementById("score").textContent = score
}
function oneEl(){
    score2 = score2 + 1
    document.getElementById("score2").textContent = score2
}
function twoEl(){
    score2 = score2 + 2
    document.getElementById("score2").textContent = score2
}
function threeEl(){
    score2 = score2 +  3
    document.getElementById("score2").textContent = score2
}
function resetEl(){
    score = 0
    score2 = 0
    document.getElementById("score").textContent = score
    document.getElementById("score2").textContent = score2
}
