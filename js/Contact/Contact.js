function ContactDisplay() {
    //document.getElementById("content").innerText = "Contenu pour contact.";
    // Code de votre fonction externe
    //alert("Ceci est une fonction externe !");
   
    document.getElementById("content").innerHTML = `
        
    <head>
    <title>Formulaire de Contact</title>
    </head>
    <body>

        <h2>Formulaire de Contact</h2>

    <form id="contactForm">
        <label for="name">Nom :</label><br>
        <input type="text" id="name" name="name" required><br>

        <label for="email">Email :</label><br>
        <input type="email" id="email" name="email" required><br>

        <label for="message">Message :</label><br>
        <textarea id="message" name="message" required></textarea><br>

        <button type="submit">Envoyer</button>
    </form>

    
    </body>
        `;
       
}
