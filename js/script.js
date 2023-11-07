
document.addEventListener("DOMContentLoaded", function() {
    // Gestion des clics sur les onglets pour changer le contenu affiché
    document.getElementById("willToolTab").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("content").innerHTML = `
        <div class="under-construction">
            <h2>Section en Cours de Développement</h2>
            <p>Nous travaillons activement sur le contenu de cette partie du site. Merci de votre patience !</p>
            <a href="javascript:void(0);" id="goto-cv">Consulter l'onglet CV</a>
        </div>
    `;

    // Ajouter un écouteur d'événements sur le nouveau lien pour appeler CVDisplay quand il est cliqué
    document.getElementById("goto-cv").addEventListener("click", function() {
        CVDisplay(); // Cette fonction met à jour le contenu pour afficher le CV
    });
    });

    document.getElementById("willContactTab").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("content").innerHTML = `
        <div class="under-construction">
            <h2>Section en Cours de Développement</h2>
            <p>Nous travaillons activement sur le contenu de cette partie du site. Merci de votre patience !</p>
            <a href="javascript:void(0);" id="goto-cv">Consulter l'onglet CV</a>
        </div>
    `;

    // Ajouter un écouteur d'événements sur le nouveau lien pour appeler CVDisplay quand il est cliqué
    document.getElementById("goto-cv").addEventListener("click", function() {
        CVDisplay(); // Cette fonction met à jour le contenu pour afficher le CV
    });
    });

    document.getElementById("willCVTab").addEventListener("click", function(event) {
        event.preventDefault();
        CVDisplay();
        document.getElementById("content").innerText = "Contenu pour cv.";
    });
});


function showContent(sectionId) {
    // Hide all content sections
    document.querySelectorAll('.content-section').forEach(function(section) {
        section.classList.add('hidden');
    });

    // Show the selected section
    const sectionToShow = document.getElementById(sectionId);
    if (sectionToShow) {
        sectionToShow.classList.remove('hidden');
    }
}
