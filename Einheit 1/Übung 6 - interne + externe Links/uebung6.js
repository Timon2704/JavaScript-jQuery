// Alle externen Links sollen sich in neuem Tab öffnen - Achtung! Funktioniert hier nicht - fehlerhaft
var externalLink = $('a[href^="https://"], a[href^="http://"]');

if(externalLink.length > 0) {
  externalLink.attr('target','_blank');
  externalLink.addClass('external')
}
