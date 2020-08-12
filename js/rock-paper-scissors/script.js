let playerScore = 0;
let computerScore = 0;


function computerPlay() {
    
    choices = ["rock", "paper", "scissors"];
    randomChoice = Math.floor(Math.random() * 3); 
    computerChoice = choices[randomChoice];
    return computerChoice;
}

document.getElementById("playerChoice").innerHTML = "Rock, paper, or scissors? (type below)";
document.getElementById("cpuChoice").innerHTML = "You will never beat me and you smell like shit!!!!";

function playRound(playerSelection, computerSelection){

    playerInput = document.choice.playerInput.value;
    playerSelection = playerInput.toLowerCase();
    computerSelection = computerPlay();
    
//    console.log("CPU Choice: " + computerSelection);
//    console.log("Your Choice: " + playerSelection);
    document.getElementById("playerChoice").innerHTML = playerSelection;
    document.getElementById("cpuChoice").innerHTML = computerSelection;

    if (playerSelection == "rock" && computerSelection == "rock"){
        var outcome = "You tied!";
    } else if (playerSelection == "rock" && computerSelection == "paper"){
         var outcome = "You lose the round! Paper beats rock!";
         computerScore++;
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        var outcome = "You win the round! Rock beats scissors!";
        playerScore++;
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        var outcome = "You win the round! Paper beats rock!";
        playerScore++;
    } else if (playerSelection == "paper" && computerSelection == "paper"){
        var outcome = "You tied!";
    } else if (playerSelection == "paper" && computerSelection == "scissors"){
        var outcome =  "You lose the round! Scissors beats paper!";
        computerScore++;
    } else if (playerSelection == "scissors" && computerSelection == "rock"){
        var outcome = "You lose the round! Rock beats scissors!";
        computerScore++;
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        var outcome = "You win the round! Scissors beats paper!";
        playerScore++;
    } else if (playerSelection == "scissors" && computerSelection == "scissors"){
        var outcome = "You tied!";
    } else {
        alert("Please enter ROCK, PAPER, or SCISSORS only.");
        playerScore--;
        computerScore++;
        document.getElementById("playerChoice").innerHTML = "WRONG! Stupid!!!! >:(";
        var outcome = "The computer steals a point from you for not following directions!";
    }

    document.getElementById("roundOutcome").innerHTML = outcome;

    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;

    if (playerScore == 5) {
        var snd = new Audio("yes.wav");
        snd.play();
        document.getElementById("roundOutcome").innerHTML = "YOU WON!!!!!!!!!!!!!!!!";
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore == 5) {
        var snd2 = new Audio("fail.mp3");
        snd2.play();
        document.getElementById("roundOutcome").innerHTML = "You lost at a children's game to a computer. You're an idiot.";
        playerScore = 0;
        computerScore = 0;
    }

    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;


    /* 
    console.log(outcome);
    console.log("Your Score: " + playerScore);
    console.log("CPU Score: " + computerScore);
*/

}

/*
function rps(){
    console.log("-----Round 1-----");
    playRound();
    console.log("-----Round 2-----");
    playRound();
    console.log("-----Round 3-----");
    playRound();
    console.log("-----Round 4-----");
    playRound();
    console.log("-----Round 5-----");
    playRound();

    if (playerScore > computerScore) {
    console.log("YOU WON")
    console.log(`%c ________________________________________
< !!!!!!!!!!!!!!!CONGRATS!!!!!!!!!!!!!!!! >
----------------------------------------
\\   ^__^
 \\  (oo)\\_______
    (__)\\       )\\/\\
        ||----w |
        ||     ||`, "font-family:monospace")
    } else if (playerScore < computerScore) {
        console.log("You lost at a children's game to a computer. You're an idiot.");
        console.log("Pathetic.");
    } else {
        console.log("You uhh.. You tied with the computer.");
        console.log("So, I guess this is it, huh?");
        consoloe.log("To be continued...");
    }
    playAgain();
}
*/


function playAgain() {
    computerScore = 0;
    playerScore = 0;
    var playAgainResponse = prompt("Play again? (Enter Yes or No)", "").toLowerCase();

    if (playAgainResponse == "yes") {
        rps();
    } else if (playAgainResponse == "no") {
        console.log("Thanks for playing!");
    } else {
        alert("Please enter YES or NO only.");
        playAgain();
    }

}