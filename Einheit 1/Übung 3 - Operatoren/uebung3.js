// Operatoren und if
var himmel = 'wolkig';

if(himmel == 'blau'){
  console.log('Der Himmel ist blau.');
} else if (himmel == 'wolkig') {
  console.log('Der Himmel ist wolkig.');
}
else {
  console.log('Der Himmel ist nicht blau.');
}

// Operatoren und if - genaue Übereinstimmung ===
var note = '1';

if(note === 1){
  console.log('Trifft zu.');
} else {
  console.log('Triffft nicht zu.');
} // Trifft nicht zu weil Typ nicht übereinstimmt


// Größenvergleich mit Operatoren
var tomate = 5.0;
var melone = 23.5;

if (tomate >= melone) { // Mögliche Zeichen: <, >, =, <=, >=, != (ist nicht gleich) -- siehe Comparisons auf W3schools
  console.log('Tomate ist größer als Melone.');
} else {
  console.log('Tomate ist kleiner als Melone.');
}

// Negierung -- mittels ! wird die Bedingung umgekehrt
if ( !(tomate >= melone)) {
  console.log('Tomate ist größer als Melone.');
} else {
  console.log('Tomate ist kleiner als Melone.');
}

// Oder mittels || -- eine der Bedingungen muss zutreffen
if (tomate == 7 || melone == 23.5) {
  console.log('Richtig!');
} else {
  console.log('Falsch!');
}

// Und mittels && -- beide Bedingugnen müssen zutreffen
if (tomate == 7 && melone == 23.5) {
  console.log('Richtig!');
} else {
  console.log('Falsch!');
}

// Weitere Möglichkeiten: Swicht und case -- mehrere Bedingungen werden abgefragt
switch (Melone) {
  case '23.5':
    console.log(true);
    break;
  case 7:
    console.log(true);
    break; // Break verhindert Fortfahren
  default:
    console.log(false);
}
