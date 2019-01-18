// Definition von Variablen - mehrere Variablen mit Beistrich getrennt
var apples = 5, nuts = 17, lemons = 9;
/* Hinweis: var entspricht Standard von ECMAScript 5, bei Version 6 kann "const" oder "let" verwendet werden -
siehe https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75 */

// Werte von Variablen in Console anzeigen
console.log(apples, nuts, lemons);

// Berechnung von Werten in der Console (Zeichen: +, -, *, /)
console.log(apples * nuts);

// Wenn man zwei verschiedne Datentypen mit "+" verbindet, werden sie nicht addiert sondern verkettet
console.log('Das Ergebnis: ' + apples + lemons);
console.log('Das Ergebnis: ', + apples + lemons);

// Wenn man Begriffe verwendet, die " erfodern, sollten verschiedene Arten von " verwendet werden (')
console.log('<input type="email">');
console.log('<input type="email" onclick="this.style.backgroundColor=\'black\'">'); //"Escapeing (\')" wird oft verwendet wenn, mehrere Funktionen verwendet werden

// es können auch längere Zeichenketten als Variable definiert werden
var inputTag = '<input type="email">'
console.log(inputTag);

// Arrays
var woche = [
  'Montag',
  'Dienstag',
  'Mittwoch',
  'Donnerstag',
  'Freitag',
];

// Andere bzw. längere Schreibweise mit gleicher Funktion:
var wochenende = new Array('Samstag', 'Sonntag');

//Ausgabe von Wert innerhalb des Arreys (Hinweis: man beginnt mit 0 an zu zählen - erster Wert is 0; Freitag ist also 4)
console.log('Die Arbeitswoche hat ' + woche.length + ' Tage.');
console.log('Heute ist ' + woche[4] + '.');

// Undefined-Meldung verhindern, wenn Array-Eintrag nicht existiert
if(typeof woche[5] == 'undefined') {
  console.log('Dieser Tag entfällt diese Woche');
} else {
  console.log('Heute ist ' + woche[5])
}

// in Alert komplette Liste einbinden
alert(woche);

// Assoziative Arrays ...?


// Object erstellen
var person = {
  alter: 31,
  groesse: 180,
  anrede: 'Herr',
  vorname: 'Max',
  nachname: 'Mustermann',
};

console.log('Sehr geehrter ' + person.anrede + ' ' + person.vorname + ' ' + person.nachname);


// Function erstellen - an Function immer Klammer anhängen!
var tier = function () {
  return 'Käfer';
};

console.log(tier());

// Mit Funcition kann man z.b. einen String voranstellen
var tier = function (vieh) {
  return 'Schöner ' + vieh;
};

console.log(tier('Vogel'));

// auch mit Person möglich
var wieIstDeinName = function(person) {
  return person.vorname;
}

console.log(wieIstDeinName(person));
