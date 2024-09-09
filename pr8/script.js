// const randomNumber = parseInt(Math.random() * 100 + 1);
// console.log(randomNumber)
// const storePreviousGuess = [];
// let numberGuess = 1;
// function valdateGuess(userGuess) {
//     if (isNaN(userGuess)) {
//         alert('please enter a valid number')

//     } else if (userGuess < 1) {
//         alert('please enter a number more than 1')
//         console.log("please enter a number more than 1")
//     } else if (userGuess > 100) {
//         alert("please enter a number less than 100")
//     }

// }
// const submit = document.querySelector("#btn").addEventListener("click", (e) => {
//     const userGuess = document.querySelector("#inputfield").value;
//     console.log(userGuess);
//     if (userGuess == randomNumber) {
//         console.log(alert("Your guess number is right you won"))
//     } else if (userGuess > randomNumber) {
//         console.log(alert("your guess number is high "))
//     } else if (userGuess < randomNumber) {
//         console.log(alert("your guess number is low"))
//     } else if (numberGuess === 11) {
//         console.log(alert(`Game Over . Random number was ${numberGuess}`))
//     }
//     storePreviousGuess.push(userGuess);
//     console.log(`previous guess is ${storePreviousGuess}`);
//     const forshowpreviousguess = document.querySelector("#forshowpreviousguess")
//     forshowpreviousguess.innerHTML = `[${storePreviousGuess}]`;
//     valdateGuess();
// })
// valdateGuess();


let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector("#btn")
const userInput = document.querySelector("#inputfield")
const guessSlot = document.querySelector("#forshowpreviousguess")
const remaining = document.querySelector("#lastRsult")
const loworHi = document.querySelector("#loworHi")
const resutlparas = document.querySelector(".resutlparas")

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1;

let playGame = true;
if (playGame) {
    submit.addEventListener("click", function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value)
        console.log(randomNumber)
        console.log(guess)

        validateGuess(guess)
    })
}

function validateGuess(guess) {
    if (isNaN(guess)) {
        alert('please enter a valid number')

    } else if (guess < 1) {
        alert('please enter a number more than 1')
    } else if (guess > 100) {
        alert("please enter a number less than 100")
    }
    else {
        prevGuess.push(guess)
        console.log(prevGuess)
        if (numGuess === 11) {
            displayGuess(guess)
            displayMessage(`Game Over : Random number was ${randomNumber}`)
            endGame()
        } else {
            displayGuess(guess)
            checkGuess(guess)
        }

    }

    // checkGuess(guess)

}

function checkGuess(guess) {
    if (guess == randomNumber) {
        displayMessage("Your guess number is right you won")
        endGame();
    } else if (guess > randomNumber) {
        displayMessage("your guess number is TOOOO high ")
    } else if (guess < randomNumber) {
        displayMessage("your guess number is TOOOO low")
    }
}
function displayGuess(guess) {
    userInput.value = ""
    guessSlot.innerHTML += `${guess} ,  `
    numGuess++;
    remaining.innerHTML = `${12 - numGuess}`
}

function displayMessage(message) {
    loworHi.innerHTML = `<h2>${message}</h2>`
    // loworHi.innerHTML = "kamla";

}

function endGame() {
    //     guess === randomNumber;
    // guessSlot.value = "";
    // remaining.value = "";
    userInput.value = ""
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id ="newGame">Start new Game </h2>`;
    resutlparas.appendChild(p)
    playGame = false;
    newGame()

}

function newGame() {
    const newGamebutton = document.querySelector('#newGame').addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1;
        guessSlot.innerHTML = "";
        remaining.innerHTML = `${12 - numGuess}`
        userInput.removeAttribute('disabled')
        resutlparas.removeChild(p)
        playGame = true

    })
}

