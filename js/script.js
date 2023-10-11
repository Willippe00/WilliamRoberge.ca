
document.addEventListener("DOMContentLoaded", function() {
    // Gestion des clics sur les onglets pour changer le contenu affiché
    document.getElementById("willToolTab").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("content").innerText = "Contenu pour WillTool.";
    });

    document.getElementById("willContactTab").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("content").innerText = "Contenu pour WillContact.";
    });

    document.getElementById("willCVTab").addEventListener("click", function(event) {
        event.preventDefault();
        document.getElementById("content").innerText = "Contenu pour WillCV.";
    });
});
