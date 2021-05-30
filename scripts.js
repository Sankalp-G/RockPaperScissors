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
        }
        else if(button.attributes.src.nodeValue == "assets/icons/endless_icon.png"){
            description.textContent="A match where the game goes on simply forever";
        }
        else if(button.attributes.src.nodeValue == "assets/icons/single_icon.png"){
            description.textContent="One single round of rock paper scissors";
        }
    });
});


const button_container = document.querySelector('#button_container')
const menu_button_container = document.querySelector('#menu_button_container')
const menu_button_img = document.querySelectorAll('#menu_button_img')
const subtitle_container = document.querySelector('#subtitle_container')

const game_button_container = document.createElement('div')
const rock_button = document.createElement('div')
const paper_button = document.createElement('div')
const scissor_button = document.createElement('div')
const rock_img = document.createElement('img')
const paper_img = document.createElement('img')
const scissor_img = document.createElement('img')

rock_img.setAttribute("id", "game_button_img")
rock_img.setAttribute("src", "assets/icons/rock_icon.png")
paper_img.setAttribute("id", "game_button_img")
paper_img.setAttribute("src", "assets/icons/paper_icon.png")
paper_img.setAttribute("style", "height: 220px; width: 220px; padding: 16px;")
scissor_img.setAttribute("id", "game_button_img")
scissor_img.setAttribute("src", "assets/icons/scissor_icon.png")
scissor_img.setAttribute("style", "height: 210px; width: 210px; padding: 21px;")

rock_button.setAttribute("id", "button2")
rock_button.setAttribute("style", "background-color: #ff5460;")
paper_button.setAttribute("id", "button2")
paper_button.setAttribute("style", "background-color: #85a3cd;")
scissor_button.setAttribute("id", "button2")
scissor_button.setAttribute("style", "background-color: #a7e164;")
game_button_container.setAttribute("id", "game_button_container")

game_button_container.appendChild(rock_button)
game_button_container.appendChild(paper_button)
game_button_container.appendChild(scissor_button)
rock_button.appendChild(rock_img)
paper_button.appendChild(paper_img)
scissor_button.appendChild(scissor_img)

//button_container.appendChild(game_button_container)


function gameMode(){
    button_container.classList.add('button_container2');

    let booper = true;

    menu_button_img.forEach((button) => {


        button.classList.add('menu_button_img2');
          
        button.addEventListener("transitionend", () =>{
            if(button_container.firstElementChild == menu_button_container && booper === true){
                button_container.removeChild(menu_button_container)
                button_container.appendChild(game_button_container)
                booper = false;
                }
        });
    });
    subtitle_container.setAttribute("style", "opacity: 0;")

}

 function menuMode(){


    if(button_container.firstElementChild !== menu_button_container){
        button_container.appendChild(menu_button_container)
        button_container.removeChild(game_button_container)
        }

        menu_button_img.forEach((button) => {
            button.classList.remove('menu_button_img2');
        });

    button_container.classList.remove('button_container2');

    subtitle_container.setAttribute("style", "opacity: 100; transition: 1s;")

}
