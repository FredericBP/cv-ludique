'use strict';
window.addEventListener('DOMContentLoaded', function() {
    var parcours = {
        largeurParcours: window.document.getElementById('parcours1').offsetWidth,
        hauteurParcours: window.document.getElementById('parcours1').offsetHeight,
        largeurCase: 35,
        hauteurCase: 25,
        centreCaseX: function() {
            return (this.largeurCase/2)*0.8;
        },
        centreCaseY: function() {
            return (this.hauteurCase/2)*0.8;
        },
        coordonnesCase: [{
            id: 7,
            coordonneesX: 0.8,
            coordonneesY: 0.4
        },
        {
            id: 8,
            coordonneesX: 0.9,
            coordonneesY: 0.6
        }],
        creationCase: function (numeroCase, decalageX, decalageY) {
            // DEFINITION DU NOM DE L'ATTRIBUT ID
            var idCase = 'case' + numeroCase;

            // POSITIONNEMENT HORIZONTAL DU POINT DE REPERE DE LA CASE
            var posXCase = (this.largeurParcours) * decalageX - (this.centreCaseX());
            document.getElementById(idCase).style.left = posXCase + 'px';

            // POSITIONNEMENT VERTICAL DU POINT DE REPERE DE LA CASE
            var posYCase = (this.hauteurParcours) * decalageY - (this.centreCaseY());
            document.getElementById(idCase).style.top = posYCase + 'px';

            // INITIALISATION DU DESSIN DE LA CASE DANS LE CANVAS
            var ctx = document.getElementById(idCase).getContext('2d');
            ctx.fillStyle = '#fff';
            ctx.strokeStyle = '#0070c0';
            
            ctx.beginPath();
            ctx.lineWidth = 3;
            ctx.moveTo(((this.largeurCase)/2), ((this.hauteurCase) - 2));
            ctx.lineTo(((this.largeurCase) - 2), ((this.hauteurCase)/2));
            ctx.lineTo(((this.largeurCase)/2), 2);
            ctx.lineTo(2, ((this.hauteurCase)/2));
            ctx.lineTo(((this.largeurCase)/2), ((this.hauteurCase) - 2));
            
            ctx.fill();
            ctx.stroke();
            ctx.closePath();
            
            // COORDONNEES DE DEPART ET D'ARRIVEE DE LA LIGNE RELIANT UNE CASE A UNE AUTRE
            var coordonneesLigne = [(posXCase + (this.centreCaseX()) + 3), (posYCase + (this.centreCaseY()) + 3)];
            
            return coordonneesLigne;
        },
        // placementCase: function() {
        //     for (var = i; this.coordonnesCase[i] < this.coordonnesCase.length; i++) {
        //         return parcours.creationCase(this.coordonnesCase[i].id, this.coordonnesCase[i].coordonneesX, this.coordonnesCase[i].coordonneesY);
        //     }

        // }
        // test: function() {
        //     console.log('Coucou');
        // },
        // testThis: function() {
        //     return this.largeurCase;
        // }
        // surface: function(w, h) {
        //     window.document.getElementById('parcours').style.height = h;
        //     window.document.getElementById('parcours').style.width = w;
        // },
        //fond: window.document.getElementById('parcours').style.background = '#fff',
        // chargementDuParcours: function(w, h) {
        //     let creationParcours = window.document.createElement('div');
        //     creationParcours.setAttribute('id', 'parcours');
        //     window.document.getElementsByTagName('main').appendChild(creationParcours);
        
        //     this.surface(w, h);
        //     this.fond;
        // },
        // test: function() {
        //     alert('Test réussi !');
        // }
    }
    // FIN DE L'OBJET PARCOURS

    // CREATION ET PLACEMENT DES CASES ET ENREGISTREMENT DES COORDONNEES DES CASES DANS UNE VARIABLES
    var coordonneesLigneCase1 = parcours.creationCase(1, 0.21, 0.78);
    var coordonneesLigneCase2 = parcours.creationCase(2, 0.47, 0.539);
    var coordonneesLigneCase3 = parcours.creationCase(3, 0.35, 0.43);
    var coordonneesLigneCase4 = parcours.creationCase(4, 0.11, 0.642);
    var coordonneesLigneCase5 = parcours.creationCase(5, 0.54, 0.475)
    var coordonneesLigneCase6 = parcours.creationCase(6, 0.48, 0.42);
    var coordonneesLigneCase7 = parcours.creationCase(7, 0.62, 0.403);
    var coordonneesLigneCase8 = parcours.creationCase(8, 0.75, 0.52);
    var coordonneesLigneCase9 = parcours.creationCase(9, 0.395, 0.84);
    var coordonneesLigneCase10 = parcours.creationCase(10, 0.83, 0.596);
    var coordonneesLigneCase11 = parcours.creationCase(11, 0.66, 0.749);
    var coordonneesLigneCase12 = parcours.creationCase(12, 0.73, 0.813);
    

    // CREATION DES LIGNES RELIANTS LES CASES ENTRE ELLES
    var lignes = document.getElementById('lignes');
    var ctxLignes = lignes.getContext('2d');
    ctxLignes.strokeStyle = '#0070c0';

    ctxLignes.beginPath();
    ctxLignes.lineWidth = 3;
    ctxLignes.lineTo(coordonneesLigneCase1[0], coordonneesLigneCase1[1]);
    ctxLignes.lineTo(coordonneesLigneCase2[0], coordonneesLigneCase2[1]);
    ctxLignes.lineTo(coordonneesLigneCase3[0], coordonneesLigneCase3[1]);
    ctxLignes.lineTo(coordonneesLigneCase4[0], coordonneesLigneCase4[1]);
    ctxLignes.stroke();
    ctxLignes.closePath();

    ctxLignes.beginPath();
    ctxLignes.lineWidth = 3;
    ctxLignes.lineTo(coordonneesLigneCase2[0], coordonneesLigneCase2[1]);
    ctxLignes.lineTo(coordonneesLigneCase5[0], coordonneesLigneCase5[1]);
    ctxLignes.lineTo(coordonneesLigneCase6[0], coordonneesLigneCase6[1]);
    ctxLignes.stroke();
    ctxLignes.closePath();

    ctxLignes.beginPath();
    ctxLignes.lineWidth = 3;
    ctxLignes.lineTo(coordonneesLigneCase5[0], coordonneesLigneCase5[1]);
    ctxLignes.lineTo(coordonneesLigneCase7[0], coordonneesLigneCase7[1]);
    ctxLignes.lineTo(coordonneesLigneCase8[0], coordonneesLigneCase8[1]);
    ctxLignes.lineTo(coordonneesLigneCase9[0], coordonneesLigneCase9[1]);
    ctxLignes.stroke();
    ctxLignes.closePath();

    ctxLignes.beginPath();
    ctxLignes.lineWidth = 3;
    ctxLignes.lineTo(coordonneesLigneCase8[0], coordonneesLigneCase8[1]);
    ctxLignes.lineTo(coordonneesLigneCase10[0], coordonneesLigneCase10[1]);
    ctxLignes.lineTo(coordonneesLigneCase11[0], coordonneesLigneCase11[1]);
    ctxLignes.lineTo(coordonneesLigneCase12[0], coordonneesLigneCase12[1]);
    ctxLignes.stroke();
    ctxLignes.closePath();

    // var mur = new Image();
    // mur.src = "../files/parcours-1b.png";
    // ctx.drawImage(mur, 0, 0, mur.width, mur.height, 0, 0, 1280, 720);
}, false);