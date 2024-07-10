const body = document.querySelector('body')
const btnRed = document.querySelector('.btn-red')
const btnBlue = document.querySelector('.btn-blue')
const btnYellow = document.querySelector('.btn-yellow')

function bgRed () {
    body.classList.remove('bg-blue')
    body.classList.remove('bg-yellow')
    body.classList.add('bg-red')
}

function bgYellow () {
    body.classList.remove('bg-blue')
    body.classList.remove('bg-red')
    body.classList.add('bg-yellow')
}

function bgBlue () {
    body.classList.remove('bg-red')
    body.classList.remove('bg-yellow')
    body.classList.add('bg-blue')
}

btnRed.addEventListener('click', bgRed)
btnYellow.addEventListener('click', bgYellow)
btnBlue.addEventListener('click', bgBlue)