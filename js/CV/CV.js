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
            <button id="experience-btn">Experience</button>
            <button id="projects-btn">Extra-curricular</button>
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
        <div class="experience">
                <h2>CAE - Développeur C++ CGF</h2>
                <h3>Premier Stage Professionnel</h3>
                <p><strong>Durée:</strong> septembre 2023 - décembre 2023</p>
                <p><strong>Lieu:</strong> Montréal, Canada</p>
                <h4>Responsabilités:</h4>
                <ul>
                    <li>Développement de composants logiciels en C++ pour des simulateurs de vol.</li>
                    <li>Participation à la conception de systèmes de génération de forces (CGF) pour l'entraînement au combat.</li>
                    <li>Intégration et tests de modules logiciels dans des environnements de simulation.</li>
                    <li>Collaboration étroite avec des ingénieurs et des développeurs pour améliorer les fonctionnalités des simulateurs.</li>
                </ul>
                <div class="bandeau"></div>
                <h4>Compétences acquises: c++, gitHub, XML, Visual Studio</h4>
                <ul>
                    <li>Programmation avancée en C++ et utilisation des dernières fonctionnalités du langage.</li>
                    <li>Compréhension approfondie des systèmes CGF et de leur importance dans la simulation de combat aérien.</li>
                    <li>Expérience en développement collaboratif au sein d'une équipe agile.</li>
                    <li>Capacité à travailler dans un environnement multiculturel et à communiquer efficacement en anglais et en français.</li>
                </ul>
            </div>
        `;
    });    

    document.getElementById('projects-btn').addEventListener('click', () => {
        document.getElementById('main-content').innerHTML = `
        <section id="student-involvement">
    <h2>IMPLICATION ÉTUDIANTE</h2>

    <div class="experience">
        <h3>JDIS</h3>
        <p>septembre 2023 – à maintenant</p>
        <p>Jeux et défis informatiques de Sherbrooke</p>
        <h4>VP Commandite</h4>
        <ul>
            <li>Mettre à jour l’accord de commandite</li>
            <li>Contacter les compagnies pour avoir des accords de commandite</li>
            <li>Contacter les compagnies pour avoir des midis-conférence</li>
            <li>Contacter les compagnies pour avoir des JDIS Games</li>
        </ul>
    </div>

    <h2>PROJET Personnel</h2>

    <div class="personal-project">
        <h3>Développement de système de scraping de données et de traitement de données en Python</h3>
        <ul>
            <li>Maîtrise du scraping de données web via Selenium</li>
            <li>Expérience en stockage de données avec PostgreSQL</li>
            <li>Compétence en traitement d'image en utilisant la bibliothèque skimage</li>
            <li>Capacité à présenter des résultats dans des tableurs Excel à l'aide d'openpyxl</li>
        </ul>
    </div>

    <div class="personal-project">
        <h3>Développement de sites web</h3>
        <ul>
            <li>Mise en place d'un serveur auto-hébergé sous Apache</li>
            <li>Gestion d'enregistrements auprès de différents DNS</li>
            <li>Maîtrise du développement front-end avec HTML, CSS et JavaScript</li>
            <li>Utilisation de Cloudflare pour l'optimisation et la sécurité</li>
            <li>Conception et développement d'APIs avec Flask</li>
        </ul>
    </div>

    <div class="personal-project">
        <h3>Développement systèmes embarqués Arduino</h3>
        <p>Programmation de système d’éclairage asservi (DMX)</p>
    </div>

    <h2>INTÉRÊTS</h2>

    <div class="interests">
        <h3>Participation à des compétions informatique</h3>
        <ul>
            <li>Participation au JDIS Game 2023</li>
            <li>Participation au UNITEDCTF 2023</li>
            <li>Qualifié pour le COVEO BLITZ 2024</li>
        </ul>
    </div>
</section>

        `;
    });
    
    document.getElementById('contact-btn').addEventListener('click', () => {
        document.getElementById('main-content').innerHTML = `
        <section id="cv-contact">
    

    <section id="contact">
    <h2>Contact</h2>
    <p>Email : william.roberge.wr@gmail.com</p>
    <p>Email : william.roberge4@USherbrooke.ca</p>
    <div class="bandeau"></div>
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
