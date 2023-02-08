const advice = document.querySelector('.advice')
const id = document.querySelector('.id')
const diceBtn = document.querySelector('.dice')

function fetchAdvice() {
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(response => {
        console.log(advice)
        console.log(id)
        console.log(response)
        advice.innerHTML = `"${response.slip.advice}"`;
        id.innerHTML = `${response.slip.id}`;
    })
}


diceBtn.addEventListener('click', fetchAdvice)
fetchAdvice();