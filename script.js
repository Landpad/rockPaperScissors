function getComputerChoice(value){
    let weaponSelected;

    switch(value) {
        case 1:
            weaponSelected = 'Rock';
            break;

        case 2:
            weaponSelected = 'Paper';
            break;

        case 3:
            weaponSelected = 'Scissors';
            break;
    }

    return weaponSelected;

}

function getPlayerChoice (selection){
    let weaponSelected;

        switch(selection) {
            case 'ROCK':
                weaponSelected = 'Rock';
                break;
            case 'PAPER':
                weaponSelected = 'Paper';
                break;
            case 'SCISSORS':
                weaponSelected = 'Scissors';
                break;
        }

        return weaponSelected;

    }

function setParagraphContent(sentence, id){
    let para = getElement(id);

    para.textContent = sentence;

}

function displayRoundResult(winner){
    if(winner == true){
        setParagraphContent('Player won the round!', 'roundPara');
        playerScore = playerScore + 1;
    } else if (winner == false) {
        setParagraphContent('Computer won the round!', 'roundPara');
        computerScore = computerScore + 1;
    } else {
        setParagraphContent('TIE!', 'roundPara');
    }

}

function determineRoundWinner(selection){
    let playerWon = null;
    let randomValue = Math.floor(Math.random() * 3) + 1;
    let computerChoice = getComputerChoice(randomValue);
    let playerChoice = getPlayerChoice(selection);

    if(computerChoice == 'Rock' && playerChoice == 'Rock') {
        playerWon = null;
    }
    if(computerChoice == 'Rock' && playerChoice == 'Paper'){
        playerWon = true;
    }
    if(computerChoice == 'Rock' && playerChoice == 'Scissors'){
        playerWon = false;
    }
    if(computerChoice == 'Paper' && playerChoice == 'Paper'){
        playerWon = null;
    }
    if(computerChoice == 'Paper' && playerChoice == 'Scissors'){
        playerWon = true;
    }
    if(computerChoice == 'Scissors' && playerChoice == 'Scissors'){
        playerWon = null;
    }
    if(computerChoice == 'Scissors' && playerChoice == 'Rock'){
        playerWon = true;
    }
    if(computerChoice == 'Paper' && playerChoice == 'Rock'){
        playerWon = false;
    }
    if(computerChoice == 'Scissors' && playerChoice == 'Paper'){
        playerWon = false;
    }

    return playerWon;

}

function createButton(buttonText, buttonId){
    const button = document.createElement('button');
    button.textContent = buttonText;
    button.setAttribute('id', `${buttonId}`);

    return button;

}

function getElement(id){
    const element = document.querySelector(`#${id}`);

    return element;

}

function toggleRpsButtons(boolean){
    const buttonsContainer = getElement('container');
    const buttons = buttonsContainer.querySelectorAll('button');

        buttons.forEach(button => {
            button.disabled = boolean;
            if(button.id == 'playAgainButton'){
                button.disabled = false;
            }
        })

}

function displayPlayAgainButton(){
    const buttonsContainer = getElement('container');
    const playAgainDiv = document.createElement('div');
    playAgainDiv.setAttribute('id','playAgainContainer');
    const playAgainButton = createButton('PLAY AGAIN!', 'playAgainButton');
    buttonsContainer.appendChild(playAgainDiv);
    playAgainDiv.appendChild(playAgainButton);

}

function restartGame(){
    const playAgainButton = getElement('playAgainButton')
    playAgainButton.addEventListener('click', () => {
    const playAgainButton = getElement('playAgainButton');

    playerScore = 0;
    computerScore = 0;

    toggleRpsButtons(false);
    playAgainButton.remove();
    
    const body = document.querySelector('body');
    location.reload();
})

}

function playRound(selection){
    const roundPara = getElement('roundPara');
    const scorePara = getElement('scorePara');
    let gameFinished = false;
    let winner = determineRoundWinner(selection);

    displayRoundResult(winner);

    setParagraphContent(`Player: ${playerScore} Computer: ${computerScore}`, 'scorePara');

    if(playerScore == 5){
        setParagraphContent('Player won the game!', 'roundPara');
        gameFinished = true;
    } else if (computerScore == 5){
        setParagraphContent('Computer won the game!', 'roundPara');
        gameFinished = true;
    }

    if(gameFinished == true){
        toggleRpsButtons(true);
        displayPlayAgainButton();
        restartGame();        
    }

    return winner;

}

function rpsEventListener(element, weaponSelected){
    element.addEventListener('click', () => playRound(weaponSelected));

}

let playerScore = 0;
let computerScore = 0;

const rockBtn = getElement('rock');
rpsEventListener(rockBtn,'ROCK');

const paperBtn = getElement('paper');
rpsEventListener(paperBtn,'PAPER');

const scissorsBtn = getElement('scissors');
rpsEventListener(scissorsBtn,'SCISSORS');
































