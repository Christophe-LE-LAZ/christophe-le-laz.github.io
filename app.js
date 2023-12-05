const app = {
    /**
     * Propriétés
     */

    /**
     * Méthodes
     */
  
    init: function () {
      // on attribut à notre const la valeur du bouton nouvelle tâche
      
      app.addClickProjectEvents();
      app.showProject('projet1');
  
    },
  
    addClickProjectEvents: function () {
        const liProjectElList = document.querySelectorAll('#left-zone li');
        
        for (const liProjectEl of liProjectElList) {
            liProjectEl.addEventListener("click", app.handleDisplayProject);
            
        }
      
    },
  
    handleDisplayProject : function (event) {
        event.preventDefault();
        const itemValue = event.currentTarget.id;
        console.log(itemValue)
        // Cacher tous les projets
        app.hideCurrentProject();


        switch (itemValue) {
            case 'p1':
                app.showProject('projet1');
                break;
            case 'p2':
                app.showProject('projet2');
                break;
            case 'p3':
                app.showProject('projet3');
                break;
            case 'p4':
                app.showProject('projet4');
                break;
            // Ajoutez d'autres cas au besoin
        }
    },
  

    hideCurrentProject: function () {
        const projets = ['projet1', 'projet2', 'projet3', 'projet4'];

        projets.forEach(projet => {
            const projetElement = document.querySelector('.content_' + projet);
            if (projetElement && projetElement.style.display !== 'none') {
                projetElement.style.display = 'none';
            }
        });
    },

    showProject: function (projetId) {
        const projetElement = document.querySelector('.content_' + projetId);
        if (projetElement) {
            projetElement.style.display = 'block';
        }
    }
};



// Dès que la page est complètement chargée, on exécute la méthode init rangée dans le "module" task
document.addEventListener("DOMContentLoaded", app.init, );
  
