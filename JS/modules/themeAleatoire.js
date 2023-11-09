const themeAleatoire = {

    arrayTheme : ['classique.tpl.php', 'sportif.tpl.php', 'fun.tpl.php'],
    aleatoire : null,
    theme : null,

    init : function () {
        themeAleatoire.addEvents();
    },

    addEvents : function () {
    themeAleatoire.theme = document.querySelectorAll('.content__container__list__item');
    for (let index = 0; index < themeAleatoire.length -2; index++) {
       themeAleatoire.theme.addEventListener('click', themeAleatoire.hundleReplaceAnimation)
    }
    themeAleatoire.aleatoire = document.querySelector("#aleatoireTheme");
    themeAleatoire.aleatoire.addEventListener('click', themeAleatoire.hundleChoiceTheme)
    },

    hundleChoiceTheme : function (event) {
        event.preventDefault();
        const liClassAnimation = document.querySelector('#aleatoireTheme');
        liClassAnimation.classList.add('tracking-out-expand-fwd');
        // const crochetG = document.querySelector('.content__container:before');
        // const crochetD = document.querySelector('.content__container:after');
        // crochetG.style.display = "none";
        // crochetD.style.display = "none";
        // themeAleatoire.hundleReplaceAnimation(event);
        let randomNumber = Math.floor(Math.random() * (3 - 0) + 0);
        themeAleatoire.aleatoire.href = "/inc/" + themeAleatoire.arrayTheme[randomNumber];
        setTimeout(function() {
            window.location.href = themeAleatoire.aleatoire.href }, 600)
    },

    hundleReplaceAnimation : function (event) {
        event.preventDefault();
        const liClassAnimation = document.querySelector('.content__container__list');
        liClassAnimation.classList.replace('content__container__list', 'tracking-out-expand-fwd');
        const hrefClick = event.target.href;
        setTimeout(function() {
            window.location.href = hrefClick }, 400)
    }
}
document.addEventListener("DOMContentLoaded", themeAleatoire.init);
