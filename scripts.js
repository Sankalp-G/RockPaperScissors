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

    changeIcon('player', playerSelection)
    changeIcon('cpu', computerSelection)
    
     if (playerSelection === computerSelection){
        //condition where its a tie
        console.log("The round is tied!");
        description.textContent = "The round is tied!";
        return("tie")
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"){
        //condition where player wins
        console.log(`You won the round!`);
        description.textContent = `You Won the round!`;
        return("player")
    }
    else if (playerSelection === "scissors" && computerSelection === "rock" || playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors"){
        //condition where player losses
        console.log(`You lost the round!`);
        description.textContent = `You lost the round!`;
        return("com")
    }
    else if(playerSelection !== "rock" || "paper" || "scissors"){
        console.log("invalid input")
    }
    else console.log("something weird happened");
}

//increments counter based on who wins
function incrementer(input){
    const score = document.querySelector('#score')
    let splitScore = score.innerText.split(" ")

    if (input === "player"){
        playerScore += 1;
        splitScore[0] = String(playerScore)
    }
    else if (input === "com"){
        comScore += 1;
        splitScore[2] = String(comScore)
    }
    else if (input === "tie") {
        playerScore += 1;
        comScore += 1;
        splitScore[0] = String(playerScore)
        splitScore[2] = String(comScore)
    }

    score.textContent = splitScore.join(' ')
}

let playerScore = 0;        //player counter
let comScore = 0;           //cpu counter

//plays 5 rounds and prints winner
function game(roundNum){
    playerScore = 0;
    comScore = 0;

    // for(i = 0; i < roundNum; i++){
    //     roundResult = playRound(window.prompt("State your move"), computerPlay());
    //     incrementer(roundResult);
    // }


    const game_buttons = game_button_container.childNodes;

    let i = 0;
    i = 0;


    game_buttons.forEach((button1) => {
        button1.addEventListener('click', function(){
            i++
            initGame(button1, roundNum, i)
        })

    })
}



function initGame(button1, roundNum, i) {
    const player_icon = document.querySelector('#player_icon')
    const cpu_icon = document.querySelector('.cpu_icon')
    let attribute1 = button1.getAttribute('style')
    console.log(attribute1)
    let roundResult;
    console.log(i)
    if(i < roundNum){
        if (attribute1 == 'background-color: #ff5460;'){
            roundResult = playRound('rock', computerPlay());
            incrementer(roundResult);
        }
        else if (attribute1 == 'background-color: #85a3cd;'){
            roundResult = playRound('paper', computerPlay());
            incrementer(roundResult);
        }
        else if (attribute1 == 'background-color: #a7e164;'){
            roundResult = playRound('scissors', computerPlay());
            incrementer(roundResult);
        }
    }
    else if (i == roundNum) {
        if (attribute1 == 'background-color: #ff5460;'){
            roundResult = playRound('rock', computerPlay());
            incrementer(roundResult);
        }
        else if (attribute1 == 'background-color: #85a3cd;'){
            roundResult = playRound('paper', computerPlay());
            incrementer(roundResult);
        }
        else if (attribute1 == 'background-color: #a7e164;'){
            roundResult = playRound('scissors', computerPlay());
            incrementer(roundResult);
        }

        subtitle_container.setAttribute('style', 'opacity: 0; height: 60px;')

        if (Number(playerScore) > Number(comScore)){
            console.log(`YOU WON THE GAME, you scored ${playerScore} and cpu scored ${comScore}`);
            description.textContent = `YOU WON THE GAME`;
            player_icon.setAttribute('style', 'border: solid 5px gold; background-color: #1356a9;')
            description.setAttribute('style', 'color: darkgreen;')
        }
        else if (Number(playerScore) < Number(comScore)){
            console.log(`YOU LOST THE GAME, you scored ${playerScore} and cpu scored ${comScore}`);
            description.textContent = `YOU LOST THE GAME`;
            cpu_icon.setAttribute('style', 'border: solid 5px gold; background-color: #b92525;')
            description.setAttribute('style', 'color: darkred;')
        }
        else if (Number(comScore) == Number(playerScore)){
            console.log(`IT'S A TIE, both scored ${playerScore}`);
            description.textContent = `IT'S A TIE`;
            player_icon.setAttribute('style', 'border: solid 5px gold; background-color: #1356a9;')
            cpu_icon.setAttribute('style', 'border: solid 5px gold; background-color: #b92525;')
            description.setAttribute('style', 'color: goldenrod;')
        }
        else{
            console.log("something went wrong");
        }

        const f5 = document.createElement('div')
        f5.textContent = "press f5 to try again";
        f5.setAttribute('id', 'description')
        f5.setAttribute('style', 'padding-top: 30px;')
        description_container.appendChild(f5)
    
        playerScore = 0;
        comScore = 0;

        const game_buttons = game_button_container.childNodes;

        game_buttons.forEach((button1) => {
            let old_element = button1;
            let new_element = old_element.cloneNode(true);
            old_element.parentElement.replaceChild(new_element, old_element)
        })

        return
        
    }

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
const description_container = document.querySelector("#description_container")

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

const circle = document.createElement('div')
circle.setAttribute('style', 'height: 75px; width: 75px: border:none; border-radius: 50%;')

const game_button = document.querySelectorAll('#button2')

function gameMode(){

    let booper = true;

    button_container.classList.add('button_container2');

    description_container.setAttribute("style", "padding-top: 0px;")
    description.textContent = "";

    menu_button_img.forEach((button) => {


        button.classList.add('menu_button_img2');
          
        button.addEventListener("transitionend", () =>{
            if(button_container.firstElementChild == menu_button_container && booper === true){
                button_container.removeChild(menu_button_container)

                game_button_container.setAttribute("style", "opacity: 0;")
                button_container.appendChild(game_button_container)
                setTimeout(function(){
                    game_button_container.setAttribute("style", "opacity: 1; transition: 1s;")
                }, 0);
                booper = false;
                }
        });
    });
    subtitle_container.setAttribute("style", "opacity: 0;")
    description_container.setAttribute("style", "padding-top: 0px;")
    description.textContent = "play your move";
}

 function menuMode(){

    description_container.setAttribute("style", "padding-top: 70px;")
    description.textContent = "";

    if(button_container.firstElementChild !== menu_button_container){
        button_container.appendChild(menu_button_container)
        button_container.removeChild(game_button_container)

        menu_button_img.forEach((button) => {
            setTimeout(function(){
                button.classList.remove('menu_button_img2');
            }, 20);
        });
    }

        

    button_container.classList.remove('button_container2');

    subtitle_container.setAttribute("style", "opacity: 100; transition: 1s;")

}





const score_section = document.querySelector('#score_section')
const score_container = document.querySelector('#score_container')

score_section.removeChild(score_container)
score_container.setAttribute("style", "opacity: 0;")


function expandScore(){
    let beeper = true;

    score_section.setAttribute("style", "height:200px; transition: 1s;")

    score_section.addEventListener("transitionend", () => {

        if(beeper == true){
            score_section.appendChild(score_container)

            setTimeout(function(){
                score_container.setAttribute("style", "opacity: 1; transition: 1s;")
            }, 0);

            beeper = false;
        }
    });
}

function collapseScore(){
    let beeper = true;

    score_container.setAttribute("style", "opacity: 0; transition: 1s;")

    if(beeper == true){
        score_container.addEventListener('transitionend', () => {
            score_section.removeChild(score_container)
            score_section.setAttribute("style", "height:0px; transition: 1s;")
        });
    }
}

const player_icon = document.querySelector('#player_icon')
const cpu_icon = document.querySelector('.cpu_icon')

function changeIcon(user, icon){
    const player_icon = document.querySelector('#player_icon')
    const cpu_icon = document.querySelector('.cpu_icon')

    let small_rock_img = rock_img.cloneNode()
    small_rock_img.style.height = '97%'
    small_rock_img.style.width = 'auto'
    let small_paper_img = paper_img.cloneNode()
    small_paper_img.style.height = '82%'
    small_paper_img.style.width = 'auto'
    let small_scissor_img = scissor_img.cloneNode()
    small_scissor_img.style.height = '74%'
    small_scissor_img.style.width = 'auto'

    if (user == 'player'){
        if(player_icon.hasChildNodes() == true){
            player_icon.textContent = '';
        }
        if(icon == 'rock'){
            player_icon.appendChild(small_rock_img)
        }
        else if(icon == 'paper'){
            player_icon.appendChild(small_paper_img)
        }
        else if(icon == 'scissors'){
            player_icon.appendChild(small_scissor_img)
        }
    }
    if (user == 'cpu'){
        if(cpu_icon.hasChildNodes() == true){
            cpu_icon.textContent = '';
        }
        if(icon == 'rock'){
            cpu_icon.appendChild(small_rock_img)
        }
        else if(icon == 'paper'){
            cpu_icon.appendChild(small_paper_img)
        }
        else if(icon == 'scissors'){
            cpu_icon.appendChild(small_scissor_img)
        }
    }
}


//adding game logic to elements

menu_button_img.forEach((button) => {
    button.addEventListener('click', async () => {
        let attribute = button.getAttribute('src')

        if (attribute == 'assets/icons/single_icon.png'){
            gameMode()
            expandScore()
            game(1)
        }
        else if (attribute == 'assets/icons/5round_icon.png'){
            gameMode()
            expandScore()
            game(5)
        }
        else if (attribute == 'assets/icons/endless_icon.png'){
            gameMode()
            expandScore()
            game(10000000)
        }
        else {console.log('weird')}
    })
})



