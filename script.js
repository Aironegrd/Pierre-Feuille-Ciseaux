let scoreJoueur = 0;
let scoreOrdi = 0;

function jouerTour(choixJoueur, choixOrdi) {
    // Mise en minuscule pour gérer la casse
    choixJoueur = choixJoueur.toLowerCase();
    choixOrdi = choixOrdi.toLowerCase();

    console.log("Tu as choisi : " + choixJoueur);
    console.log("L'ordinateur a choisi : " + choixOrdi);

    if (
        (choixJoueur === "pierre" && choixOrdi === "ciseaux") ||
        (choixJoueur === "ciseaux" && choixOrdi === "feuille") ||
        (choixJoueur === "feuille" && choixOrdi === "pierre")
    ) {
        console.log("✅ Tu gagnes ce tour !");
        scoreJoueur++;
    } else if (choixJoueur === choixOrdi) {
        console.log("➖ Égalité !");
    } else {
        console.log("❌ L'ordinateur gagne ce tour !");
        scoreOrdi++;
    }

    console.log("Score - Toi : " + scoreJoueur + " | Ordinateur : " + scoreOrdi);
}

// Boucle de jeu
while (true) {
    let joueur = prompt("Pierre, Feuille ou Ciseaux ?");
    if (!joueur) break; // Si le joueur annule, on quitte

    // Génération du choix de l'ordinateur
    let random = Math.floor(Math.random() * 3);
    let choixOrdi = ["pierre", "feuille", "ciseaux"][random];

    // Appel de la fonction
    jouerTour(joueur, choixOrdi);

    // Vérification de fin de partie
    if (scoreJoueur === 3) {
        console.log("🏆 BRAVO ! Tu as gagné la partie !");
        scoreJoueur = 0;
        scoreOrdi = 0;
        console.log("🔁 Nouvelle partie !");
    } else if (scoreOrdi === 3) {
        console.log("💻 L'ordinateur a gagné la partie !");
        scoreJoueur = 0;
        scoreOrdi = 0;
        console.log("🔁 Nouvelle partie !");
    }
}