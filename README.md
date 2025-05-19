 Pierre-Feuille-Ciseaux (Projet JavaScript débutant)

Bienvenue sur mon **tout premier projet JavaScript** ! 🎉  
Ce projet a été réalisé dans le cadre du parcours _Foundations_ de [The Odin Project](https://www.theodinproject.com/), et c’est ma première vraie plongée dans le monde du **JavaScript**.  
C’est un jeu simple, mais super formateur : le classique **Pierre-Feuille-Ciseaux**, en version console.

---

## 🎯 Objectif du projet

L’objectif est de coder un jeu jouable dans la **console du navigateur** où :
- L’utilisateur joue contre l’ordinateur
- Le jeu se joue en plusieurs tours
- Le premier à gagner **3 manches** remporte la partie
- Les scores sont comptabilisés et remis à zéro après chaque partie

---

## 🔧 Comment ça fonctionne ?

### 1. Le joueur entre son choix via `prompt()`  
On lui demande d’écrire "pierre", "feuille" ou "ciseaux".  
→ Pas de panique : **les majuscules/minuscules sont ignorées** (ex: `PIERRE`, `Pierre`, `pIeRrE` sont tous valides).

### 2. L’ordinateur fait un choix au hasard  
Un nombre aléatoire est généré (entre 0 et 2), qui correspond à une option parmi les 3.

### 3. Le jeu compare les deux choix  
- Le joueur gagne si ses choix battent ceux de l’ordi (selon les règles classiques)
- Une égalité est possible
- Sinon, l’ordinateur gagne le tour

### 4. Les scores sont mis à jour  
Chaque victoire ajoute 1 point au joueur ou à l’ordi.  
Le premier à **3 points** gagne la partie, et les scores sont ensuite **réinitialisés automatiquement**.

---

## 🖥️ Où voir le jeu ?

Tu peux tester le jeu :
- En ouvrant le fichier HTML dans ton navigateur
- Puis en ouvrant la **console du navigateur** (`F12` → onglet "Console")
- Ensuite, suis les instructions !

---

## 💡 Ce que j’ai appris

✅ Manipuler les variables  
✅ Utiliser les fonctions pour organiser mon code  
✅ Gérer les boucles, conditions et l’entrée utilisateur  
✅ Travailler avec `prompt()`, `console.log()` et `Math.random()`  
✅ Structurer un mini-jeu logique et interactif

---

## 🚀 Prochaines étapes

Voici ce que je pourrais améliorer dans une prochaine version :
- Ajouter une **interface graphique en HTML/CSS**
- Intégrer des **boutons cliquables** au lieu de `prompt()`
- Afficher les scores en temps réel dans la page
- Gérer les erreurs de saisie (ex: si l’utilisateur écrit "pierres" ou laisse vide)

---

## 🙌 Remerciements

Un grand merci à **The Odin Project** pour la qualité de leur contenu, et à moi-même (oui 😄) pour avoir relevé ce premier défi de code !

---

📁 Ce projet est une première étape, mais pas la dernière. C’est un petit pas pour un dev... mais un grand pas pour ma progression.