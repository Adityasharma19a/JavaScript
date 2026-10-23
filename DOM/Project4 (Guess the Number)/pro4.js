let randNumber =  parseInt(Math.random() * 100 + 1)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHigh = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.lastResult')

const p = document.createElement('p')

let prevGuess = []
let numGuesses = 1

let playGame = true

if(playGame){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess)
        validateGuess(guess)
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert("Please enter a Valid Number")
    }else if(guess < 1){
        alert("Please enter a number greater that 0")
    }else if(guess > 100){
        alert("Please enter a number less than 100")
    }else{
        prevGuess.push(guess)
        if(numGuesses === 10){
            displayGuess(guess)
            displayMessage(`Game Over. Random number was ${randNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess){
    if(guess === randNumber){
        displayMessage(`You guessed it right`)
        endGame()
    }else if(guess < randNumber){
        displayMessage(`Number is Tooo Low`)
    }else if(guess > randNumber){
        displayMessage(`Nuber is Tooo High`)
    }
}

function displayGuess(guess) {
    userInput.value = ''
    guessSlot.innerHTML += `${guess}, `
    numGuesses++
    remaining.innerHTML = `${11 - numGuesses}`
}

function displayMessage(message){
    lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randNumber =  parseInt(Math.random() * 100 + 1)

        prevGuess = []
        numGuesses = 1

        guessSlot.innerHTML = ''
        remaining.innerHTML = `${10-numGuesses}`

        lowOrHigh.innerHTML = ''
        
        userInput.removeAttribute('disabled')
        p.remove()
        playGame = true
    })
}