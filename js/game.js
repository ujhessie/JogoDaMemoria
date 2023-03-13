const grid = document.querySelector('#grid')
const characters = [
    'cat',
    'elephant',
    'giraffe',
    'hipoppotamus',
    'monkey',
    'mouse'
]

// função para criar elementos
const createElement = (tag, className) => {
    const element = document.createElement(tag)
    element.className = className
    return element
}

let firstCard = ''
let secondCard = ''

const checkEndGame = () => {
    
    const disabledCards = document.querySelectorAll('.disabled-card')

    if (disabledCards.length === 12) {
        alert('Tu ganhou, boy.')
    }

}

const checkCards = () => {
    const firstCharacter = firstCard.getAttribute('data-character')
    const secondCharacter = secondCard.getAttribute('data-character')

    if (firstCharacter === secondCharacter) {
 
        firstCard.firstChild.classList.add('disabled-card')
        secondCard.firstChild.classList.add('disabled-card')

        firstCard = ''
        secondCard = ''

        checkEndGame()

    } else {

        setTimeout(() => {

            firstCard.classList.remove('reveal-card')
            secondCard.classList.remove('reveal-card')

            firstCard = ''
            secondCard = ''

        }, 500)



    }
}

const revealCard = ({target}) => {

    if (target.parentNode.className.includes('reveal-card')) {
        return
    }

    if(firstCard === '') {

        target.parentNode.classList.add('reveal-card')
        firstCard = target.parentNode
        
    } else if (secondCard === '') {

        target.parentNode.classList.add('reveal-card')
        secondCard = target.parentNode

        checkCards()
    }


}

const createCard = (character) => {

    // criando elementos do card e os adcionando tags utilizando a função createElement()
    const card = createElement('div', 'card')
    const front = createElement('div', 'face front')
    const back = createElement('div', 'face back')

    front.style.backgroundImage = `url(../imgs/characters/${character}.png)`

    // montando o card
    card.appendChild(front)
    card.appendChild(back)

    card.addEventListener('click', revealCard)

    card.setAttribute('data-character', character)

    return card
}

const loadCards = () => {

    const duplicates = [ ...characters, ...characters ]

    const shuflleArray = duplicates.sort(() => Math.random() - 0.5)


    shuflleArray.forEach((character) => {

        const card = createCard(character)
        grid.appendChild(card)

    })

}

loadCards()