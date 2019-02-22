'use strict';
var joueur = {
    nom: 'Anthony',
    sprite: {
        largeurTotaleSprite: 258,
        hauteurTotaleSprite: 196,
        largeurEtapeSprite: 43,
        hauteurEtapeSprite: 98,
        etapeSpriteX: [0, -43, -86, -129, -172, -215, -258],
        etapeSpriteY: [0, -98],
        pivotementNordOuest: function() {
            window.document.getElementsByClassName('sprite')[0].style.top = this.etapeSpriteY[0] + 'px';
            window.document.getElementsByClassName('sprite')[0].style.left = this.etapeSpriteX[0] + 'px';
        },
        pivotementNordEst: function() {
            window.document.getElementsByClassName('sprite')[0].style.top = this.etapeSpriteY[0] + 'px';
            window.document.getElementsByClassName('sprite')[0].style.left = this.etapeSpriteX[3] + 'px';
        },
        pivotementSudOuest: function() {
            window.document.getElementsByClassName('sprite')[0].style.top = this.etapeSpriteY[1] + 'px';
            window.document.getElementsByClassName('sprite')[0].style.left = this.etapeSpriteY[0] + '0px';
        },
        pivotementSudEst: function() {
            window.document.getElementsByClassName('sprite')[0].style.top = this.etapeSpriteY[1] + 'px';
            window.document.getElementsByClassName('sprite')[0].style.left = this.etapeSpriteX[3] + 'px';
        },
        idSetIntervalAnimationJoueur: 0,
        animationEnCours: false,
        animationJoueur: function() {
            joueur.sprite.animationEnCours = true;

            // LANCEMENT DE L'ANIMATION DE DEPLACEMENT
            joueur.sprite.idSetIntervalAnimationJoueur = setInterval(function() {
    
                // ANIMATION DEPLACEMENT NORD-OUEST ET SUD-OUEST
                if (parseFloat(window.document.getElementsByClassName('sprite')[0].style.left) === joueur.sprite.etapeSpriteX[0]) {
                    window.document.getElementsByClassName('sprite')[0].style.left = joueur.sprite.etapeSpriteX[1] + 'px';
                } else {
                    if (parseFloat(window.document.getElementsByClassName('sprite')[0].style.left) === joueur.sprite.etapeSpriteX[1]) {
                        window.document.getElementsByClassName('sprite')[0].style.left = joueur.sprite.etapeSpriteX[2] + 'px';
                    } else {
                        if (parseFloat(window.document.getElementsByClassName('sprite')[0].style.left) === joueur.sprite.etapeSpriteX[2]) {
                            window.document.getElementsByClassName('sprite')[0].style.left = joueur.sprite.etapeSpriteX[1] + 'px';
                        }
                    }
                }

                // ANIMATION DEPLACEMENT NORD-EST ET SUD-EST
                if (parseFloat(window.document.getElementsByClassName('sprite')[0].style.left) === joueur.sprite.etapeSpriteX[3]) {
                    window.document.getElementsByClassName('sprite')[0].style.left = joueur.sprite.etapeSpriteX[4] + 'px';
                } else {
                    if (parseFloat(window.document.getElementsByClassName('sprite')[0].style.left) === joueur.sprite.etapeSpriteX[4]) {
                        window.document.getElementsByClassName('sprite')[0].style.left = joueur.sprite.etapeSpriteX[5] + 'px';
                    } else {
                        if (parseFloat(window.document.getElementsByClassName('sprite')[0].style.left) === joueur.sprite.etapeSpriteX[5]) {
                            window.document.getElementsByClassName('sprite')[0].style.left = joueur.sprite.etapeSpriteX[4] + 'px';
                        }
                    }
                }
            }, 200);

            // ARRET DE L'ANIMATION DE DEPLACEMENT APRES 1 SECONDE
            setTimeout(function() {
                clearInterval(joueur.sprite.idSetIntervalAnimationJoueur);

                // ARRET DE L'ANIMATION SUITE A UN DEPLACEMENT NORD-OUEST OU SUD-OUEST
                if (parseFloat(window.document.getElementsByClassName('sprite')[0].style.left) === joueur.sprite.etapeSpriteX[1] || parseFloat(window.document.getElementsByClassName('sprite')[0].style.left) === joueur.sprite.etapeSpriteX[2]) {
                    window.document.getElementsByClassName('sprite')[0].style.left = joueur.sprite.etapeSpriteX[0] + 'px';
                }

                // ARRET DE L'ANIMATION SUITE A UN DEPLACEMENT NORD-EST OU SUD-EST
                if (parseFloat(window.document.getElementsByClassName('sprite')[0].style.left) === joueur.sprite.etapeSpriteX[4] || parseFloat(window.document.getElementsByClassName('sprite')[0].style.left) === joueur.sprite.etapeSpriteX[5]) {
                    window.document.getElementsByClassName('sprite')[0].style.left = joueur.sprite.etapeSpriteX[3] + 'px';
                }

                joueur.sprite.animationEnCours = false;
            }, 1000);
        }
    },
    coordonneesJoueurPourChaqueCase: {
        correctionEcartX: -5,
        correctionEcartY: -80,
        repereJoueur: function() {
            var repereJoueur = Math.round(parseFloat(window.document.getElementById('personnage').style.top));

            return repereJoueur;
        },
        repereCase: function(numeroCase) {
            var repereCaseId = 'case' + numeroCase;

            return Math.round(parseFloat(window.document.getElementById(repereCaseId).style.top) + this.correctionEcartY);
        },
        coordonneesCase: function(numeroCase) {
            var caseId = 'case' + numeroCase;

            window.document.getElementById('personnage').style.left = parseFloat(window.document.getElementById(caseId).style.left) + this.correctionEcartX + 'px';
            window.document.getElementById('personnage').style.top = parseFloat(window.document.getElementById(caseId).style.top) + this.correctionEcartY + 'px';
        }
    },
    deplacement: function(){
        var that = this;
        
        // POSITIONNEMENT INITIAL DU JOUEUR
        that.coordonneesJoueurPourChaqueCase.coordonneesCase(1);

        // CONFIGURATION INITIALE DU SPRITE DU JOUEUR
        that.sprite.pivotementNordOuest();

        // EVENEMENT LORS DE L'APPUI SUR UNE TOUCHE DU CLAVIER
        window.onkeydown = function(e){
            if (!evenements.evenementEnCours && !joueur.sprite.animationEnCours) {
                var code = e.keyCode;
                //event.preventDefault();

                switch(code){
                    // ACTION LORSQUE LA TOUCHE HAUT OU Z EST PRESSEE
                    case 38:
                    case 90:
                        switch (that.coordonneesJoueurPourChaqueCase.repereJoueur()) {
                            // ACTION SI LE JOUEUR EST SUR LA CASE 1
                            case (that.coordonneesJoueurPourChaqueCase.repereCase(1)):
                                code = undefined;
                                // PIVOTEMENT DU JOUEUR VERS LE NORD-EST
                                that.sprite.pivotementNordEst();

                                // ANIMATION DE DEPLACEMENT DU JOUEUR
                                that.sprite.animationJoueur();

                                // DEPLACEMENT DU JOUEUR D'UNE CASE VERS LE NORD-EST
                                that.coordonneesJoueurPourChaqueCase.coordonneesCase(2);

                                // INCREMENTATION DU COMPTEUR DE DEPLACEMENT
                                objectifs.bonusDeplacements.incrementationDeplacement();
                                code = e.keyCode;
                            break;

                            // ACTION SI LE JOUEUR EST SUR LA CASE 2
                            case (that.coordonneesJoueurPourChaqueCase.repereCase(2)):
                                code = undefined;
                                // PIVOTEMENT DU JOUEUR VERS LE NORD-EST
                                that.sprite.pivotementNordEst();

                                // ANIMATION DE DEPLACEMENT DU JOUEUR
                                that.sprite.animationJoueur();

                                // DEPLACEMENT DU JOUEUR D'UNE CASE VERS LE NORD-EST
                                that.coordonneesJoueurPourChaqueCase.coordonneesCase(5);

                                // INCREMENTATION DU COMPTEUR DE DEPLACEMENT
                                objectifs.bonusDeplacements.incrementationDeplacement();
                                code = e.keyCode;
                            break;

                            // ACTION SI LE JOUEUR EST SUR LA CASE 4
                            case (that.coordonneesJoueurPourChaqueCase.repereCase(4)):
                                code = undefined;
                                // PIVOTEMENT DU JOUEUR VERS LE NORD-EST
                                that.sprite.pivotementNordEst();

                                // ANIMATION DE DEPLACEMENT DU JOUEUR
                                that.sprite.animationJoueur();

                                // DEPLACEMENT DU JOUEUR D'UNE CASE VERS LE NORD-EST
                                that.coordonneesJoueurPourChaqueCase.coordonneesCase(3);

                                // INCREMENTATION DU COMPTEUR DE DEPLACEMENT
                                objectifs.bonusDeplacements.incrementationDeplacement();
                                code = e.keyCode;
                            break;

                            // ACTION SI LE JOUEUR EST SUR LA CASE 5
                            case (that.coordonneesJoueurPourChaqueCase.repereCase(5)):
                                code = undefined;
                                // PIVOTEMENT DU JOUEUR VERS LE NORD-EST
                                that.sprite.pivotementNordEst();

                                // ANIMATION DE DEPLACEMENT DU JOUEUR
                                that.sprite.animationJoueur();

                                // DEPLACEMENT DU JOUEUR D'UNE CASE VERS LE NORD-EST
                                that.coordonneesJoueurPourChaqueCase.coordonneesCase(7);

                                // INCREMENTATION DU COMPTEUR DE DEPLACEMENT
                                objectifs.bonusDeplacements.incrementationDeplacement();
                                code = e.keyCode;
                            break;

                            // ACTION SI LE JOUEUR EST SUR LA CASE 9
                            case (that.coordonneesJoueurPourChaqueCase.repereCase(9)):
                                code = undefined;
                                // PIVOTEMENT DU JOUEUR VERS LE NORD-EST
                                that.sprite.pivotementNordEst();

                                // ANIMATION DE DEPLACEMENT DU JOUEUR
                                that.sprite.animationJoueur();

                                // DEPLACEMENT DU JOUEUR D'UNE CASE VERS LE NORD-EST
                                that.coordonneesJoueurPourChaqueCase.coordonneesCase(8);

                                // INCREMENTATION DU COMPTEUR DE DEPLACEMENT
                                objectifs.bonusDeplacements.incrementationDeplacement();
                                code = e.keyCode;
                            break;

                            // ACTION SI LE JOUEUR EST SUR LA CASE 11
                            case (that.coordonneesJoueurPourChaqueCase.repereCase(11)):
                                code = undefined;
                                // PIVOTEMENT DU JOUEUR VERS LE NORD-EST
                                that.sprite.pivotementNordEst();

                                // ANIMATION DE DEPLACEMENT DU JOUEUR
                                that.sprite.animationJoueur();

                                // DEPLACEMENT DU JOUEUR D'UNE CASE VERS LE NORD-EST
                                that.coordonneesJoueurPourChaqueCase.coordonneesCase(10);

                                // INCREMENTATION DU COMPTEUR DE DEPLACEMENT
                                objectifs.bonusDeplacements.incrementationDeplacement();
                                code = e.keyCode;
                            break;

                            default:
                            // PIVOTEMENT DU JOUEUR VERS LE NORD-EST
                            that.sprite.pivotementNordEst();
                        }
                    break;
                    
                    // ACTION LORSQUE LA TOUCHE GAUCHE OU Q EST PRESSEE
                    case 37:
                    case 81:
                        switch (that.coordonneesJoueurPourChaqueCase.repereJoueur()) {
                            // ACTION SI LE JOUEUR EST SUR LA CASE 2
                            case (that.coordonneesJoueurPourChaqueCase.repereCase(2)):
                                code = undefined;
                                // PIVOTEMENT DU JOUEUR VERS LE NORD-OUEST
                                that.sprite.pivotementNordOuest();

                                // ANIMATION DE DEPLACEMENT DU JOUEUR
                                that.sprite.animationJoueur();

                                // DEPLACEMENT DU JOUEUR D'UNE CASE VERS LE NORD-OUEST
                                that.coordonneesJoueurPourChaqueCase.coordonneesCase(3);

                                // INCREMENTATION DU COMPTEUR DE DEPLACEMENT
                                objectifs.bonusDeplacements.incrementationDeplacement();
                                code = e.keyCode;
                            break;
                            
                            // ACTION SI LE JOUEUR EST SUR LA CASE 5
                            case (that.coordonneesJoueurPourChaqueCase.repereCase(5)):
                                code = undefined;
                                // PIVOTEMENT DU JOUEUR VERS LE NORD-OUEST
                                that.sprite.pivotementNordOuest();

                                // ANIMATION DE DEPLACEMENT DU JOUEUR
                                that.sprite.animationJoueur();

                                // DEPLACEMENT DU JOUEUR D'UNE CASE VERS LE NORD-OUEST
                                that.coordonneesJoueurPourChaqueCase.coordonneesCase(6);

                                // INCREMENTATION DU COMPTEUR DE DEPLACEMENT
                                objectifs.bonusDeplacements.incrementationDeplacement();
                                code = e.keyCode;
                            break;
                            
                            // ACTION SI LE JOUEUR EST SUR LA CASE 8
                            case (that.coordonneesJoueurPourChaqueCase.repereCase(8)):
                                code = undefined;
                                // PIVOTEMENT DU JOUEUR VERS LE NORD-OUEST
                                that.sprite.pivotementNordOuest();

                                // ANIMATION DE DEPLACEMENT DU JOUEUR
                                that.sprite.animationJoueur();

                                // DEPLACEMENT DU JOUEUR D'UNE CASE VERS LE NORD-OUEST
                                that.coordonneesJoueurPourChaqueCase.coordonneesCase(7);

                                // INCREMENTATION DU COMPTEUR DE DEPLACEMENT
                                objectifs.bonusDeplacements.incrementationDeplacement();
                                code = e.keyCode;
                            break;
                            
                            // ACTION SI LE JOUEUR EST SUR LA CASE 10
                            case (that.coordonneesJoueurPourChaqueCase.repereCase(10)):
                                code = undefined;
                                // PIVOTEMENT DU JOUEUR VERS LE NORD-OUEST
                                that.sprite.pivotementNordOuest();

                                // ANIMATION DE DEPLACEMENT DU JOUEUR
                                that.sprite.animationJoueur();

                                // SPRITE DU JOUEUR SE POSITIONNE DEVANT LE MUR
                                window.document.getElementById('personnage').style.zIndex = 30;

                                // DEPLACEMENT DU JOUEUR D'UNE CASE VERS LE NORD-OUEST
                                that.coordonneesJoueurPourChaqueCase.coordonneesCase(8);

                                // INCREMENTATION DU COMPTEUR DE DEPLACEMENT
                                objectifs.bonusDeplacements.incrementationDeplacement();
                                code = e.keyCode;
                            break;
                            
                            // ACTION SI LE JOUEUR EST SUR LA CASE 12
                            case (that.coordonneesJoueurPourChaqueCase.repereCase(12)):
                                code = undefined;
                                // PIVOTEMENT DU JOUEUR VERS LE NORD-OUEST
                                that.sprite.pivotementNordOuest();

                                // ANIMATION DE DEPLACEMENT DU JOUEUR
                                that.sprite.animationJoueur();

                                // DEPLACEMENT DU JOUEUR D'UNE CASE VERS LE NORD-OUEST
                                that.coordonneesJoueurPourChaqueCase.coordonneesCase(11);

                                // INCREMENTATION DU COMPTEUR DE DEPLACEMENT
                                objectifs.bonusDeplacements.incrementationDeplacement();
                                code = e.keyCode;
                            break;

                            default:
                            // PIVOTEMENT DU JOUEUR VERS LE NORD-OUEST
                            that.sprite.pivotementNordOuest();
                        }
                    break;

                    // ACTION LORSQUE LA TOUCHE BAS OU S EST PRESSEE
                    case 40:
                    case 83:
                        switch (that.coordonneesJoueurPourChaqueCase.repereJoueur()) {
                            // ACTION SI LE JOUEUR EST SUR LA CASE 2
                            case (that.coordonneesJoueurPourChaqueCase.repereCase(2)):
                                code = undefined;
                                // PIVOTEMENT DU JOUEUR VERS LE SUD-OUEST
                                that.sprite.pivotementSudOuest();

                                // ANIMATION DE DEPLACEMENT DU JOUEUR
                                that.sprite.animationJoueur();

                                // DEPLACEMENT DU JOUEUR D'UNE CASE VERS LE SUD-OUEST
                                that.coordonneesJoueurPourChaqueCase.coordonneesCase(1);

                                // INCREMENTATION DU COMPTEUR DE DEPLACEMENT
                                objectifs.bonusDeplacements.incrementationDeplacement();
                                code = e.keyCode;
                            break;

                            // ACTION SI LE JOUEUR EST SUR LA CASE 3
                            case (that.coordonneesJoueurPourChaqueCase.repereCase(3)):
                                code = undefined;
                                // PIVOTEMENT DU JOUEUR VERS LE SUD-OUEST
                                that.sprite.pivotementSudOuest();

                                // ANIMATION DE DEPLACEMENT DU JOUEUR
                                that.sprite.animationJoueur();

                                // DEPLACEMENT DU JOUEUR D'UNE CASE VERS LE SUD-OUEST
                                that.coordonneesJoueurPourChaqueCase.coordonneesCase(4);

                                // INCREMENTATION DU COMPTEUR DE DEPLACEMENT
                                objectifs.bonusDeplacements.incrementationDeplacement();
                                code = e.keyCode;
                            break;

                            // ACTION SI LE JOUEUR EST SUR LA CASE 5
                            case (that.coordonneesJoueurPourChaqueCase.repereCase(5)):
                                code = undefined;
                                // PIVOTEMENT DU JOUEUR VERS LE SUD-OUEST
                                that.sprite.pivotementSudOuest();

                                // ANIMATION DE DEPLACEMENT DU JOUEUR
                                that.sprite.animationJoueur();

                                // DEPLACEMENT DU JOUEUR D'UNE CASE VERS LE SUD-OUEST
                                that.coordonneesJoueurPourChaqueCase.coordonneesCase(2);

                                // INCREMENTATION DU COMPTEUR DE DEPLACEMENT
                                objectifs.bonusDeplacements.incrementationDeplacement();
                                code = e.keyCode;
                            break;

                            // ACTION SI LE JOUEUR EST SUR LA CASE 7
                            case (that.coordonneesJoueurPourChaqueCase.repereCase(7)):
                                code = undefined;
                                // PIVOTEMENT DU JOUEUR VERS LE SUD-OUEST
                                that.sprite.pivotementSudOuest();

                                // ANIMATION DE DEPLACEMENT DU JOUEUR
                                that.sprite.animationJoueur();

                                // DEPLACEMENT DU JOUEUR D'UNE CASE VERS LE SUD-OUEST
                                that.coordonneesJoueurPourChaqueCase.coordonneesCase(5);

                                // INCREMENTATION DU COMPTEUR DE DEPLACEMENT
                                objectifs.bonusDeplacements.incrementationDeplacement();
                                code = e.keyCode;
                            break;

                            // ACTION SI LE JOUEUR EST SUR LA CASE 8
                            case (that.coordonneesJoueurPourChaqueCase.repereCase(8)):
                                code = undefined;
                                // PIVOTEMENT DU JOUEUR VERS LE SUD-OUEST
                                that.sprite.pivotementSudOuest();

                                // ANIMATION DE DEPLACEMENT DU JOUEUR
                                that.sprite.animationJoueur();

                                // DEPLACEMENT DU JOUEUR D'UNE CASE VERS LE SUD-OUEST
                                that.coordonneesJoueurPourChaqueCase.coordonneesCase(9);

                                // INCREMENTATION DU COMPTEUR DE DEPLACEMENT
                                objectifs.bonusDeplacements.incrementationDeplacement();
                                code = e.keyCode;
                            break;

                            // ACTION SI LE JOUEUR EST SUR LA CASE 10
                            case (that.coordonneesJoueurPourChaqueCase.repereCase(10)):
                                code = undefined;
                                // PIVOTEMENT DU JOUEUR VERS LE SUD-OUEST
                                that.sprite.pivotementSudOuest();

                                // ANIMATION DE DEPLACEMENT DU JOUEUR
                                that.sprite.animationJoueur();

                                // DEPLACEMENT DU JOUEUR D'UNE CASE VERS LE SUD-OUEST
                                that.coordonneesJoueurPourChaqueCase.coordonneesCase(11);

                                // INCREMENTATION DU COMPTEUR DE DEPLACEMENT
                                objectifs.bonusDeplacements.incrementationDeplacement();
                                code = e.keyCode;
                            break;

                            default:
                            // PIVOTEMENT DU JOUEUR VERS LE SUD-OUEST
                            that.sprite.pivotementSudOuest();
                        }
                    break;

                    // ACTION LORSQUE LA TOUCHE DROITE OU D EST PRESSEE
                    case 39:
                    case 68:
                        switch (that.coordonneesJoueurPourChaqueCase.repereJoueur()) {
                            // ACTION SI LE JOUEUR EST SUR LA CASE 3
                            case (that.coordonneesJoueurPourChaqueCase.repereCase(3)):
                                code = undefined;
                                // PIVOTEMENT DU JOUEUR VERS LE SUD-EST
                                that.sprite.pivotementSudEst();

                                // ANIMATION DE DEPLACEMENT DU JOUEUR
                                that.sprite.animationJoueur();

                                // DEPLACEMENT DU JOUEUR D'UNE CASE VERS LE SUD-EST
                                that.coordonneesJoueurPourChaqueCase.coordonneesCase(2);

                                // INCREMENTATION DU COMPTEUR DE DEPLACEMENT
                                objectifs.bonusDeplacements.incrementationDeplacement();
                                code = e.keyCode;
                            break;

                            // ACTION SI LE JOUEUR EST SUR LA CASE 6
                            case (that.coordonneesJoueurPourChaqueCase.repereCase(6)):
                                code = undefined;
                                // PIVOTEMENT DU JOUEUR VERS LE SUD-EST
                                that.sprite.pivotementSudEst();

                                // ANIMATION DE DEPLACEMENT DU JOUEUR
                                that.sprite.animationJoueur();

                                // DEPLACEMENT DU JOUEUR D'UNE CASE VERS LE SUD-EST
                                that.coordonneesJoueurPourChaqueCase.coordonneesCase(5);

                                // INCREMENTATION DU COMPTEUR DE DEPLACEMENT
                                objectifs.bonusDeplacements.incrementationDeplacement();
                                code = e.keyCode;
                            break;

                            // ACTION SI LE JOUEUR EST SUR LA CASE 7
                            case (that.coordonneesJoueurPourChaqueCase.repereCase(7)):
                                code = undefined;
                                // PIVOTEMENT DU JOUEUR VERS LE SUD-EST
                                that.sprite.pivotementSudEst();

                                // ANIMATION DE DEPLACEMENT DU JOUEUR
                                that.sprite.animationJoueur();

                                // DEPLACEMENT DU JOUEUR D'UNE CASE VERS LE SUD-EST
                                that.coordonneesJoueurPourChaqueCase.coordonneesCase(8);

                                // INCREMENTATION DU COMPTEUR DE DEPLACEMENT
                                objectifs.bonusDeplacements.incrementationDeplacement();
                                code = e.keyCode;
                            break;

                            // ACTION SI LE JOUEUR EST SUR LA CASE 8
                            case (that.coordonneesJoueurPourChaqueCase.repereCase(8)):
                                code = undefined;
                                // PIVOTEMENT DU JOUEUR VERS LE SUD-EST
                                that.sprite.pivotementSudEst();

                                // ANIMATION DE DEPLACEMENT DU JOUEUR
                                that.sprite.animationJoueur();

                                // SPRITE DU JOUEUR SE POSITIONNE DEVANT LE MUR
                                window.document.getElementById('personnage').style.zIndex = 45;

                                // DEPLACEMENT DU JOUEUR D'UNE CASE VERS LE SUD-EST
                                that.coordonneesJoueurPourChaqueCase.coordonneesCase(10);

                                // INCREMENTATION DU COMPTEUR DE DEPLACEMENT
                                objectifs.bonusDeplacements.incrementationDeplacement();
                                code = e.keyCode;
                            break;

                            // ACTION SI LE JOUEUR EST SUR LA CASE 11
                            case (that.coordonneesJoueurPourChaqueCase.repereCase(11)):
                                code = undefined;
                                // PIVOTEMENT DU JOUEUR VERS LE SUD-EST
                                that.sprite.pivotementSudEst();

                                // ANIMATION DE DEPLACEMENT DU JOUEUR
                                that.sprite.animationJoueur();

                                // DEPLACEMENT DU JOUEUR D'UNE CASE VERS LE SUD-EST
                                that.coordonneesJoueurPourChaqueCase.coordonneesCase(12);

                                // INCREMENTATION DU COMPTEUR DE DEPLACEMENT
                                objectifs.bonusDeplacements.incrementationDeplacement();

                                // VERIFICATION DES CONDITIONS DE VICTOIRE AVEC REDIRECTION VERS L'ECRAN DE VICTOIRE SI LES CONDITIONS SONT REMPLIES
                                if (objectifs.morceauxCv.retrouve === 6) {
                                    setTimeout(function() {
                                        initialisation.ecranReussite();
                                    }, 1300);
                                }
                                code = e.keyCode;
                            break;

                            default:
                            // PIVOTEMENT DU JOUEUR VERS LE SUD-EST
                            that.sprite.pivotementSudEst();
                        }
                    break;

                    // ACTION LORSQUE LA TOUCHE ESPACE EST PRESSEE POUR INTERAGIR AVEC LES ELEMENTS DU DECORS
                    case 32:
                        switch (that.coordonneesJoueurPourChaqueCase.repereJoueur()) {
                            // ACTION SI LE JOUEUR EST SUR LA CASE 3
                            case (that.coordonneesJoueurPourChaqueCase.repereCase(3)):
                                code = undefined;
                                if (!evenements.evenementCase[0].recompenseObtenue) {
                                    evenements.creationQuestion(0);
                                    
                                    window.document.getElementById('oui').addEventListener('click', function() {
                                        evenements.suppressionQuestion();
                                        evenements.creationAnnonceRecompense(0);

                                        window.document.getElementById('ok').addEventListener('click', function() {
                                            evenements.suppressionIndicateurEvenement();
                                            evenements.suppressionAnnonceRecompense();
                                            evenements.evenementCase[0].recompenseObtenue = true;
                                        }, false);
                                    }, false);

                                    window.document.getElementById('non').addEventListener('click', function() {
                                        evenements.suppressionQuestion();
                                    }, false);
                                }
                                code = e.keyCode;
                            break;

                            // ACTION SI LE JOUEUR EST SUR LA CASE 4
                            case (that.coordonneesJoueurPourChaqueCase.repereCase(4)):
                                code = undefined;
                                if (!evenements.evenementCase[1].recompenseObtenue) {
                                    evenements.creationQuestion(1);
                                    
                                    window.document.getElementById('oui').addEventListener('click', function() {
                                        evenements.suppressionQuestion();
                                        evenements.creationAnnonceRecompense(1);

                                        window.document.getElementById('ok').addEventListener('click', function() {
                                            evenements.suppressionIndicateurEvenement();
                                            evenements.suppressionAnnonceRecompense();
                                            evenements.evenementCase[1].recompenseObtenue = true;
                                        }, false);
                                    }, false);

                                    window.document.getElementById('non').addEventListener('click', function() {
                                        evenements.suppressionQuestion();
                                    }, false);
                                }
                                code = e.keyCode;
                            break;

                            // ACTION SI LE JOUEUR EST SUR LA CASE 6
                            case (that.coordonneesJoueurPourChaqueCase.repereCase(6)):
                                code = undefined;
                                if (!evenements.evenementCase[2].recompenseObtenue) {
                                    evenements.creationQuestion(2);
                                    
                                    window.document.getElementById('oui').addEventListener('click', function() {
                                        evenements.suppressionQuestion();
                                        evenements.creationAnnonceRecompense(2);

                                        window.document.getElementById('ok').addEventListener('click', function() {
                                            evenements.suppressionIndicateurEvenement();
                                            evenements.suppressionAnnonceRecompense();
                                            evenements.evenementCase[2].recompenseObtenue = true;
                                        }, false);
                                    }, false);

                                    window.document.getElementById('non').addEventListener('click', function() {
                                        evenements.suppressionQuestion();
                                    }, false);
                                }
                                code = e.keyCode;
                            break;

                            // ACTION SI LE JOUEUR EST SUR LA CASE 7
                            case (that.coordonneesJoueurPourChaqueCase.repereCase(7)):
                                code = undefined;
                                if (!evenements.evenementCase[3].recompenseObtenue) {
                                    evenements.creationQuestion(3);
                                    
                                    window.document.getElementById('oui').addEventListener('click', function() {
                                        evenements.suppressionQuestion();
                                        evenements.creationAnnonceRecompense(3);

                                        window.document.getElementById('ok').addEventListener('click', function() {
                                            evenements.suppressionIndicateurEvenement();
                                            evenements.suppressionAnnonceRecompense();
                                            evenements.evenementCase[3].recompenseObtenue = true;
                                        }, false);
                                    }, false);

                                    window.document.getElementById('non').addEventListener('click', function() {
                                        evenements.suppressionQuestion();
                                    }, false);
                                }
                                code = e.keyCode;
                            break;

                            // ACTION SI LE JOUEUR EST SUR LA CASE 9
                            case (that.coordonneesJoueurPourChaqueCase.repereCase(9)):
                                code = undefined;
                                if (!evenements.evenementCase[4].recompenseObtenue) {
                                    evenements.creationQuestion(4);
                                    
                                    window.document.getElementById('oui').addEventListener('click', function() {
                                        evenements.suppressionQuestion();
                                        evenements.creationAnnonceRecompense(4);

                                        window.document.getElementById('ok').addEventListener('click', function() {
                                            evenements.suppressionIndicateurEvenement();
                                            evenements.suppressionAnnonceRecompense();
                                            evenements.evenementCase[4].recompenseObtenue = true;
                                        }, false);
                                    }, false);

                                    window.document.getElementById('non').addEventListener('click', function() {
                                        evenements.suppressionQuestion();
                                    }, false);
                                }
                                code = e.keyCode;
                            break;

                            // ACTION SI LE JOUEUR EST SUR LA CASE 11
                            case (that.coordonneesJoueurPourChaqueCase.repereCase(11)):
                                code = undefined;
                                if (!evenements.evenementCase[5].recompenseObtenue) {
                                    evenements.creationQuestion(5);
                                    
                                    window.document.getElementById('oui').addEventListener('click', function() {
                                        evenements.suppressionQuestion();
                                        evenements.creationAnnonceRecompense(5);

                                        window.document.getElementById('ok').addEventListener('click', function() {
                                            evenements.suppressionIndicateurEvenement();
                                            evenements.suppressionAnnonceRecompense();
                                            evenements.evenementCase[5].recompenseObtenue = true;
                                        }, false);
                                    }, false);

                                    window.document.getElementById('non').addEventListener('click', function() {
                                        evenements.suppressionQuestion();
                                    }, false);
                                }
                                code = e.keyCode;
                            break;
                        }
                    break;
                }
            }
            // AJOUT D'UN MESSAGE INVITANT LE JOUEUR A APPUYER SUR ESPACE
            evenements.affichageIndicateurEvenement();
        }
    }
}