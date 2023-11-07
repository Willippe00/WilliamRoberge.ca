// Dans autre.js
function CVDisplay() {
    // Code de votre fonction externe
    //alert("Ceci est une fonction externe !");
   
    document.getElementById("content").innerHTML = `
        
    <header id="cv-header">
    <h1>William Roberge</h1>
    <p>Étudiant en génie informatique</p>
    </header>

    <div class="cv-container">
        <aside class="sidebar">
            <!-- Boutons pour la barre latérale -->
            <button id="about-btn">À propos de moi</button>
            <button id="education-btn">Formation</button>
            <button id="skills-btn">Compétences</button>
            <button id="experience-btn">Formation</button>
            <button id="projects-btn">Project</button>
            <button id="contact-btn">Contact</button>
            
        </aside>

        <!-- Contenu Principal -->
        <main id="main-content">
            <!-- Les sections seront injectées ici -->
        </main>
    </div>
    

        
        `;
        attachButtonListeners();
}

function attachButtonListeners() {
    document.getElementById('about-btn').addEventListener('click', () => {
        document.getElementById('main-content').innerHTML = `
        <section id="about">
        <h2>À propos de moi</h2>
        <p>Étudiant au Baccalauréat en génie informatique de L’Université de Sherbrooke. Excellent communicateur,
        sens des priorités et grand intérêt pour tout ce qui touche l’informatique. Langue française de naissance ayant
        acquis une grande facilité en langue anglaise et espagnole.
        Principalement orienté vers l&#39;action, le service, la rentabilité et le goût d’apprendre. Capacité démontrée à
        initier et gérer le changement dans une perspective d&#39;amélioration continue et de croissance. Collaborateur
        enthousiaste travaillant selon le principe que l’excellence mène au succès.</p>

    
    </section>
        `;
    });

    document.getElementById('education-btn').addEventListener('click', () => {
        document.getElementById('main-content').innerHTML = `
        <section id="cv-education">
        <h2>Formation</h2>
        <ul>
            <li>
                <h3>Université de Sherbrooke</h3>
                <p>Baccalauréat en génie informatique</p>
                <p>Date d'obtention prévue : 2026</p>
            </li>
            <div class="bandeau"></div>
            <li>
                <h3>CÉGEP Lionel-Groulx</h3>
                <p>Sciences, informatique et mathématique</p>
                <p>2020 - 2022</p>
            </li>
            
        </ul>
    </section>
        `;
    });

    document.getElementById('skills-btn').addEventListener('click', () => {
        document.getElementById('main-content').innerHTML = `
        <section id="skills">
        <h2>Compétences techniques</h2>
        <ul>
            <li>Langages de programmation : C#, C++, C, java, Python</li>
            <li>Développement web : HTML, CSS, JavaScript</li>
            <div class="bandeau"></div>
            <li>Bases de données : SQL</li>
            <li>Frameworks : QT, Flask</li>
            <div class="bandeau"></div>
            <li>Burautique : Word, PowerPoint, Excel, Git hub, Altium, Teams,  Solid  Work</li>
        </ul>
        
        </section>
        `;
    });    

    document.getElementById('experience-btn').addEventListener('click', () => {
        document.getElementById('main-content').innerHTML = `
        <section id="skills">
        <h2>Compétences techniques</h2>
        <ul>
            <li>Langages de programmation : C#, C++, C, java, Python</li>
            <li>Développement web : HTML, CSS, JavaScript</li>
            <li>Bases de données : SQL</li>
            <li>Frameworks : QT, Flask</li>
            <li>Burautique : Word, PowerPoint, Excel, Git hub, Altium, Teams,  Solid  Work</li>
        </ul>
        </section>
        `;
    });    

    document.getElementById('projects-btn').addEventListener('click', () => {
        document.getElementById('main-content').innerHTML = `
        <section id="skills">
        <h2>Compétences techniques</h2>
        <ul>
            <li>Langages de programmation : C#, C++, C, java, Python</li>
            <li>Développement web : HTML, CSS, JavaScript</li>
            <li>Bases de données : SQL</li>
            <li>Frameworks : QT, Flask</li>
            <li>Burautique : Word, PowerPoint, Excel, Git hub, Altium, Teams,  Solid  Work</li>
        </ul>
        </section>
        `;
    });
    
    document.getElementById('contact-btn').addEventListener('click', () => {
        document.getElementById('main-content').innerHTML = `
        <section id="cv-contact">
    

    <section id="contact">
    <h2>Contact</h2>
    <p>Email : william.roberge.wr@gmail.com</p>
    <!-- Ajoutez une classe au lien et à l'image LinkedIn -->
    <a href="https://ca.linkedin.com/in/william-roberge-914220290" target="_blank" class="linkedin-link">
        <img src="media/linkedin.png" alt="Logo LinkedIn" class="linkedin-logo">
    </a>

    <a href="https://github.com/Willippe00" target="_blank" class="github-link">
        <img src="media/github-mark.png" alt="Logo GitHub" class="Github-logo">
    </a>
    </section>
        `;
    });    
}

document.addEventListener("DOMContentLoaded", function() {
    // Configurez ici d'autres gestionnaires pour les onglets ou les boutons initiaux si nécessaire
    document.getElementById("willCVTab").addEventListener("click", function(event) {
        event.preventDefault();
        CVDisplay();
    });
});
