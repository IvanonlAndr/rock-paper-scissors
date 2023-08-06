const body = document.body
const playAgain = document.querySelector('.play__again')
const userImage = document.querySelector('.your__pick>img')
const computerImage = document.querySelector('.computer__pick>img')
const youWinText = document.querySelector('.you__win')
const computerWinText = document.querySelector('.computer__win')
const params = new URLSearchParams(window.location.search)
if (!params.has('user') || !params.has('computer')) {
    window.location.href = './index.html'
}
const choiceToImageMap = {
    '0': { image: '0.png', alt: 'камень' },
    '1': { image: '1.png', alt: 'бумага' },
    '2': { image: '2.png', alt: 'ножницы' }
}
// || - логическое или
// ! - логическое отрицание
// && - логическое и 
let user, computer, winner
let userScore = 0
let computerScore = 0
user = params.get('user')
// console.log(user)
computer = params.get('computer')
// console.log(computer)
userScore = +params.get('userScore')
computerScore = +params.get('computerScore')
console.log('получили значение', userScore, computerScore)
userImage.src = `./img/${choiceToImageMap[user].image}`
computerImage.src = `./img/${choiceToImageMap[computer].image}`
userImage.alt = choiceToImageMap[user].alt
computerImage.alt = choiceToImageMap[computer].alt

playAgain.addEventListener('click', function () {
    console.log('передаём', userScore, computerScore)
    setTimeout(() => window.location.href = `./index.html?userScore=${userScore}&computerScore=${computerScore}`, 2000)
})

const checkWinner = () => {
    winner = ''
    if (user === computer) {
        winner = 'tie'
    } else if (user === '0' && computer === '1') {
        winner = 'computer'
    } else if (user === '0' && computer === '2') {
        winner = 'you'
    } else if (user === '1' && computer === '0') {
        winner = 'you'
    } else if (user === '1' && computer === '2') {
        winner = 'computer'
    } else if (user === '2' && computer === '0') {
        winner = 'computer'
    } else if (user === '2' && computer === '1') {
        winner = 'you'
    }
    // console.log(winner)
    if (winner === 'tie') {
        youWinText.innerHTML = 'tie'
        computerWinText.innerHTML = 'tie'
        userScore++
        computerScore++
        console.log('ничья', userScore, computerScore)
    } else if (winner === 'you') {
        youWinText.innerHTML = 'you won'
        body.classList.add('you__win')
        userScore++
        console.log('игрок + 1', userScore, computerScore)
    } else {
        computerWinText.innerHTML = 'computer won'
        body.classList.add('computer__win')
        computerScore++
        console.log('компьютер + 1', userScore, computerScore)
    }

    document.title = `${user} : ${computer} ${winner.charAt(0)}`
}

checkWinner()


//0:0 t 1:2 c 1:0 u вывести в title