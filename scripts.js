//selecting random move
function computerPlay(){        
    let move;
    let rand;
    rand = Math.random();
    
    if (rand < 0.33){
        move = "rock";
    } else if (rand < 0.66){
        move = "paper";
    }else {
        move = "scissors";
    }

    return(move);
}

//playing one round of RPS and returning result
function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();

    
     if (playerSelection === computerSelection){
        //condition where its a tie
        console.log("It's a tie! Both played " + playerSelection);
        return("tie")
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"){
        //condition where player wins
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
        return("player")
    }
    else if (playerSelection === "scissors" && computerSelection === "rock" || playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors"){
        //condition where player losses
        console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
        return("com")
    }
    else if(playerSelection !== "rock" || "paper" || "scissors"){
        console.log("invalid input")
    }
    else console.log("something weird happened");
}

//increments counter based on who wins
function incrementer(input){
    if (input === "player"){
        playerScore += 1;
    }
    else if (input === "com"){
        comScore += 1;
    }
    else if (input === "tie") {
        playerScore += 1;
        comScore += 1;
    }
    else {}
}

let playerScore = 0;        //player counter
let comScore = 0;           //cpu counter

//plays 5 rounds and prints winner
function game(){
let roundResult;

roundResult = playRound(window.prompt("State your move"), computerPlay());
incrementer(roundResult);
roundResult = playRound(window.prompt("State your move"), computerPlay());
incrementer(roundResult);
roundResult = playRound(window.prompt("State your move"), computerPlay());
incrementer(roundResult);
roundResult = playRound(window.prompt("State your move"), computerPlay());
incrementer(roundResult);
roundResult = playRound(window.prompt("State your move"), computerPlay());
incrementer(roundResult);

if (playerScore > comScore){
console.log(`YOU WON THE GAME, you scored ${playerScore} and cpu scored ${comScore}`);
}
else if (comScore < playerScore){
console.log(`YOU LOST THE GAMEE, you scored ${playerScore} and cpu scored ${comScore}`);
}
else if (comScore === playerScore){
console.log(`IT'S A TIE, both scored ${playerScore}`);
}
else{
console.log("something went wrong");
}

playerScore = 0;
comScore = 0;
}





//dom manipulation section

const menu_buttons = document.querySelectorAll('#menu_button_img');
const description = document.querySelector('#description')

menu_buttons.forEach((button) => {
    button.addEventListener("mouseenter", () => {
        if(button.attributes.src.nodeValue == "assets/icons/5round_icon.png"){
            description.textContent="A match where the first one to get 5 points wins";
        }else if(button.attributes.src.nodeValue == "assets/icons/endless_icon.png"){
            description.textContent="A match where the game goes on simply forever";
        }
    });
});
