$(document).ready( function() {
  $('.instrument').on('click', 'button', function(event) {
    var note = document.getElementById($(this).html() + 'Audio');
    // if (note.paused) {
    note.play();
    // } else {
    note.currentTime = 0;
    // }
  });

  $("body").keydown(function(event) {
    var note = '';
    if (event.key == 'c') {
      note = document.getElementById('cAudio');
    } else if (event.key == 'd'){
      note = document.getElementById('dAudio');
    } else if (event.key == 'e'){
      note = document.getElementById('eAudio');
    } else if (event.key == 'f'){
      note = document.getElementById('fAudio');
    } else if (event.key == 'g'){
      note = document.getElementById('gAudio');
    } else if (event.key == 'a'){
      note = document.getElementById('aAudio');
    } else if (event.key == 'b'){
      note = document.getElementById('bAudio');
    }
    // if (note.paused) {
    note.play();
    // } else {
    note.currentTime = 0;
    // }
  });


});
