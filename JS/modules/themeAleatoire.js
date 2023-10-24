const themeAleatoire = {

    arrayTheme : ['classique.php', 'sportif.php', 'fun.php'],
    aleatoire : null,

    init : function () {
        themeAleatoire.addEvents();
    },

    addEvents : function () {
    themeAleatoire.aleatoire = document.querySelector("#aleatoireTheme");
    themeAleatoire.aleatoire.addEventListener('click', themeAleatoire.hundleChoiceTheme)
    console.log(themeAleatoire.aleatoire)
    },

    hundleChoiceTheme : function (event) {
        let randomNumber = Math.floor(Math.random() * (3 - 0) + 0);
        themeAleatoire.aleatoire.href = "../PHP/" + themeAleatoire.arrayTheme[randomNumber];
    }
}
document.addEventListener("DOMContentLoaded", themeAleatoire.init);
