var playerScore = document.getElementById("player_score");
var computerScore = document.getElementById("computer_score");

var playerContainer=document.getElementById("player_container");
var computerContainer=document.getElementById("computer_container");

var playerChoiceImg=document.getElementById("player_choice");
var computerChoiceImg= document.getElementById("computer_choice");

const choices = ["Rock", "Paper", "Scissors"];
const rock = document.getElementById("rock_pic");
const paper = document.getElementById("paper_pic");
const scissors = document.getElementById("scissors_pic");

rock.addEventListener("click", () => playGame(choices[0]));
paper.addEventListener("click", () => playGame(choices[1]));
scissors.addEventListener("click", () => playGame(choices[2]));

function playGame(playerChoice) {
    console.log("Player chose: "+ playerChoice)
    computerChoice= choices[Math.floor(Math.random() * choices.length)];
    computerChoiceImg.src= "Assets/" + computerChoice +".png";
    playerChoiceImg.src  = "Assets/" + playerChoice   +".png";

    determineWinner(playerChoice, computerChoice);
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        flashResult(playerContainer,playerScore);
        flashResult(computerContainer,computerScore);
    } else if ((playerChoice === "Rock" && computerChoice === "Scissors") || 
                (playerChoice === "Paper" && computerChoice === "Rock") || 
                (playerChoice === "Scissors" && computerChoice === "Paper")) {
        flashResult(playerContainer,playerScore);
        
    } else {
        flashResult(computerContainer,computerScore);
    }
}

function flashResult(container,score){
    var originalBackgroundColor="white";
    var flashingColor = "green";
    var flashDuration = 2000; 
    var flashInterval = 400; 
    var flashCount = 0;

    var flashIntervalId = setInterval(function () {
        container.style.backgroundColor = (flashCount % 2 === 0) ? flashingColor : originalBackgroundColor;
        flashCount++;
        if (flashCount >= flashDuration / flashInterval) {
            clearInterval(flashIntervalId);
            container.style.backgroundColor = originalBackgroundColor;
            score.textContent=(parseInt(score.textContent) + 1).toString();;
        }
    },flashInterval);
}


