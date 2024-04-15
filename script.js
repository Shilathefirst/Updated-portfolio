// Typing effect for introduction
const typedTextSpan = document.querySelector('.typing-text');
const textArray = ['Web Designer', 'Web Developer', 'Graphic Designer'];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});


const navbarLinks = document.querySelectorAll('nav ul li a');

navbarLinks.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.classList.add('animated', 'pulse'); 
    });

    link.addEventListener('animationend', () => {
        link.classList.remove('animated', 'pulse');
    });
});


