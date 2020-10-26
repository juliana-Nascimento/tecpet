function scrollSuave() {
    const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

    function scrollToSection(event) {
        event.preventDefault();
        const href = event.currentTarget.getAttribute('href');
        const section = document.querySelector(href);

        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });

        console.log(section);
    }

    linksInternos.forEach((link) => {
        link.addEventListener('click', scrollToSection);
    });

}

scrollSuave();

function onScrollMenu (){

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    const menu = document.getElementById("menu js-menu");
    if (document.documentElement.scrollTop > menu.offsetTop) {
        menu.style.position = "fixed";
        menu.style.top = "0";
    } else {
        menu.style.position = "relative"

    }
}
}
onScrollMenu();

