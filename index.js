const result = document.querySelector('#result span')
const boutons = document.querySelectorAll('.bouton')
const body = document.querySelector('body')
const switchBtn = document.querySelector('.switch')
const calc = document.querySelector('.calculatrice')
const resultat = document.querySelector('#result')
const clear = document.querySelector('#clear')
const egale = document.querySelector('#egale')

// Calculatrice
for (let i = 0; i < boutons.length; i++) {
    boutons[i].onclick = () => {
        if (boutons[i].innerText === 'C')
            result.innerText = '0'
        else if (boutons[i].innerText === '=')
            result.innerText = eval(result.innerText) // Evaluation (calcul) du contenu de l'écran
        else
            if (result.innerText === '0' || result.innerText === '00') {
                result.innerText = boutons[i].innerText
            } else {
                result.innerText = result.innerText + boutons[i].innerText
            }
        //police réduite si nbre caractères > 8   
        if (result.innerText.length > 8) {
            result.classList.add('large')
        } else {
            result.classList.remove('large')
        }
    }
}

// Gestion clear/dark
switchBtn.addEventListener('click', () => {
    body.classList.toggle('active')
    switchBtn.classList.toggle('active')
    calc.classList.toggle('active')
    clear.classList.toggle('clearActive')
    egale.classList.toggle('clearEgale')
    result.classList.toggle('active')
    resultat.classList.toggle('active')
    for (let i = 0; i < boutons.length; i++) {
        boutons[i].classList.toggle('active')
    }
})

// setInterval(() => {
//     navigator.getBattery().then(function (battery) {
//         console.log(battery.level * 100 + '%')
//     })
// }, 1000);