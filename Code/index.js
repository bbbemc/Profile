function hamberger_toggle() {
    document.querySelector('.nav-links').classList.toggle('active');
}

const text = [" THANACHOT VILAI", " ธนโชติ วิไล"];
const speed = 400;
const eraseSpeed = 50;
const delay = 1500;
let i = 0;
let j = 0;
let forward = true;

function typeWriter() {
    const element = document.getElementById("typed-text")

    if (forward) {
        if (j < text[i].length){
            element.textContent += text[i].charAt(j);
            j++;
            setTimeout(typeWriter, speed);
        } else {
            forward = false
            setTimeout(typeWriter, delay);
        }
    } else {
        if (j > 0) {
            element.textContent = text[i].substring(0, j - 1);
            j--;
            setTimeout(typeWriter, eraseSpeed);
        } else {
            forward = true;
            i = (i + 1) % text.length;
            setTimeout(typeWriter, speed);
        }
    }
}

window.onload = typeWriter;