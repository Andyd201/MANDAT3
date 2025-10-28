//===================================== BOUTON ENVOYER FORMULAIRE CONTACT =====================================//

document.addEventListener('DOMContentLoaded', () => { //met sur écoute le chargement complet du DOM
  const form = document.querySelector('form'); // sélectionne le formulaire

  form.addEventListener('submit', (event) => { // écoute l'événement de soumission du formulaire
    // vient vérifier la validité du formulaire
    if (!form.checkValidity()) {
      event.preventDefault(); // empêche rechargement        
      form.reportValidity();  // affiche les messages d'erreur        
      return;                          
    }

    event.preventDefault();  // empêche le rechargement de la page
    const data = Object.fromEntries(new FormData(form).entries()); // récupère les données du formulaire
    console.log('Données du formulaire :', data); // affiche les données dans la console

    alert('Formulaire envoyé avec succès!'); // affiche une alerte de succès
    form.reset(); // réinitialise le formulaire
  });
});
   
