// Loop
for (var i = 0; i < 10; i++) { //bei 0 wird gestartet; solange i kleiner als 10 ist; sprünge immer 1
  console.log(i);
}

// Loop mit 2er-Sprüngen
for (var i = 0; i < 10; i+=2) { //bei 0 wird gestartet; solange i kleiner als 10 ist; sprünge immer 2
  console.log(i);
}

// while - solange die Bedingung zutrifft, wird die Funktion ausgeführt (Z.B. wenn wetter regnerisch ist, ein passendes Bild einblenden)
var jetzt = new Date();

jetzt = jetzt.getTime();

while (jetzt > 154783590000) {
  console.log('Es ist so weit.');
}
