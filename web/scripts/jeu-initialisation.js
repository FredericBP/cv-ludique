'use strict';
var initialisation = {
	// INITIALISATION DE L'ECRAN D'ACCUEIL DU JEU
	ecranAccueil: function() {
		
		// ARRET DES MUSIQUES EN COURS
		if (window.document.getElementById('musiqueNiveau') !== null) {
			var musiqueNiveau = window.document.getElementById('musiqueNiveau');
			window.document.body.removeChild(musiqueNiveau);
		}
		if (window.document.getElementById('musiqueReussite') !== null) {
			var musiqueNiveau = window.document.getElementById('musiqueReussite');
			window.document.body.removeChild(musiqueReussite);
		}
		if (window.document.getElementById('musiqueGameOver') !== null) {
			var musiqueNiveau = window.document.getElementById('musiqueGameOver');
			window.document.body.removeChild(musiqueGameOver);
		}

		window.document.getElementById('menu').style.display = 'none';
		window.document.getElementById('niveau1').style.display = 'none';
		window.document.getElementsByClassName('morceauxCv')[0].style.display = 'none';
		window.document.getElementById('objectifs').style.display = 'none';
		window.document.getElementById('ecranReussite').style.display = 'none';
		window.document.getElementById('ecranGameOver').style.display = 'none';
		window.document.getElementById('ecranAccueil').style.display = '';
	},
	// INITIALISATION DE L'ECRAN DE REUSSITE DU JEU
	ecranReussite: function() {
		objectifs.arretDecompteTemps(objectifs.idSetIntervalDecompteTemps);
		objectifs.score.calculScoreBonus();
		objectifs.score.calculScoreTotal();

		window.document.getElementById('ecranAccueil').style.display = 'none';
		window.document.getElementById('menu').style.display = 'none';
		window.document.getElementById('niveau1').style.display = 'none';
		window.document.getElementsByClassName('morceauxCv')[0].style.display = 'none';
		window.document.getElementById('objectifs').style.display = 'none';
		window.document.getElementById('ecranGameOver').style.display = 'none';
		window.document.getElementById('ecranReussite').style.display = '';

		// ARRET DE LA MUSIQUE DE FOND DU NIVEAU
		var musiqueNiveau = window.document.getElementById('musiqueNiveau');
		window.document.body.removeChild(musiqueNiveau);
		
		// INITIALISATION DE LA MUSIQUE DE REUSSITE
		var musiqueReussite = document.createElement('audio');
		musiqueReussite.setAttribute('src', 'web/files/musique-reussite.wav');
		musiqueReussite.setAttribute('autoplay', 'autoplay');
		window.document.body.appendChild(musiqueReussite);
	},
	// INITIALISATION DE L'ECRAN GAME OVER
	ecranGameOver: function() {
		window.document.getElementById('ecranAccueil').style.display = 'none';
		window.document.getElementById('menu').style.display = 'none';
		window.document.getElementById('niveau1').style.display = 'none';
		window.document.getElementsByClassName('morceauxCv')[0].style.display = 'none';
		window.document.getElementById('objectifs').style.display = 'none';
		window.document.getElementById('ecranReussite').style.display = 'none';
		window.document.getElementById('ecranGameOver').style.display = '';

		// ARRET DE LA MUSIQUE DE FOND DU NIVEAU
		var musiqueNiveau = window.document.getElementById('musiqueNiveau');
		window.document.body.removeChild(musiqueNiveau);
		
		// INITIALISATION DE LA MUSIQUE DE GAME OVER
		var musiqueGameOver = document.createElement('audio');
		musiqueGameOver.setAttribute('src', 'web/files/musique-gameover.ogg');
		musiqueGameOver.setAttribute('autoplay', 'autoplay');
		window.document.body.appendChild(musiqueGameOver);
	},
	// INITIALISATION DU NIVEAU 1
	niveau1: function(scoreInitial, nombreSecondes, morceauxRetrouveInitial, objetBonusInitial, bonusDeplacementsInitial) {
		
		// ARRET DES MUSIQUES EN COURS
		if (window.document.getElementById('musiqueNiveau') !== null) {
			var musiqueNiveau = window.document.getElementById('musiqueNiveau');
			window.document.body.removeChild(musiqueNiveau);
		}
		if (window.document.getElementById('musiqueReussite') !== null) {
			var musiqueNiveau = window.document.getElementById('musiqueReussite');
			window.document.body.removeChild(musiqueReussite);
		}
		if (window.document.getElementById('musiqueGameOver') !== null) {
			var musiqueNiveau = window.document.getElementById('musiqueGameOver');
			window.document.body.removeChild(musiqueGameOver);
		}

		// ACTIVATION DE TOUS LES EVENEMENTS AVEC LEUR VALEUR PAR DEFAUT
		for (var i = 0; i < evenements.evenementCase.length; i++) {
			evenements.evenementCase[i].recompenseObtenue = false;

			if (evenements.evenementCase[i].indexMorceauCv !== undefined) {
				evenements.evenementCase[i].affichageMorceauCV('morceauCv');
			}
		}
		if (window.document.getElementById('nomJoueur') !== null && window.document.getElementById('continuer') !== null) {
			evenements.suppressionIntroduction();
		}
		if (window.document.getElementById('oui') !== null) {
			evenements.suppressionQuestion();
		}
		if (window.document.getElementById('ok') !== null) {
			evenements.suppressionAnnonceRecompense();
		}
		if (window.document.getElementById('tutoriel') !== null) {
			evenements.suppressionTutoriel();
		}
		if (window.document.getElementById('indicateurEvenement') !== null) {
			evenements.suppressionIndicateurEvenement();
		}

		// AFFICHAGE DU NIVEAU ET DU MENU IN-GAME
		window.document.getElementById('ecranAccueil').style.display = 'none';
		window.document.getElementById('ecranReussite').style.display = 'none';
		window.document.getElementById('ecranGameOver').style.display = 'none';
		window.document.getElementsByClassName('morceauxCv')[0].style.display = 'none';
		window.document.getElementById('objectifs').style.display = 'none';
		window.document.getElementById('menu').style.display = '';
		window.document.getElementById('niveau1').style.display = '';

		// INITIALISATION DE LA MUSIQUE DE FOND DU NIVEAU
		var musiqueNiveau = document.createElement('audio');
		musiqueNiveau.setAttribute('src', 'web/files/musique-niveau.mp3');
		musiqueNiveau.setAttribute('autoplay', 'autoplay');
		musiqueNiveau.setAttribute('loop', 'loop');
		musiqueNiveau.setAttribute('id', 'musiqueNiveau');
		musiqueNiveau.volume = 0.5;
		window.document.body.appendChild(musiqueNiveau);

		// INITIALISATION DES OBJECTIFS
		var initialisationObjectifs = function() {
			objectifs.score.progressionScore(scoreInitial);
			var idSetIntervalDecompteTemps = objectifs.decompteTemps(nombreSecondes);
			objectifs.idSetIntervalDecompteTemps = idSetIntervalDecompteTemps;
			objectifs.morceauxCv.progressionMorceauxCv(morceauxRetrouveInitial);
			objectifs.objetBonus.progressionObjetBonus(objetBonusInitial);
			objectifs.bonusDeplacements.progressionDeplacements(bonusDeplacementsInitial);
			window.document.getElementsByClassName('morceauxCv')[0].style.display = '';
			window.document.getElementById('objectifs').style.display = '';
		}

		// INITIALISATION DE L'INTRODUCTION ET DU TUTORIEL
		evenements.creationIntroduction(0);
		
		window.document.getElementById('continuer').addEventListener('click', function() {
			evenements.suppressionIntroduction();
			evenements.creationIntroduction(1);

			window.document.getElementById('continuer').addEventListener('click', function() {
				evenements.suppressionIntroduction();
				evenements.creationIntroduction(2);

				window.document.getElementById('continuer').addEventListener('click', function() {
					evenements.suppressionIntroduction();
					evenements.creationIntroduction(3);
	
					window.document.getElementById('continuer').addEventListener('click', function() {
						evenements.suppressionIntroduction();
						evenements.creationIntroduction(4);
		
						window.document.getElementById('continuer').addEventListener('click', function() {
							evenements.suppressionIntroduction();
							evenements.creationTutoriel();
							
							window.document.getElementById('continuer').addEventListener('click', function() {
								evenements.suppressionTutoriel();
								initialisationObjectifs();
							}, false);
						}, false);
						window.document.getElementById('passer').addEventListener('click', function() {
							evenements.suppressionIntroduction();
							evenements.creationTutoriel();
				
							window.document.getElementById('continuer').addEventListener('click', function() {
								evenements.suppressionTutoriel();
								initialisationObjectifs();
							}, false);
						}, false);
					}, false);
					window.document.getElementById('passer').addEventListener('click', function() {
						evenements.suppressionIntroduction();
						evenements.creationTutoriel();
			
						window.document.getElementById('continuer').addEventListener('click', function() {
							evenements.suppressionTutoriel();
							initialisationObjectifs();
						}, false);
					}, false);
				}, false);
				window.document.getElementById('passer').addEventListener('click', function() {
					evenements.suppressionIntroduction();
					evenements.creationTutoriel();
		
					window.document.getElementById('continuer').addEventListener('click', function() {
						evenements.suppressionTutoriel();
						initialisationObjectifs();
					}, false);
				}, false);
			}, false);
			window.document.getElementById('passer').addEventListener('click', function() {
				evenements.suppressionIntroduction();
				evenements.creationTutoriel();
	
				window.document.getElementById('continuer').addEventListener('click', function() {
					evenements.suppressionTutoriel();
					initialisationObjectifs();
				}, false);
			}, false);
		}, false);
		window.document.getElementById('passer').addEventListener('click', function() {
			evenements.suppressionIntroduction();
			evenements.creationTutoriel();

			window.document.getElementById('continuer').addEventListener('click', function() {
				evenements.suppressionTutoriel();
				initialisationObjectifs();
			}, false);
		}, false);
		
		// INITIALISATION DES DEPLACEMENT DU JOUEUR
		joueur.deplacement();
	}
}