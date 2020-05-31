/* TODO
while (tant que 3 config de base alors valider panier)

let optionfacultatif (autopilote, siege chauffant)
let arrayOption []

/* voulez vous supprimer une option ? 
*/

/* voulez vous supprimer une option ?
 */

/* voulez vous supprimer une option ?
 

/***********************
/*     Variables        
/***********************

var priceColor = 1000;
var pricePackLuxe = 2000;
var pricePackSport = 3000;
var priceMotor120 = 500;
var priceMotor140 = 650;
var priceMotor220 = 800;

var total = 0;

/***********************
/*     Fonction         
/***********************

function addOption(
  choiceAction,
  priceColor,
  pricePackLuxe,
  pricePackSport,
  priceMotor120,
  priceMotor140,
  priceMotor220,
  total
) {
  var choiceOption = prompt(
    "Quelle option souhaitez-vous ajouter ou supprimer : couleur ? pack ? moteur ?"
  );

  switch (choiceOption) {
    case "couleur":
      if (choiceAction == "ajouter") {
        total += priceColor;
        alert("Option couleur ajoutée - Votre facture est de :" + total + "€");
      } else if (choiceAction == "supprimer") {
        total -= priceColor;
        alert(
          "Option couleur supprimée - Votre facture est de :" + total + "€"
        );
      }
      break;
    case "pack":
      total = choiceOptionPack(
        pricePackLuxe,
        pricePackSport,
        choiceOption,
        choiceAction,
        total
      );
      break;
    case "moteur":
      total = choiceOptionMotor(
        priceMotor120,
        priceMotor140,
        priceMotor220,
        choiceAction,
        choiceOption,
        total
      );
      break;
    default:
      alert("Merci de choisir au moins 1 option.");
      break;
  }
  return total;
}

/***** fonction : choix du pack ****
function choiceOptionPack(
  pricePackLuxe,
  pricePackSport,
  choiceOption,
  choiceAction,
  total
) {
  var choiceOptionPack = prompt(
    "Souhaitez-vous le pack Sport ou le pack Luxe ?"
  );
  if (choiceAction == "ajouter" && choiceOptionPack == "Luxe") {
    total += pricePackLuxe;
    alert("Option Pack muZik ajoutée - Votre panier est de :" + total + "€");
  } else if (choiceAction == "supprimer" && choiceOptionPack == "Luxe") {
    total -= pricePackLuxe;
    alert("Option Pack Luxe supprimée - Votre panier est de :" + total + "€");
  } else if (choiceAction == "ajouter" && choiceOptionPack == "sport") {
    total += pricePackSport;
    alert("Option Pack Sport ajoutée - Votre panier est de :" + total + "€");
  } else if (choiceAction == "supprimer" && choiceOptionPack == "sport") {
    total -= pricePackSport;
    alert("Option Pack sport supprimée - Votre panier est de :" + total + "€");
  } else {
    alert("Veuillez choisir votre pack : Sport ou luxe.");
  }
  return total;
}

/***** fonction : choix du moteur ****

function choiceOptionMotor(
  priceMotor120,
  priceMotor140,
  priceMotor220,
  choiceAction,
  choiceOption,
  total
) {
  var choiceOptionMotor = prompt(
    "Souhaitez-vous un moteur : 120, 140 ou 220 ?"
  );
  if (choiceAction == "ajouter" && choiceOptionMotor == "120") {
    total += priceMotor120;
    alert("Moteur 120 ch ajouté. Votre facture est de :" + total + "€");
  } else if (choiceAction == "supprimer" && choiceOptionMotor == "120") {
    total -= priceMotor120;
    alert("Moteur 120 ch supprimé. Votre facture est de :" + total + "€");
  }
  if (choiceAction == "ajouter" && choiceOptionMotor == "140") {
    total += priceMotor140;
    alert("Moteur 140 ch ajoutée. Votre facture est de :" + total + "€");
  } else if (choiceAction == "supprimer" && choiceOptionMotor == "140") {
    total -= priceMotor140;
    alert("Moteur 140 ch supprimé. Votre facture est de :" + total + "€");
  }
  if (choiceAction == "ajouter" && choiceOptionMotor == "220") {
    total += priceMotor220;
    alert("Moteur 220 ch ajouté. Votre facture est de :" + total + "€");
  } else if (choiceAction == "supprimer" && choiceOptionMotor == "220") {
    total -= priceMotor220;
    alert("Moteur 220 ch supprimé. Votre facture est de :" + total + "€");
  } else {
    alert("Veuillez choisir entre les moteurs : 120 / 140 / 220.");
  }
  return total;
}

/***********************
/*       Actions        
/***********************

do {
  var choiceAction = prompt(
    "Souhaitez-vous ajouter une option? supprimer une option ? ou valider votre panier ?"
  );

  switch (choiceAction) {
    case "ajouter":
      total = addOption(
        choiceAction,
        priceColor,
        pricePackLuxe,
        pricePackSport,
        priceMotor120,
        priceMotor140,
        priceMotor220,
        total
      );
      break;
    case "supprimer":
      total = addOption(
        choiceAction,
        priceColor,
        pricePackLuxe,
        pricePackSport,
        priceMotor120,
        priceMotor140,
        priceMotor220,
        total
      );
      break;

    /***** Afficher le montant total à payer et sortir de la boucle ****

    case "valider":
      alert("Payer : " + total + "€");
      break;

    /***** Si le visiteur saisi une mauvaise action ****

    default:
      alert("AJOUTER, SUPPRIMER ou VALIDER.");
      break;
  }
} while (choiceAction != "valider");

/*
