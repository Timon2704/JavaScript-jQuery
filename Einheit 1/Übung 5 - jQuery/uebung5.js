// Button, der für 3 Sekunden nicht klickbar ist
console.log('Dokument lädt');

$(document).ready(function() {

  function timeout() {
    window.setTimeout(function() {
      $('button').removeClass('sending');
      $('button').text('gesendet')
      $('button').attr('disabled', false);
    }, 3000);
  }

  $('button').click(function() {
    $(this).addClass('sending');
    $(this).text('wird gesendet');
    $(this).attr('disabled', true);
    timeout();
  });

}) // "ready" = sobald Ladevorgang abgeschlossen ist, wird Funktion ausgeführt. Alternative: Script am Ende des Bodys einfügen
