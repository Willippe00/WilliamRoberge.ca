// Dans autre.js
function maFonctionExterne() {
    // Code de votre fonction externe
    //alert("Ceci est une fonction externe !");
    document.getElementById("content").innerHTML = `
        
    <header>
    <h1>Votre Nom</h1>
    <p>Étudiant en génie informatique</p>
    <p>À la recherche d'un stage</p>
</header>

<section id="about">
    <h2>À propos de moi</h2>
    <p>Étudiant en génie informatique passionné par le développement de logiciels et les technologies de pointe.</p>
</section>

<section id="education">
    <h2>Formation</h2>
    <ul>
        <li>
            <h3>Nom de l'université</h3>
            <p>Programme de génie informatique</p>
            <p>Date d'obtention prévue : [Mois Année]</p>
        </li>
        <!-- Ajoutez d'autres éléments de liste pour chaque formation -->
    </ul>
</section>

<section id="skills">
    <h2>Compétences techniques</h2>
    <ul>
        <li>Langages de programmation : C++, Python, Java</li>
        <li>Développement web : HTML, CSS, JavaScript</li>
        <li>Bases de données : SQL</li>
        <li>Frameworks : [Ajoutez les frameworks pertinents]</li>
        <!-- Ajoutez d'autres compétences techniques -->
    </ul>
</section>

<section id="projects">
    <h2>Projets personnels</h2>
    <ul>
        <li>
            <h3>Nom du projet 1</h3>
            <p>Description du projet 1. Mentionnez les technologies utilisées et les réalisations clés.</p>
        </li>
        <li>
            <h3>Nom du projet 2</h3>
            <p>Description du projet 2. Mentionnez les technologies utilisées et les réalisations clés.</p>
        </li>
        <!-- Ajoutez d'autres projets personnels pertinents -->
    </ul>
</section>

<section id="contact">
    

    <section id="contact">
    <h2>Contact</h2>
    <p>Email : votre@email.com</p>
    <p>Téléphone : +123456789</p>
    <!-- Ajoutez une classe au lien et à l'image LinkedIn -->
    <a href="https://ca.linkedin.com/in/william-roberge-914220290" target="_blank" class="linkedin-link">
        <img src="media/linkedin.png" alt="Logo LinkedIn" class="linkedin-logo">
    </a>
</section>


        
        `;
}
