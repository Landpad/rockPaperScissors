/* Need to create a function 'getComputerChoice' that
* will return rock, paper or scissors.
* Next need to write a function that plays a round of
* rock paper scissors. Need to take playerSelection,
* computerSelection AND then return a string that
* declares the winner of the round
* playerSelection parameter must be case-insensitive
* if tie need to replay the round
* create a function 'game' that plays 5 rounds
* in a row AND determines the winner.
* input need to be prompt
* 1) create getComputerChoice function. This will return a rANDom choice between rock paper or scissors.
* 2) create getPlayerChoice function. This will return rock paper or scissors.
*       a) need to be case insensitive, the input will be transformed to capital case to solve this
* 3) create the playRound function. This will return the winner of the round
*       a) if the round end on tie. Need to be replayed
* 4) create game function. This will play 5 rounds AND determine the winner of the 5.
*       
* FUNCTION getComputerChoice
*   SET randomValue to random value between 1 AND 3
*   SET weaponSelected to NULL
*   CASE randomValue equals 1 THEN
*       SET weaponSelected to 'Rock'
*   END CASE
*   CASE randomValue equals 2 THEN
*       SET weaponSelected to 'Paper'
*   END CASE
*   CASE randomValue equals 3 THEN
*       SET weaponSelected to 'Scissors'
*   END CASE
*   RETURN weaponSelected
* END FUNCTION
*
* FUNCTION getPlayerChoice
*   SET INPUT to UPPERCASE
*   SET weaponSelected to NULL
*   CASE INPUT equals 'ROCK' THEN
*       SET weaponSelected to 'Rock'
*   END CASE
*   CASE INPUT equals 'PAPER' THEN 
*       SET weaponSelected to 'Paper'
*   END CASE
*   CASE INPUT equals 'SCISSORS' THEN 
*       SET weaponSelected to 'Scissors'
*   END CASE
*   CASE INPUT not equals 'ROCK' OR 'PAPER' OR 'SCISSORS' 
*       THEN PRINT 'Input must be Rock, Paper or Scissors'
*   END CASE
*   RETURN weaponSelected
* END FUNCTION
*
* FUNCTION playRound
*   SET computerChoice TO INVOKE getComputerChoice
*   SET playerChoice TO INVOKE getPlayerChoice
*   SET playerWon TO null
*   WHILE playerWon doesn't equals null THEN
*   CASE computerChoice equals 'Rock' AND playerChoice equals 'Rock' THEN
*       SET playerWon TO null
*   END CASE
*   CASE computerChoice equals 'Rock' AND playerChoice equals 'Paper' THEN
*       SET tie TO false
*       SET playerWon TO true
*       PRINT 'You win!'
*   END CASE
*   CASE computerChoice equals 'Rock' AND playerChoice equals 'Scissors' THEN
*       SET tie TO false
*       SET playerWon TO false
*       PRINT 'Computer wins!'
*   END CASE
*   CASE computerChoice equals 'Paper' AND playerChoice equals 'Paper' THEN
*       SET playerWon TO null
*   END CASE
*   CASE computerChoice equals 'Paper' AND playerChoice equals 'Scissors' THEN
*       SET tie TO false
*       SET playerWon TO true
*       PRINT 'You win!'
*   END CASE
*   CASE computerChoice equals 'Scissors' AND playerChoice equals 'Scissors' THEN
*       SET playerWon TO null
*   END CASE
*   CASE computerChoice equals 'Scissors' AND playerChoice equals 'Rock' THEN
*       SET tie TO false
*       SET playerWon TO true
*       PRINT 'You win!'
*   END CASE
*   CASE computerChoice equals 'Paper' AND playerChoice equals 'Rock' THEN
*       SET tie TO false
*       SET playerWon TO false
*       PRINT 'Computer wins!'
*   END CASE
*   CASE computerChoice equals 'Scissors' AND playerChoice equals 'Paper' THEN
*       SET tie TO false
*       SET playerWon TO false
*       PRINT 'Computer wins!'
*   END CASE
*   RETURN playerWon
*   END WHILE
* END FUNCTION
*
* FUNCTION playGame
*   SET playerCounter to 0
*   SET computerCounter to 0
*   SET playerWon TO NULL
*   WHILE (playerCounter less than 4 OR computerCounter less than 4) THEN
*       SET playerWon TO INVOKE playRound
*       CASE playerWon is true THEN
*           SET playerCounter TO playerCounter + 1 ELSE
*           SET computerCounter TO computerCounter + 1
*       END CASE
*   END WHILE
*   CASE playerCounter is greater than computerCounter THEN
*       SET playerWon to true
*       PRINT 'Player won the game!' ELSE
*       SET playerWon to false
*       PRINT 'Computer won the game!'
*   END CASE
* END FUNCTION
*   
*/

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

function disableRpsButtons(boolean){
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
        disableRpsButtons('false');
        displayPlayAgainButton();
        
    }

    return winner;

}

let playerScore = 0;
let computerScore = 0;

const rockBtn = getElement('rock');
rockBtn.addEventListener('click', () => playRound('ROCK'));

const paperBtn = getElement('paper');
paperBtn.addEventListener('click', () => playRound('PAPER'));

const scissorsBtn = getElement('scissors');
scissorsBtn.addEventListener('click', () => playRound('SCISSORS'));

























