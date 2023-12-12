const app = {
  /**
   * Propriétés
   */

  /**
   * Méthodes
   */

  init: function () {
    // on attribut à notre const la valeur du bouton nouvelle tâche
    app.addClickBtnRealisation();
    app.addClickChevronDown();
    app.addClickElH2Competences();
    app.addClickProjectEvents();
    app.showProject("projet1");
    app.initScrollButton();
  },

  addClickBtnRealisation: function () {
    const liElNavHeader = document.querySelector(".nav--ul li.button.type1");
    liElNavHeader.addEventListener("click", app.handleShowListProjects);
  },
  addClickChevronDown: function () {
    const chevronDownEl= document.querySelector(".container--chevron");
    chevronDownEl.addEventListener("click", app.handleShowListCompetences);
  },
  addClickProjectEvents: function () {
    const liProjectElList = document.querySelectorAll("#left-zone li");

    for (const liProjectEl of liProjectElList) {
      liProjectEl.addEventListener("click", app.handleDisplayProject);
    }
  },

  addClickElH2Competences: function () {
    const h2Competences = document.querySelector(".section--skills h2");
    h2Competences.addEventListener("click", app.handleShowListCompetences);
  },


  handleDisplayProject: function (event) {
    const itemValue = event.currentTarget.id;
    // Cacher tous les projets
    app.hideCurrentProject();

    switch (itemValue) {
      case "p1":
        app.showProject("projet1");
        break;
      case "p2":
        app.showProject("projet2");
        break;
      case "p3":
        app.showProject("projet3");
        break;
      case "p4":
        app.showProject("projet4");
        break;
      // Ajoutez d'autres cas au besoin
    }
  },
  handleShowListProjects: function (event) {
   
    const sectionRealisation = document.getElementById("realisations");
    if (sectionRealisation) {
      sectionRealisation.scrollIntoView({ behavior: "smooth" });
    }
  },
  handleShowListCompetences: function (event) {
    const sectionCompetences = document.getElementById("competences");
    if (sectionCompetences) {
      sectionCompetences.scrollIntoView({ behavior: "smooth" });
    }
  },
  hideCurrentProject: function () {
    const projets = ["projet1", "projet2", "projet3", "projet4"];

    projets.forEach((projet) => {
      const projetElement = document.querySelector(".content_" + projet);
      if (projetElement && projetElement.style.display !== "none") {
        projetElement.style.display = "none";
      }
    });
  },

  showProject: function (projetId) {
    const projetElement = document.querySelector(".content_" + projetId);
    if (projetElement) {
      projetElement.style.display = "block";
    }
  },
  initScrollButton: function () {
    const scrollButton = document.getElementById("scrollButton");
    if (scrollButton) {
      // Cacher le bouton au début
      scrollButton.style.display = "none";

      // Récupérer la section avec la class 'name--technology'
      const sceneSection = document.querySelector(".name--technology");

      // Variable pour suivre la direction du défilement
      let lastScrollTop = window.scrollY || document.documentElement.scrollTop;

      // Ajouter un écouteur d'événement pour le scroll
      window.addEventListener("scroll", function () {
        // Récupérer la position actuelle du défilement
        const scrollTop = window.scrollY || document.documentElement.scrollTop;

        // Vérifier si la section 'scene' est visible dans la fenêtre
        const sceneRect = sceneSection.getBoundingClientRect();
        if (sceneRect.top < window.innerHeight && sceneRect.bottom >= 0) {
          // Afficher le bouton si la section est visible et l'utilisateur défile vers le bas
          if (scrollTop > lastScrollTop) {
            // Utiliser setTimeout pour retarder l'apparition du bouton
            setTimeout(function () {
              scrollButton.style.display = "flex";
            }, 500); // Ajouter un délai de 500 millisecondes (0.5 secondes)
          }
        } else {
          // Cacher le bouton si la section n'est pas visible ou si l'utilisateur remonte
          // Utiliser setTimeout pour retarder la disparition du bouton
          setTimeout(function () {
            scrollButton.style.display = "none";
          }, 500); // Ajouter un délai de 500 millisecondes (0.5 secondes)
        }

        // Mettre à jour la position de défilement
        lastScrollTop = scrollTop;
      });
    }
  },
};

// Dès que la page est complètement chargée, on exécute la méthode init rangée dans le "module" task
document.addEventListener("DOMContentLoaded", app.init);
