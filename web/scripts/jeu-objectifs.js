'use strict';
var objectifs = {
	score: {
    scoreObtenu: 0,
    total: 1400,
    progressionScore: function(scoreInitial) {
      this.scoreObtenu = scoreInitial;
      window.document.getElementById('score').setAttribute('value', this.scoreObtenu);
      window.document.getElementById('score').setAttribute('max', this.total);
      window.document.getElementsByClassName('scoreNombre')[0].textContent = this.scoreObtenu;
      window.document.getElementsByClassName('scoreNombre')[1].textContent = this.scoreObtenu;
    },
    scoreBonus: 0,
    calculScoreBonus: function() {
      var scoreBonusDeplacements = 0;
      if (objectifs.bonusDeplacements.nombreDeplacements <= 15) {
        scoreBonusDeplacements = 1000;
      }
      
      var scoreBonusTemps = objectifs.secondesRestantes * 15;
      
      this.scoreBonus = scoreBonusDeplacements + scoreBonusTemps;

      window.document.getElementById('scoreBonus').textContent = this.scoreBonus;
    },
    scoreTotal: 0,
    calculScoreTotal: function() {
      this.scoreTotal = this.scoreObtenu + this.scoreBonus;

      window.document.getElementById('scoreTotal').textContent = this.scoreTotal;
    }
  },
  secondesRestantes: 0,
  decompteTemps: function(nombreSecondes) {

    // ARRET DU DECOMPTE PRECEDANT
    this.arretDecompteTemps(this.idSetIntervalDecompteTemps);

    return setInterval(function() {
      window.document.getElementById('tempsRestant').textContent = nombreSecondes--;
      this.secondesRestantes = nombreSecondes;

      if (nombreSecondes === 0) {
        initialisation.ecranGameOver();
      }
    }, 1000);
  },
  idSetIntervalDecompteTemps: 0,
  arretDecompteTemps: function(idSetInterval) {
    this.secondesRestantes = window.document.getElementById('tempsRestant').textContent;
    clearInterval(idSetInterval);
  },
  morceauxCv: {
    retrouve: 0,
    progressionMorceauxCv: function(morceauxRetrouveInitial) {
      this.retrouve = morceauxRetrouveInitial;
      window.document.getElementById('cvRetrouves').textContent = this.retrouve;
    }
  },
  objetBonus: {
    retrouve: 0,
    progressionObjetBonus: function(objetBonusInitial) {
      this.retrouve = objetBonusInitial;
      window.document.getElementById('bonusRetrouve').textContent = this.retrouve;
    }
  },
  bonusDeplacements: {
    nombreDeplacements: 0,
    progressionDeplacements: function(bonusDeplacementsInitial) {
      this.nombreDeplacements = bonusDeplacementsInitial;
      window.document.getElementById('deplacementsEffectues').textContent = this.nombreDeplacements;
    },
    incrementationDeplacement: function() {
      this.nombreDeplacements = this.nombreDeplacements + 1;
      this.progressionDeplacements(this.nombreDeplacements);
    }
  }
}