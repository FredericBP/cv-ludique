'use strict';
var evenements = {
	evenementEnCours: false,
	indicateurEvenementEnCours: false,
	evenementIntroduction: {
		dialogues: [
			'Je suis arrivé au bureau, la journée peut enfin commencer !',
			'Tiens, mais c\'est le CV de Frédéric ! Le développeur JavaScript que j\'ai rencontré hier qui avait l\'air très prometteur.',
			'Mais il est tout déchiré ! Je suis sûr que c\'est encore un coup de Nekoma, le chat qui squatte le bureau !',
			'Ma responsable avait dit qu\'elle le regarderait ce matin dès son arrivée, et vu l\'heure elle devrait arriver d\'une seconde à l\'autre...',
			'Il faut absolument que je retrouve tous les morceaux du CV de Frédéric et que je le dépose sur son bureau avant qu\'elle arrive !'
		],
		score: 150,
		indexMorceauCv: 1,
		affichageMorceauCV: function(obtentionMorceauCv) {
			window.document.getElementsByClassName('morceauCv')[this.indexMorceauCv].className = obtentionMorceauCv;
		}
	},
	evenementTutoriel: {
		explications: [
			'Se déplacer vers le haut : flèche haut ou Z',
			'Se déplacer vers la gauche : flèche gauche ou Q',
			'Se déplacer vers le bas : flèche bas ou S',
			'Se déplacer vers le droite : flèche droite ou D',
			'Rechercher dans l\'environnement : touche espace'
		]
	},
	evenementCase: [
		{
			// EVENEMENT CASE 3
			question: 'Je devrais chercher autour de la TV.',
			annonceRecompense: 'Et un morceau du CV déchiré par Nekoma retrouvé !',
			nombreMorceauCv: 1,
			recompenseObtenue: false,
			score: 150,
			indexMorceauCv: 3,
			affichageMorceauCV: function(obtentionMorceauCv) {
				window.document.getElementsByClassName('morceauCv')[this.indexMorceauCv].className = obtentionMorceauCv;
			}
		},
		{
			// EVENEMENT CASE 4
			question: 'Nekoma est peut-être venu à côté des étagères, je devrais les fouiller.',
			annonceRecompense: 'Effectivement, il est bien passé par là... J\'ai un morceau du CV en plus !',
			nombreMorceauCv: 1,
			recompenseObtenue: false,
			score: 150,
			indexMorceauCv: 5,
			affichageMorceauCV: function(obtentionMorceauCv) {
				window.document.getElementsByClassName('morceauCv')[this.indexMorceauCv].className = obtentionMorceauCv;
			}
		},
		{
			// EVENEMENT CASE 6
			question: 'Il semble y avoir quelque chose sous la table basse.',
			annonceRecompense: 'Parfait, c\'est un autre morceau du CV !',
			nombreMorceauCv: 1,
			recompenseObtenue: false,
			score: 150,
			indexMorceauCv: 4,
			affichageMorceauCV: function(obtentionMorceauCv) {
				window.document.getElementsByClassName('morceauCv')[this.indexMorceauCv].className = obtentionMorceauCv;
			}
		},
		{
			// EVENEMENT CASE 7
			question: 'Y a peut-être un morceau sur le canapé.',
			annonceRecompense: 'Non, mis à part un (vilain) chat qui ronronne, il n\'y a rien d\'intéressant ici...',
			nombreMorceauCv: 0,
			recompenseObtenue: false,
			score: 0
		},
		{
			// EVENEMENT CASE 9
			question: 'Je devrais regarder autour des bureaux de mes collègues s\'il y a quelque chose.',
			annonceRecompense: 'Il n\'y a aucune trace du CV, mais j\'ai trouvé en bonus du scotch qui me sera bien utile pour recoller les morceaux !',
			nombreMorceauCv: 0,
			recompenseObtenue: false,
			score: 500
		},
		{
			// EVENEMENT CASE 11
			question: 'Tiens, je vais peut-être trouvé un morceau du CV sur le meuble à côté de la fenêtre.',
			annonceRecompense: 'Quelle chance ! Il n\'y a pas un, mais DEUX morceaux du CV !',
			nombreMorceauCv: 2,
			recompenseObtenue: false,
			score: 300,
			indexMorceauCv: 0,
			affichageMorceauCV: function(obtentionMorceauCv) {
				window.document.getElementsByClassName('morceauCv')[this.indexMorceauCv].className = obtentionMorceauCv;
				window.document.getElementsByClassName('morceauCv')[this.indexMorceauCv + 2].className = obtentionMorceauCv;
			}
		},
		{
			// EVENEMENT CASE 12
			continuer: 'J\'ai pas encore trouver tous les morceaux, il faut que je me dépèche avant que Fabienne revienne.',
			terminer: 'J\'ai réussi à trouver tous les morceaux',
			nombreMorceauCv: 2,
			recompenseObtenue: false,
			score: 200
		}
	],
	creationQuestion: function(indexEvenementCase) {
		evenements.evenementEnCours = true;

		var boiteDeDialogue = window.document.createElement('div');
		boiteDeDialogue.setAttribute('id', 'boiteDeDialogue');
		
		var nomJoueur = window.document.createElement('p');
		nomJoueur.setAttribute('id', 'nomJoueur');
		nomJoueur.textContent = joueur.nom;

		var message = window.document.createElement('div');
		message.setAttribute('id', 'message');

		var contenuMessage = window.document.createElement('p');
		contenuMessage.textContent = this.evenementCase[indexEvenementCase].question;

		var boutonOui = window.document.createElement('button');
		boutonOui.setAttribute('id', 'oui');
		boutonOui.textContent = 'Chercher ici';

		var boutonNon = window.document.createElement('button');
		boutonNon.setAttribute('id', 'non');
		boutonNon.textContent = 'Ne rien faire';

		window.document.getElementById('niveau1').appendChild(boiteDeDialogue);
		window.document.getElementById('boiteDeDialogue').appendChild(nomJoueur);
		window.document.getElementById('boiteDeDialogue').appendChild(message);
		window.document.getElementById('message').appendChild(contenuMessage);
		window.document.getElementById('boiteDeDialogue').appendChild(boutonOui);
		window.document.getElementById('boiteDeDialogue').appendChild(boutonNon);
	},
	suppressionQuestion: function() {
		window.document.getElementById('niveau1').removeChild(boiteDeDialogue);
		evenements.evenementEnCours = false;
	},
	creationAnnonceRecompense: function(indexEvenementCase) {
		evenements.evenementEnCours = true;

		var boiteDeDialogue = window.document.createElement('div');
		boiteDeDialogue.setAttribute('id', 'boiteDeDialogue');
		
		var nomJoueur = window.document.createElement('p');
		nomJoueur.setAttribute('id', 'nomJoueur');
		nomJoueur.textContent = joueur.nom;

		var message = window.document.createElement('div');
		message.setAttribute('id', 'message');

		var contenuMessage = window.document.createElement('p');
		contenuMessage.textContent = this.evenementCase[indexEvenementCase].annonceRecompense;

		var boutonOk = window.document.createElement('button');
		boutonOk.setAttribute('id', 'ok');
		boutonOk.textContent = 'OK';

		window.document.getElementById('niveau1').appendChild(boiteDeDialogue);
		window.document.getElementById('boiteDeDialogue').appendChild(nomJoueur);
		window.document.getElementById('boiteDeDialogue').appendChild(message);
		window.document.getElementById('message').appendChild(contenuMessage);
		window.document.getElementById('boiteDeDialogue').appendChild(boutonOk);

		// INCREMENTATION DU SCORE OBTENU
		objectifs.score.scoreObtenu = objectifs.score.scoreObtenu + this.evenementCase[indexEvenementCase].score;
		objectifs.score.progressionScore(objectifs.score.scoreObtenu);
		
		// INCREMENTATION DES MORCEAUX DE CV RETROUVES
		objectifs.morceauxCv.retrouve = objectifs.morceauxCv.retrouve + this.evenementCase[indexEvenementCase].nombreMorceauCv;
		objectifs.morceauxCv.progressionMorceauxCv(objectifs.morceauxCv.retrouve);

		// AJOUT DU MORCEAU DE CV DANS LE CADRE EN BAS A GAUCHE AFFICHANT LA PROGRESSION DU CV
		if (this.evenementCase[indexEvenementCase].indexMorceauCv !== undefined) {
			this.evenementCase[indexEvenementCase].affichageMorceauCV('morceauCv obtenu');
		}

		// INCREMENTATION  DE L'OBJET BONUS RETROUVE
		if (indexEvenementCase === 4) {
			objectifs.objetBonus.retrouve = 1;
			objectifs.objetBonus.progressionObjetBonus(objectifs.objetBonus.retrouve);
		}
	},
	suppressionAnnonceRecompense: function() {
		window.document.getElementById('niveau1').removeChild(boiteDeDialogue);
		evenements.evenementEnCours = false;
	},
	creationIntroduction: function(indexEvenementIntroduction) {
		evenements.evenementEnCours = true;

		var boiteDeDialogue = window.document.createElement('div');
		boiteDeDialogue.setAttribute('id', 'boiteDeDialogue');

		var nomJoueur = window.document.createElement('p');
		nomJoueur.setAttribute('id', 'nomJoueur');
		nomJoueur.textContent = joueur.nom;

		var message = window.document.createElement('div');
		message.setAttribute('id', 'message');

		var contenuMessage = window.document.createElement('p');
		contenuMessage.textContent = this.evenementIntroduction.dialogues[indexEvenementIntroduction];

		var boutonContinuer = window.document.createElement('button');
		boutonContinuer.setAttribute('id', 'continuer');
		boutonContinuer.textContent = 'Continuer';

		var boutonPasser = window.document.createElement('button');
		boutonPasser.setAttribute('id', 'passer');
		boutonPasser.textContent = 'Passer';

		window.document.getElementById('niveau1').appendChild(boiteDeDialogue);
		window.document.getElementById('boiteDeDialogue').appendChild(nomJoueur);
		window.document.getElementById('boiteDeDialogue').appendChild(message);
		window.document.getElementById('message').appendChild(contenuMessage);
		window.document.getElementById('boiteDeDialogue').appendChild(boutonContinuer);
		window.document.getElementById('boiteDeDialogue').appendChild(boutonPasser);
	},
	suppressionIntroduction: function() {
		window.document.getElementById('niveau1').removeChild(boiteDeDialogue);
		evenements.evenementEnCours = false;
	},
	creationTutoriel: function() {
		evenements.evenementEnCours = true;

		var tutoriel = window.document.createElement('div');
		tutoriel.setAttribute('id', 'tutoriel');

		var titre = window.document.createElement('h3');
		titre.textContent = 'COMMANDES';

		var clavier = window.document.createElement('div');
		clavier.setAttribute('id', 'clavier');

		var message = window.document.createElement('div');
		message.setAttribute('id', 'message');

		var explication1 = window.document.createElement('p');
		explication1.textContent = this.evenementTutoriel.explications[0];

		var explication2 = window.document.createElement('p');
		explication2.textContent = this.evenementTutoriel.explications[1];

		var explication3 = window.document.createElement('p');
		explication3.textContent = this.evenementTutoriel.explications[2];

		var explication4 = window.document.createElement('p');
		explication4.textContent = this.evenementTutoriel.explications[3];

		var explication5 = window.document.createElement('p');
		explication5.textContent = this.evenementTutoriel.explications[4];

		var boutonContinuer = window.document.createElement('button');
		boutonContinuer.setAttribute('id', 'continuer');
		boutonContinuer.textContent = 'Continuer';

		window.document.getElementById('niveau1').appendChild(tutoriel);
		window.document.getElementById('tutoriel').appendChild(titre);
		window.document.getElementById('tutoriel').appendChild(clavier);
		window.document.getElementById('tutoriel').appendChild(message);
		window.document.getElementById('message').appendChild(explication1);
		window.document.getElementById('message').appendChild(explication2);
		window.document.getElementById('message').appendChild(explication3);
		window.document.getElementById('message').appendChild(explication4);
		window.document.getElementById('message').appendChild(explication5);
		window.document.getElementById('tutoriel').appendChild(boutonContinuer);
	},
	suppressionTutoriel: function() {
		window.document.getElementById('niveau1').removeChild(tutoriel);
		evenements.evenementEnCours = false;
	},
	creationIndicateurEvenement: function(indexEvenementCase) {
		if (!evenements.indicateurEvenementEnCours && !this.evenementCase[indexEvenementCase].recompenseObtenue) {
			evenements.indicateurEvenementEnCours = true;

			var indicateurEvenement = window.document.createElement('div');
			indicateurEvenement.setAttribute('id', 'indicateurEvenement');
	
			var clavierEspace = window.document.createElement('div');
			clavierEspace.setAttribute('id', 'clavierEspace');
	
			var fouiller = window.document.createElement('p');
			fouiller.setAttribute('id', 'fouiller');
			fouiller.textContent = 'Appuyez sur la touche espace pour fouiller ici';
	
			//setTimeout(function() {
				window.document.getElementById('niveau1').appendChild(indicateurEvenement);
				window.document.getElementById('indicateurEvenement').appendChild(clavierEspace);
				window.document.getElementById('indicateurEvenement').appendChild(fouiller);
			//}, 800);
		}
	},
	suppressionIndicateurEvenement: function() {
		if (evenements.indicateurEvenementEnCours) {
			window.document.getElementById('niveau1').removeChild(indicateurEvenement);
			evenements.indicateurEvenementEnCours = false;
		}
	},
	affichageIndicateurEvenement: function() {
		switch (joueur.coordonneesJoueurPourChaqueCase.repereJoueur()) {
      // ACTION SI LE JOUEUR EST SUR LA CASE 2
			case (joueur.coordonneesJoueurPourChaqueCase.repereCase(2)):
				evenements.suppressionIndicateurEvenement();
			break;

      // ACTION SI LE JOUEUR EST SUR LA CASE 3
			case (joueur.coordonneesJoueurPourChaqueCase.repereCase(3)):
				if (this.evenementCase[0].recompenseObtenue) {
					evenements.suppressionIndicateurEvenement();
				} else {
					evenements.creationIndicateurEvenement(0);
				}
			break;

			// ACTION SI LE JOUEUR EST SUR LA CASE 4
			case (joueur.coordonneesJoueurPourChaqueCase.repereCase(4)):
				if (this.evenementCase[1].recompenseObtenue) {
					evenements.suppressionIndicateurEvenement();
				} else {
					evenements.creationIndicateurEvenement(1);
				}
			break;

			// ACTION SI LE JOUEUR EST SUR LA CASE 5
			case (joueur.coordonneesJoueurPourChaqueCase.repereCase(5)):
				evenements.suppressionIndicateurEvenement();
			break;

			// ACTION SI LE JOUEUR EST SUR LA CASE 6
			case (joueur.coordonneesJoueurPourChaqueCase.repereCase(6)):
				if (this.evenementCase[2].recompenseObtenue) {
					evenements.suppressionIndicateurEvenement();
				} else {
					evenements.creationIndicateurEvenement(2);
				}
			break;

			// ACTION SI LE JOUEUR EST SUR LA CASE 7
			case (joueur.coordonneesJoueurPourChaqueCase.repereCase(7)):
				if (this.evenementCase[3].recompenseObtenue) {
					evenements.suppressionIndicateurEvenement();
				} else {
					evenements.creationIndicateurEvenement(3);
				}
			break;

			// ACTION SI LE JOUEUR EST SUR LA CASE 8
			case (joueur.coordonneesJoueurPourChaqueCase.repereCase(8)):
				evenements.suppressionIndicateurEvenement();
			break;

			// ACTION SI LE JOUEUR EST SUR LA CASE 9
			case (joueur.coordonneesJoueurPourChaqueCase.repereCase(9)):
				if (this.evenementCase[4].recompenseObtenue) {
					evenements.suppressionIndicateurEvenement();
				} else {
					evenements.creationIndicateurEvenement(4);
				}
			break;

			// ACTION SI LE JOUEUR EST SUR LA CASE 10
			case (joueur.coordonneesJoueurPourChaqueCase.repereCase(10)):
				evenements.suppressionIndicateurEvenement();
			break;

			// ACTION SI LE JOUEUR EST SUR LA CASE 11
			case (joueur.coordonneesJoueurPourChaqueCase.repereCase(11)):
				if (this.evenementCase[5].recompenseObtenue) {
					evenements.suppressionIndicateurEvenement();
				} else {
					evenements.creationIndicateurEvenement(5);
				}
			break;

			// ACTION SI LE JOUEUR EST SUR LA CASE 12
			case (joueur.coordonneesJoueurPourChaqueCase.repereCase(12)):
				evenements.suppressionIndicateurEvenement();
			break;
		}
  }
}