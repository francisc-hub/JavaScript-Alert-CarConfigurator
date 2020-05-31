// Variables //

let enter = alert("Bienvenue dans le configurateur de votre voiture !");

let colors = ["Bleu", "Blanc", "Rouge"];
let models = ["Sport", "Luxe"];
let motors = ["120", "140", "220"];
let car = [];

//fonctions //
//modeles//
function fModels() {
  let models = prompt("Choississez un modèle de voiture: sport ou luxe ?");
  if (models == "sport") {
    car.push[0];
    price += 30000;
    alert(price + "€");
  } else if (models == "luxe") {
    car.push[0];
    price += 50000;
    alert(price + "€");
  } else prompt(models);
}
//moteurs//
function fMotors() {
  let motors = prompt("Choississez vos chevaux: 120, 140 ou 200 ?");
  if (motors == 120) {
    car.push[1];
    price = price + 5000;
    alert(price + "€");
  } else if (motors == 140) {
    car.push[1];
    price += 8000;
    alert(price + "€");
  } else if (motors == 200) {
    car.push[1];
    price += 10000;
    alert(price + "€");
  } else prompt(motors);
}
//couleurs//
function fColors() {
  let colors = prompt("Choississez une couleur: bleu, blanc ou rouge ?");
  if (colors == "bleu") {
    car.push[2];
    price += 5000;
    alert(price + "€");
  } else if (colors == "blanc") {
    car.push[2];
    price = price + 3000;
    alert(price + "€");
  } else if (colors == "rouge") {
    car.push[2];
    price = price + 6000;
    alert(price + "€");
  } else prompt(colors);
}
// voiture cree//
function carCreated() {
  alert("voici votre voiture " + car.values);
}

/* ----------------------------------------------traitement------------------------------------*/
let price = 0;
enter;
fModels();
fMotors();
fColors();
carCreated();

//validation //
let valide = prompt(
  "voulez-vous valider votre panier de " + price + "€ : oui ou non?"
);

if ((valide = "oui")) {
  let modifs = prompt("voulez-vous changer des options? oui ou non");
  if ((modifs = "oui")) {
    fModels();
    fMotors();
    fColors();
  } else {
    alert("c'est le moment de payer");
  }
}
