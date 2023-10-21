//global variables
const page1 = document.querySelector('#page1');
const page2 = document.querySelector('#page2');
const page3 = document.querySelector('#page3');
let guess;
const message = document.querySelector('#message');
const num = document.querySelector('#number');
const turnRemaining = document.querySelector('#turnRemaining')
const prevGuess = document.querySelector('#prevGuess') 
let turn;
const allGuesses = []
const gameOver = document.querySelector('#gameOverMessage')
let isGameRunning = false;

startGame()

function startGame(){
    hidePage2();
    hidePage3();
 
}

function hidePage1(){
    page1.style.display = "none";
}

function showPage1(){
    page1.style.display = "";
}
function hidePage2(){
    page2.style.display = "none";
}

function showPage2(){
    page2.style.display = "";
}

function hidePage3(){
    page3.style.display = "none";
}

function showPage3(){
    page3.style.display = "";
}

document.addEventListener('submit',(e)=>{
    e.preventDefault();
    console.log(e);
    if(e.submitter.value === "startGame" && !isGameRunning){
        hidePage1();
        showPage2();
        startNewGame();
        document.querySelector('#inputValue').focus();
        isGameRunning = true;
    }

    else if((e.submitter.value === "Submit") || (e.submitter.value === "startGame" && isGameRunning)){
        if(turn>0){
            guess = document.querySelector('#inputValue');
            //      console.log(typeof value)   
            validateGuess(guess.value.trim());
        }
        else{
            gameEnd()
        }
    }
    else if (e.submitter.value === "Play Again" || e.submitter.value === "Reset" ){
        startNewGame();
    }
    else if(e.submitter.value === "Quit"){
        showPage1();
        hidePage2();
        isGameRunning = false;
    }
})

function validateGuess(value){
    if(value === "")
        displayMessage(`message`,`Please enter a value`,`red`);
    else if(value < 0)
        displayMessage(`message`,`Value can not be less than 0`,`red`)
    else if(value>100)
        displayMessage(`message`,`Value can not be more than 100`,`red`)
    else if(isNaN(value))
        displayMessage(`message`,`Not a number, please enter a number`,`red`)
    else{
        message.style.display = "none";
        value = parseInt(value);
        // console.log(typeof value);
        checkGuess(value);
    }
}

function displayMessage(messOrNum,userMessage,color){
    if(messOrNum =='message'){
        message.textContent = userMessage;
        message.style.display = "";
        message.style.color = color;
    }
    else if(messOrNum == 'number'){
        num.textContent = userMessage;
        num.style.display = "";
        num.style.color = color;
    }
    else if(messOrNum == 'gameOverMessage'){
        gameOver.textContent = userMessage;
        gameOver.style.display = "";
        gameOver.style.color = color;
    }

}

function checkGuess(value){
    if(value === randomNumber){
        displayMessage(`gameOverMessage`,`Correct!!, You WON the GAME`,'green')
        displayMessage(`number`,`Number is ${randomNumber}`,`green`)
        hidePage2();
        showPage3();
    }
    else if(value < randomNumber){
        displayMessage(`message`,`Number is too big, try again`,`blue`);
    }
    else if(value > randomNumber){
        displayMessage(`message`,`Number is too small, try again`,`blue`);
    }
    allGuesses.push(value);
    turn--;
    updateDOM(value);
}

function updateDOM(value){
    // console.log(guess);
    guess.value="";
    guess.focus();
    prevGuess.innerHTML= allGuesses
    turnRemaining.innerHTML = turn;
}

function gameEnd(){
    if(isGameRunning){
        displayMessage(`gameOverMessage`,`Game Over !! :(`,'red');
    }
    hidePage2();
    showPage3();
    isGameRunning = false
}

function startNewGame(){
    turn = 10;
    allGuesses.length=0;
    guess = document.querySelector('#inputValue');
    guess.value = ''
    prevGuess.innerHTML = allGuesses;
    turnRemaining.innerHTML = turn;
    randomNumber = (Math.floor(Math.random()*100) +1)
    console.log(randomNumber);
    message.style.display = "none";
    hidePage3();
    showPage2();
    guess.focus();
}