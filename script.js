var el = document.querySelector("#text");
var text = "Olá! Me chamo Monique Elen.";
var interval = 80;
function showtext(el, text, interval) {
    var char = text.split("").reverse();
    var typer = setInterval(function () {
        if (!char.length) {
            return clearInterval(typer);
        }
        var next = char.pop();
        el.innerHTML += next;
    }, interval);
}
showtext(el, text, interval);

function initScrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute("href");
        const section = document.querySelector(href);
        section.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
    linksInternos.forEach((link) => {
        link.addEventListener("click", scrollToSection);
    });
}
initScrollSuave();
