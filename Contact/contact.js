//===================================== BOUTON ENVOYER FORMULAIRE CONTACT =====================================//

// Script pour gérer l'envoi du formulaire de contact
document.addEventListener('DOMContentLoaded', function() { // S'assurer que le DOM est chargé avant d'exécuter le script
    const form = document.querySelector('form'); // Sélectionner le formulaire
    const envoyerBtn = document.querySelector('button[type="submit"]') || document.querySelector('#envoyer'); // Sélectionner le bouton envoyer
    
    // Ajouter un écouteur d'événement pour le clic sur le bouton envoyer
    envoyerBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Empêcher le comportement par défaut de soumission du formulaire (rechargement de la page)

        // Récupération des données du formulaire
        const formData = new FormData(form);  // Créer un objet FormData à partir du formulaire pour récupérer les données
        const data = {}; // Objet pour stocker les données du formulaire
        
        // Parcourir les entrées du formulaire et les ajouter à l'objet data
        for (let [key, value] of formData.entries()) {
            data[key] = value; // Ajouter chaque paire clé-valeur à l'objet data
        }
            
        // Affichage des données dans la console (pour vérification)
        console.log('Données du formulaire:', data);
            
        // Afficher un message de succès à l'utilisateur  
        alert('Formulaire envoyé avec succès!');

        form.reset(); // Réinitialiser le formulaire après l'envoi
    });
});

