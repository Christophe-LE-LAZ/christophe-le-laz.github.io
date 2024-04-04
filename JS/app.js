const app = {
  /**
   * Propriétés
   */
  btnElSkillTechniques: document.querySelector(".skills .techniques"),
  btnElSkillHumaines: document.querySelector(".skills .humaines"),
  skillsContainer: document.querySelector(".skillsContainer"),
  skillsChoiceContainer: document.querySelector(".skills__choice--container"),
  leftSide: document.querySelector(".leftSide"),
  rightSide: document.querySelector(".rightSide"),
  btnElCloseSkill: document.querySelector("button.button__close"),
  spanBorderRightSideEl: document.querySelectorAll(".span__border"),

  /**
   * Méthodes
   */

  init: function () {
    // on attribut à notre const la valeur du bouton nouvelle tâche
    app.addClickBtnRealisation();
    app.addClickChevronDown();
    app.addClickElH2Competences();
    app.addClickBtnSkillTechniques();
    app.addClickBtnSkillHumaines();
    app.addClickBtnCloseSkillTechniques();
    app.addClickBtnCloseSkillHumaines();
    app.addClickProjectEvents();
    app.showProject("projet1");
    app.initScrollButton();
    app.initAnimation();
    app.addClickBtnScrollUp();
    app.addClickImageToReelSize(); 

  },

  addClickBtnSkillTechniques: function () {
    app.btnElSkillTechniques.addEventListener(
      "click",
      app.handleShowListSkillTechniques
    );
  },

  addClickBtnSkillHumaines: function () {
    app.btnElSkillHumaines.addEventListener(
      "click",
      app.handleShowListSkillHumaines
    );
  },

  addClickBtnCloseSkillTechniques: function () {
    const btnElCloseSkill = document.querySelector("button.button__close");
    btnElCloseSkill.addEventListener(
      "click",
      app.handleHiddenListSkillTechniques
    );
  },

  addClickBtnCloseSkillHumaines: function () {
    const btnElCloseSkill = document.querySelector("button.button__close");
    btnElCloseSkill.addEventListener(
      "click",
      app.handleHiddenListSkillHumaines
    );
  },

  addClickBtnRealisation: function () {
    const liElNavHeader = document.querySelector(
      ".nav__ul li.button__border.button__border--type1"
    );
    liElNavHeader.addEventListener("click", app.handleShowListProjects);
  },
  addClickChevronDown: function () {
    const chevronDownEl = document.querySelector(".container--chevron");
    chevronDownEl.addEventListener("click", app.handleShowListCompetences);
  },
  addClickProjectEvents: function () {
    const liProjectElList = document.querySelectorAll("#left-zone li");

    for (const liProjectEl of liProjectElList) {
      liProjectEl.addEventListener("click", app.handleDisplayProject);
    }
  },

  addClickElH2Competences: function () {
    const h2Competences = document.querySelector("#competences h2");
    h2Competences.addEventListener("click", app.handleShowListCompetences);
  },
  addClickBtnScrollUp: function () {
    const scrollButton = document.getElementById("scrollButton");
    scrollButton.addEventListener("click", app.handleShowHome);
  },

  addClickImageToReelSize: function () {
    const imageToEnlarge = document.querySelector('.picture-zoom');

    imageToEnlarge.addEventListener('click', function() {
      window.open(this.src, '_blank', 'width=auto,height=auto');
    });
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
setTimeout(function () {
        // Ajoutez un retrait en pixels à la fenêtre
        const retraitEnPixels = 50; // ajustez la valeur en fonction de vos besoins
        window.scroll(0, window.scrollY - retraitEnPixels);
      }, 1000); // ajustez la valeur du délai en fonction de vos besoins
    }
  },
  handleShowListCompetences: function (event) {
    const sectionCompetences = document.getElementById("competences");
    if (sectionCompetences) {
      sectionCompetences.scrollIntoView({ behavior: "smooth" });
      setTimeout(function () {
        // Ajoutez un retrait en pixels à la fenêtre
        const retraitEnPixels = 50; // ajustez la valeur en fonction de vos besoins
        window.scroll(0, window.scrollY - retraitEnPixels);
      }, 1000); // ajustez la valeur du délai en fonction de vos besoins
    }
  },
handleShowHome: function (event) {
    const sectionHeader = document.getElementById("header");
    if (sectionHeader) {
      sectionHeader.scrollIntoView({ behavior: "smooth" });
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

  handleShowListSkillTechniques: function () {
    app.skillsChoiceContainer.classList.add(
      "skills__choice--container--hidden"
    );
    app.btnElCloseSkill.style.display = "block";
    app.leftSide.classList.add("skills__active");
  },

  handleShowListSkillHumaines: function () {
    app.skillsChoiceContainer.classList.add(
      "skills__choice--container--hidden"
    );
    app.btnElCloseSkill.style.display = "block";
    app.rightSide.classList.add("skills__active");
app.spanBorderRightSideEl.forEach(function (spanEl) {
      spanEl.style.display = "inline";
    });
  },

  handleHiddenListSkillTechniques: function () {
    app.leftSide.classList.remove("skills__active");
    app.btnElCloseSkill.style.display = "none";
    app.skillsChoiceContainer.classList.remove(
      "skills__choice--container--hidden"
    ); 
  },

  handleHiddenListSkillHumaines: function () {
    app.rightSide.classList.remove("skills__active");
    app.btnElCloseSkill.style.display = "none";
    app.spanBorderRightSideEl.forEach(function (spanEl) {
      spanEl.style.display = "none";
    });
    app.skillsChoiceContainer.classList.remove(
      "skills__choice--container--hidden"
    );
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
            if (window.innerWidth >= 1024) {
            // Utiliser setTimeout pour retarder l'apparition du bouton
            setTimeout(function () {
              scrollButton.style.display = "flex";
            }, 500); // Ajouter un délai de 500 millisecondes (0.5 secondes)
          } }
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

  initAnimation: function () {
    const elts = {
      animateSkill1: document.querySelector(".animateSkill1"),
      animateSkill2: document.querySelector(".animateSkill2"),
    };

    const skillValues = [
      "Écoute Active",
      "Aime Apprendre",
      "Autonome",
      "Esprit d'équipe",
      "Communiquant",
      "Organisé",
      "Sportif",
      "Résiliant",
      "Amusant",
    ];

    const morphTime = 1.5;
    const cooldownTime = 0.25;

    let skillIndex = skillValues.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;

    elts.animateSkill1.textContent =
      skillValues[skillIndex % skillValues.length];
    elts.animateSkill2.textContent =
      skillValues[(skillIndex + 1) % skillValues.length];

    function doMorph() {
      morph -= cooldown;
      cooldown = 0;

      let fraction = morph / morphTime;

      if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
      }

      setMorph(fraction);
    }

    function setMorph(fraction) {
      elts.animateSkill2.style.filter = `blur(${Math.min(
        8 / fraction - 8,
        100
      )}px)`;
      elts.animateSkill2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      fraction = 1 - fraction;
      elts.animateSkill1.style.filter = `blur(${Math.min(
        8 / fraction - 8,
        100
      )}px)`;
      elts.animateSkill1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

      elts.animateSkill1.textContent =
        skillValues[skillIndex % skillValues.length];
      elts.animateSkill2.textContent =
        skillValues[(skillIndex + 1) % skillValues.length];
    }

    function doCooldown() {
      morph = 0;

      elts.animateSkill2.style.filter = "";
      elts.animateSkill2.style.opacity = "100%";

      elts.animateSkill1.style.filter = "";
      elts.animateSkill1.style.opacity = "0%";
    }

    function animate() {
      requestAnimationFrame(animate);

      let newTime = new Date();
      let shouldIncrementIndex = cooldown > 0;
      let dt = (newTime - time) / 1000;
      time = newTime;

      cooldown -= dt;

      if (cooldown <= 0) {
        if (shouldIncrementIndex) {
          skillIndex++;
        }

        doMorph();
      } else {
        doCooldown();
      }
    }

    animate();
  },
};

// Dès que la page est complètement chargée, on exécute la méthode init rangée dans le "module" app
document.addEventListener("DOMContentLoaded", app.init);
