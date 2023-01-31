function randomRGB() {
    const r = Math.floor(Math.random() * 20)
    const g = Math.floor(Math.random() * 35)
    const b = Math.floor(Math.random() * 150)
    return `rgb(${r}, ${g}, ${b})`
}

const letters = document.querySelectorAll('.letter');
const intervalid = setInterval(function() {
    for (let letter of letters) {
        letter.style.color = randomRGB();
    }
}, 700);