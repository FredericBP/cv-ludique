'use strict';
window.addEventListener('DOMContentLoaded', function() {
    
    // CHOIX DANS LES DIFFERENTS MENU DU JEU

    // MENU PRINCIPAL DE L'ECRAN D'ACCUEIL

    // MENU PRINCIPAL - CHOIX "COMMENCER UNE PARTIE"
    window.document.getElementsByClassName('commencerPartie')[1].addEventListener('click', function() {
        initialisation.niveau1(150, 90, 1, 0, 0);
    }, false);


    // MENU IN-GAME

    // MENU IN-GAME - GESTION DE L'OUVERTURE ET LA FERMETURE DU BOUTON DU MENU IN-GAME
    window.document.getElementById('menu').className = 'ferme';
    window.document.getElementById('boutonMenu').addEventListener('click', function() {
        let affichageMenu = window.document.getElementById('menu').className;

        if (affichageMenu === 'ferme') {
            window.document.getElementById('menu').className = 'ouvert';

            objectifs.arretDecompteTemps(objectifs.idSetIntervalDecompteTemps);
        } else {
            window.document.getElementById('menu').className = 'ferme';

            var idSetIntervalDecompteTemps = objectifs.decompteTemps(objectifs.secondesRestantes);
            objectifs.idSetIntervalDecompteTemps = idSetIntervalDecompteTemps;
        }
    }, false);

    // MENU IN-GAME - CHOIX "REPRENDRE LA PARTIE"
    window.document.getElementById('reprendrePartie').addEventListener('click', function() {
        window.document.getElementById('menu').className = 'ferme';
        
        var idSetIntervalDecompteTemps = objectifs.decompteTemps(objectifs.secondesRestantes);
        objectifs.idSetIntervalDecompteTemps = idSetIntervalDecompteTemps;
    }, false);

    // MENU IN-GAME - CHOIX "RECOMMENCER LE NIVEAU"
    window.document.getElementsByClassName('commencerPartie')[0].addEventListener('click', function() {
        initialisation.niveau1(150, 90, 1, 0, 0);
        window.document.getElementById('menu').className = 'ferme';
    }, false);

    // MENU IN-GAME - CHOIX "REVENIR A L'ECRAN D'ACCUEIL"
    window.document.getElementsByClassName('revenirMenuPrincipal')[0].addEventListener('click', function() {
        initialisation.ecranAccueil();
        window.document.getElementById('menu').className = 'ferme';
    }, false);


    // MENU ECRAN DE REUSSITE

    // MENU REUSSITE - CHOIX "REFAIRE UNE PARTIE"
    window.document.getElementsByClassName('commencerPartie')[2].addEventListener('click', function() {
        initialisation.niveau1(150, 90, 1, 0, 0);
    }, false);

    // MENU REUSSITE - CHOIX "REVENIR A L'ECRAN D'ACCUEIL"
    window.document.getElementsByClassName('revenirMenuPrincipal')[1].addEventListener('click', function() {
        initialisation.ecranAccueil();
    }, false);
    
    
    // MENU ECRAN GAME OVER

    // MENU GAME OVER - CHOIX "REESSAYER"
    window.document.getElementsByClassName('commencerPartie')[3].addEventListener('click', function() {
        initialisation.niveau1(150, 90, 1, 0, 0);
    }, false);

    // MENU GAME OVER - CHOIX "REVENIR A L'ECRAN D'ACCUEIL"
    window.document.getElementsByClassName('revenirMenuPrincipal')[2].addEventListener('click', function() {
        initialisation.ecranAccueil();
    }, false);
    
    
    // EN COURS DE PARTIE
    
    // NIVEAU 1 - GESTION DE L'AGRANDISSEMENT ET RETRECISSEMENT DU CADRE EN BAS A GAUCHE AFFICHANT LA PROGRESSION DES MORCEAUX DE CV RETROUVES
    window.document.getElementById('morceauxCvDansNiveau').className = 'morceauxCv reduit';
    window.document.getElementById('morceauxCvDansNiveau').addEventListener('click', function() {
        let affichageMenu = window.document.getElementById('morceauxCvDansNiveau').className;

        if (affichageMenu === 'morceauxCv reduit') {
            window.document.getElementById('morceauxCvDansNiveau').className = 'morceauxCv';
            
            objectifs.arretDecompteTemps(objectifs.idSetIntervalDecompteTemps);
        } else {
            window.document.getElementById('morceauxCvDansNiveau').className = 'morceauxCv reduit';
            
            var idSetIntervalDecompteTemps = objectifs.decompteTemps(objectifs.secondesRestantes);
            objectifs.idSetIntervalDecompteTemps = idSetIntervalDecompteTemps;
        }
    }, false);
    
    
    // ACTIVATION DE L'INITIALISATION DE L'ECRAN D'ACCUEIL LORS DU CHARGEMENT DE LA PAGE INDEX.HTML
    initialisation.ecranAccueil();
}, false);