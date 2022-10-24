var  inputLogin = document.querySelector('#iinputLogin')
var buttonPlay = document.querySelector('#ibuttonPlay')
var form = document.querySelector('#iform')


// validação de login
const validateLogin = ({target}) => {
    if (target.value.length < 3 ) {
        console.log('iiii pegou nao po')
        buttonPlay.setAttribute('disabled', '')
    }
    else {
        console.log('pegou carai')
        buttonPlay.removeAttribute('disabled')
    }
}


// retirar funcionamento de recarregar de submmit
const handleSubmit = (event) => {
    event.preventDefault() // Bloqueia funcionamento de recarregar de um formulário
    console.log(inputLogin.value)
    localStorage.setItem("player", inputLogin.value)
    window.location = 'pages/game.html'
}




//salvar em localstorage


// retirar funcionamento de recarregar de submmit
form.addEventListener('submit', handleSubmit)

// Validação de login
inputLogin.addEventListener('input', validateLogin)