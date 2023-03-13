const input = document.querySelector('#input-text')
const bntPlay = document.querySelector('#btn-play')
const form = document.querySelector('#form')

const validateLogin = ({target}) => {
    if (target.value.length > 2) {
        bntPlay.removeAttribute('disabled')
    }
    else {
        bntPlay.setAttribute('disabled', '')
    }
}

const hSubmit = (event) => {
    event.preventDefault()
    localStorage.setItem('pleyer', input.value)
    window.location = 'pages/game.html'
}


input.addEventListener('input', validateLogin)
form.addEventListener('submit', hSubmit)
console.log(form) 