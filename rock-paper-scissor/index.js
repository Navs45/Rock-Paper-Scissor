const yourChoiceDisplay = document.getElementById("you")
const computerChoicedisplay = document.getElementById("comp")
const resultdisplay = document.getElementById("result")
const possibleChoice = document.querySelectorAll(".image")
let userChoice
let computerChoice
let result
possibleChoice.forEach((choice) => {
    choice.addEventListener("click", (e)=>{
        userChoice = choice.getAttribute("id");
        yourChoiceDisplay.innerHTML=userChoice;
        generatedMove()
        getResult()
    })
})
function generatedMove(){
    var randomScore = Math.floor(Math.random() * 3) + 1;
    if(randomScore === 1){
        computerChoice = "Rock";
    }
    if(randomScore === 2){
        computerChoice = "Scissor";
    }
    if(randomScore === 3){
        computerChoice= "Paper";
    }
    computerChoicedisplay.innerHTML=computerChoice
}
function getResult(){
    if(userChoice === computerChoice){
        result="It's a draw!!"
    }
    if(computerChoice === "Rock" && userChoice === "Scissor"){
        result ="You lost!!"
    }
    if(computerChoice === "Paper" && userChoice === "Scissor"){
        result ="You win!!"
    }
    if(computerChoice === "Rock" && userChoice === "Paper"){
        result ="You win!!"
    }
    if(computerChoice === "Scissor" && userChoice === "Paper"){
        result ="You lost!!"
    }
    if(computerChoice === "Paper" && userChoice === "Rock"){
        result ="You lost!!"
    }
    if(computerChoice === "Scissor" && userChoice === "Rock"){
        result ="You win!!"
    }
    resultdisplay.innerHTML=result;
}