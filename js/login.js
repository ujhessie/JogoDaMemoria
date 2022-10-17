var  inputLogin = document.querySelector('#iinputLogin')
var buttonPlay = document.querySelector('#ibuttonPlay')

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

inputLogin.addEventListener('input', validateLogin)