let game = document.querySelector('.game')
let gameText = document.querySelector('.game-text')
let gameBtn = document.querySelector('.game-btn')

let playerNameOne = document.querySelector('.player-name--one')
let gameNameOneText = document.querySelector('.game-name--one---text')
let gameNameOneInput = document.querySelector('.game-name--one---input')

let playerNameTwo = document.querySelector('.player-name--two')
let gameNameTwoText = document.querySelector('.game-name--two---text')
let gameNameTwoInput = document.querySelector('.game-name--two---input')

let playerInputOne = document.querySelector('.player-input--one')
let gameInputOneText = document.querySelector('.game-input--one---text')
let gameInputOneInput = document.querySelector('.game-input--one---input')
let gameInputOneBtn = document.querySelector('.game-input--one---btn')

let errorOne = document.querySelector('.error-one')
let errorTwo = document.querySelector('.error-two')
let errorThree = document.querySelector('.error-three')
let errorFour = document.querySelector('.error-four')

let playerInputTwo = document.querySelector('.player-input--two')
let gameInputTwoText = document.querySelector('.game-input--two---text')
let gameInputTwoInput = document.querySelector('.game-input--two---input')
let gameInputTwoBtn = document.querySelector('.game-input--two---btn')
let gameInputTwoHints = document.querySelector('.game-input--two---hints')

let winner = document.querySelector('.winner')
let winnerText = document.querySelector('.winner-text')
let winnerTextName = document.querySelector('.winner-text--name')


// console.log('kaz korci')

// name declear

let saveOneValue = '';
let saveTwoValue = '';


// // start page 
gameBtn.addEventListener('click', () => {
    game.style.display = 'none'
    playerNameOne.style.display = 'flex'
})

// // player one name input 
gameNameOneInput.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        if (gameNameOneInput.value == '') {
            errorOne.innerHTML = `Input faka rakha jabe na!`;
        } else {


            saveOneValue = gameNameOneInput.value

            playerNameOne.style.display = 'none'
            playerNameTwo.style.display = 'flex'
            errorOne.innerHTML = ''
        }


    }
})

// // player two name input 
gameNameTwoInput.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
        if (gameNameTwoInput.value == '') {
            errorTwo.innerHTML = `Input faka rakha jabe na!`;
        } else {
            saveTwoValue = gameNameTwoInput.value

            playerNameTwo.style.display = 'none'
            playerInputOne.style.display = 'flex'
            gameInputOneText.innerHTML = saveOneValue
            errorTwo.innerHTML = ''

        }


    }
})



// game start player one



gameInputOneBtn.addEventListener('click', () => {
    if (gameInputOneInput.value == '') {
        errorThree.innerHTML = `Input faka rakha jabe na!`;
    } else if (gameInputOneInput.value > 10) {
        errorThree.innerHTML = `10 er beshi newa jabe na`;
    } else {
        playerInputOne.style.display = 'none'
        playerInputTwo.style.display = 'flex'
        gameInputTwoText.innerHTML = saveTwoValue
        errorThree.innerHTML = ''
    }


})

// game start player two


let attempts = 5;

gameInputTwoBtn.addEventListener('click', () => {
    if (gameInputTwoInput.value == '') {
        errorFour.innerHTML = `Input faka rakha jabe na!`;
    } else if (gameInputTwoInput.value > 10) {
        errorFour.innerHTML = `10 er beshi newa jabe na`;
    } else {
        attempts--;
        if (gameInputTwoInput.value == gameInputOneInput.value) {
            winnerTextName.innerHTML = `${saveTwoValue} is winner`
            playerInputTwo.style.display = 'none'
            winner.style.display = 'flex'
            gameInputTwoHints.innerHTML = ''; 
            errorFour.innerHTML = ''
        } else {
            if (attempts > 0) {
                let hint = gameInputTwoInput.value < gameInputOneInput.value ? 'Too low! arektu baran' : 'Too high! arektu koman';
                gameInputTwoHints.innerHTML = hint;
                errorFour.innerHTML = `Hoy nai. You have ${attempts} attempts left.`;
                gameInputTwoInput.value = '' 
            } else {
                winnerTextName.innerHTML = `${saveOneValue} is winner`
                playerInputTwo.style.display = 'none'
                winner.style.display = 'flex'   
                errorFour.innerHTML = ''

                gameInputTwoHints.innerHTML = ''; 
            }
        }
    }
});





