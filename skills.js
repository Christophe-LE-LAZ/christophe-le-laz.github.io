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
  /**
   * Méthodes
   */

  init: function () {
    // on attribut à notre const la valeur du bouton nouvelle tâche
    app.addClickElH2Competences();
    app.addClickBtnSkillTechniques();
    app.addClickBtnSkillHumaines();
    app.addClickBtnCloseSkillTechniques();
    app.addClickBtnCloseSkillHumaines();
    app.initAnimation();

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

  addClickElH2Competences: function () {
    const h2Competences = document.querySelector("#competences h2");
    h2Competences.addEventListener("click", app.handleShowListCompetences);
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

  handleShowListSkillTechniques: function () {
    app.skillsChoiceContainer.classList.add('skills__choice--container--hidden');
    app.btnElCloseSkill.style.display = "block";
    app.leftSide.classList.add("skills__active");
  },

  handleShowListSkillHumaines: function () {
    app.skillsChoiceContainer.classList.add('skills__choice--container--hidden');
    app.btnElCloseSkill.style.display = "block";
    app.rightSide.classList.add("skills__active");
  },

  handleHiddenListSkillTechniques: function () {
    app.leftSide.classList.remove("skills__active");
    app.btnElCloseSkill.style.display = "none";
    app.skillsChoiceContainer.classList.remove('skills__choice--container--hidden');
       
  },

  handleHiddenListSkillHumaines: function () {
    app.rightSide.classList.remove("skills__active");
    app.btnElCloseSkill.style.display = "none";
    app.skillsChoiceContainer.classList.remove('skills__choice--container--hidden');
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

    const morphTime = 0.8;
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
