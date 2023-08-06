const buttons = [...document.querySelectorAll('button')]
let userScore = 0
let computerScore = 0
let testHref = new URLSearchParams(window.location.search)
console.log(testHref.size)
userScore = +testHref.get('userScore')
computerScore = +testHref.get('computerScore')
console.log('получили значение', userScore, computerScore)
buttons.forEach((button, i) => {
    button.addEventListener('click', function () {
        const userChoice = i
        console.log(userChoice)
        const computerChoice = Math.floor(Math.random() * buttons.length)
        console.log(computerChoice)
        if (testHref.size === 0) {
            window.location.href = `./winner.html?user=${userChoice}&computer=${computerChoice}&userScore=0&computerScore=0`
        } else {
            userScore = +testHref.get('userScore')
            computerScore = +testHref.get('computerScore')
            console.log('получили значение', userScore, computerScore)
            window.location.href = `./winner.html?user=${userChoice}&computer=${computerChoice}&userScore=${userScore}&computerScore=${computerScore}`
        }
    })
});
